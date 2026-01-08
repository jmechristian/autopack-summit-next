/**
 * Gen 2 Amplify API Client
 * Direct GraphQL calls to Gen 2 AppSync endpoint
 * This works alongside the existing Gen 1 Amplify setup
 *
 * Uses AWS IAM authentication (default for this Gen 2 API)
 * Uses Cognito Identity Pool to get temporary IAM credentials
 */

import { Amplify } from 'aws-amplify';
import gen2Config from '../src/gen2-aws-exports';

// Store Gen 2 token in memory (or use localStorage for persistence)
let gen2Token = null;

/**
 * Sign in to Gen 2 Cognito User Pool
 * Requires: npm install amazon-cognito-identity-js
 *
 * @param {string} username - Email or username
 * @param {string} password - Password
 * @returns {Promise<string>} The ID token
 */
export const signInGen2 = async (username, password) => {
  try {
    // Dynamic import - will fail gracefully if package not installed
    const { CognitoUserPool, AuthenticationDetails, CognitoUser } =
      await import('amazon-cognito-identity-js');

    const userPool = new CognitoUserPool({
      UserPoolId: gen2Config.aws_user_pools_id,
      ClientId: gen2Config.aws_user_pools_web_client_id,
    });

    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          const token = result.getIdToken().getJwtToken();
          setGen2CognitoToken(token);
          resolve(token);
        },
        onFailure: (err) => {
          console.error('Gen 2 sign in failed:', err);
          reject(err);
        },
      });
    });
  } catch (error) {
    throw new Error(
      'amazon-cognito-identity-js not installed. Run: npm install amazon-cognito-identity-js\n' +
        'Or use setGen2CognitoToken() to manually set a token.'
    );
  }
};

/**
 * Gets the stored Gen 2 Cognito token
 * @returns {string|null} The stored token or null
 */
export const getGen2CognitoToken = () => {
  // Check memory first
  if (gen2Token) return gen2Token;

  // Check localStorage as fallback
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('gen2_cognito_token');
    if (stored) {
      gen2Token = stored;
      return stored;
    }
  }

  return null;
};

/**
 * Sets the Gen 2 Cognito token (for manual token management)
 * @param {string} token - The Cognito ID token
 */
export const setGen2CognitoToken = (token) => {
  gen2Token = token;
  if (typeof window !== 'undefined') {
    localStorage.setItem('gen2_cognito_token', token);
  }
};

/**
 * Clears the Gen 2 Cognito token
 */
export const clearGen2CognitoToken = () => {
  gen2Token = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem('gen2_cognito_token');
  }
};

/**
 * Calls the Gen 2 GraphQL API endpoint using AWS IAM authentication
 * Uses Amplify's API.graphql with IAM auth mode for the Gen 2 endpoint
 * @param {string} query - GraphQL query or mutation string
 * @param {object} variables - Variables for the query/mutation
 * @returns {Promise<object>} The data from the GraphQL response
 */
export const gen2GraphQL = async (query, variables = {}) => {
  const endpoint =
    process.env.NEXT_PUBLIC_GEN2_APPSYNC_ENDPOINT ||
    gen2Config.aws_appsync_graphqlEndpoint;

  if (!endpoint) {
    throw new Error(
      'Gen 2 API endpoint missing. Please set NEXT_PUBLIC_GEN2_APPSYNC_ENDPOINT in your environment variables.'
    );
  }

  try {
    // Get IAM credentials from Cognito Identity Pool using AWS SDK
    // This works independently of Amplify's auth module
    const AWS = (await import('aws-sdk')).default;

    // Configure AWS with Gen 2 Identity Pool
    AWS.config.update({
      region: gen2Config.aws_appsync_region,
    });

    // Get credentials from Cognito Identity Pool
    const credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: gen2Config.aws_cognito_identity_pool_id,
    });

    // Refresh credentials with better error handling
    try {
      await credentials.getPromise();
    } catch (credError) {
      console.error('Cognito Identity Pool Error:', credError);
      throw new Error(
        `Failed to get credentials from Cognito Identity Pool: ${credError.message}. ` +
          `Make sure the Identity Pool (${gen2Config.aws_cognito_identity_pool_id}) allows unauthenticated access ` +
          `and the unauthenticated IAM role has permissions to call AppSync.`
      );
    }

    if (!credentials.accessKeyId) {
      throw new Error(
        'AWS credentials not available. Make sure Gen 2 Cognito Identity Pool allows unauthenticated access ' +
          `and the unauthenticated IAM role has permissions to call AppSync. Identity Pool: ${gen2Config.aws_cognito_identity_pool_id}`
      );
    }

    // Sign the request with AWS Signature V4
    // Use aws4 for browser-compatible signing (lightweight)
    let aws4;
    try {
      aws4 = (await import('aws4')).default;
    } catch {
      // If aws4 not available, install it: npm install aws4
      throw new Error('aws4 package required. Run: npm install aws4');
    }

    const url = new URL(endpoint);
    const body = JSON.stringify({ query, variables });

    const request = {
      host: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
      service: 'appsync',
      region: gen2Config.aws_appsync_region,
    };

    // Sign the request
    const signed = aws4.sign(request, {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
      sessionToken: credentials.sessionToken,
    });

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: signed.headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(
        `GraphQL errors: ${JSON.stringify(result.errors, null, 2)}`
      );
    }

    return result.data;
  } catch (error) {
    console.error('Error calling Gen 2 API:', error);
    throw error;
  }
};

/**
 * Helper to call a GraphQL query
 * @param {string} query - GraphQL query string
 * @param {object} variables - Query variables
 * @returns {Promise<object>} Query result data
 */
export const gen2Query = async (query, variables = {}) => {
  return gen2GraphQL(query, variables);
};

/**
 * Helper to call a GraphQL mutation
 * @param {string} mutation - GraphQL mutation string
 * @param {object} variables - Mutation variables
 * @returns {Promise<object>} Mutation result data
 */
export const gen2Mutation = async (mutation, variables = {}) => {
  return gen2GraphQL(mutation, variables);
};
