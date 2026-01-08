import AWS from 'aws-sdk';
// IMPORTANT: Using New Gen 1 Cognito User Pool
// New Gen 1 Pool ID: us-east-1_roxwEvlnG
// Old Gen 1 Pool ID: us-east-1_2JouwovYC (NOT USED HERE)
// Gen 2 Pool ID: us-east-1_dgbsmfKuI (NOT USED HERE)
import newGen1Config from '../../src/new-gen1-aws-exports';

/**
 * Generate a secure temporary password that meets Cognito requirements:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character
 */
const generateTemporaryPassword = () => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  // Ensure at least one of each required character type
  let password = '';
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += special[Math.floor(Math.random() * special.length)];
  
  // Fill the rest randomly (minimum 8 total, so 4 more)
  const allChars = uppercase + lowercase + numbers + special;
  for (let i = password.length; i < 12; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  // Shuffle the password to randomize character positions
  return password.split('').sort(() => Math.random() - 0.5).join('');
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, firstName, lastName } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Configure AWS SDK with New Gen 1 region
    // Use environment variables if available, otherwise use IAM role (for deployed environments)
    const cognitoConfig = {
      region: newGen1Config.aws_cognito_region || 'us-east-1',
    };

    // If AWS credentials are in environment variables (for local dev), use them
    if (process.env.AWSACCESSKEYID && process.env.AWSSECRETACCESSKEY) {
      cognitoConfig.credentials = {
        accessKeyId: process.env.AWSACCESSKEYID,
        secretAccessKey: process.env.AWSSECRETACCESSKEY,
      };
    }

    // Create Cognito Identity Service Provider client
    const cognito = new AWS.CognitoIdentityServiceProvider(cognitoConfig);

    // Generate temporary password
    const temporaryPassword = generateTemporaryPassword();

    // Create user in New Gen 1 Cognito User Pool with email verified
    const params = {
      UserPoolId: newGen1Config.aws_user_pools_id,
      Username: email, // Using email as username (New Gen 1 is configured for email as username)
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        },
        {
          Name: 'email_verified',
          Value: 'true', // IMPORTANT: Auto-verify email since they registered through our form
        },
        ...(firstName
          ? [
              {
                Name: 'given_name',
                Value: firstName,
              },
            ]
          : []),
        ...(lastName
          ? [
              {
                Name: 'family_name',
                Value: lastName,
              },
            ]
          : []),
      ],
      TemporaryPassword: temporaryPassword,
      MessageAction: 'SUPPRESS', // Don't send welcome email (we'll handle that separately)
      // Note: email_verified is set to 'true' above, so the email will be verified upon creation
    };

    const result = await cognito.adminCreateUser(params).promise();

    // Verify email_verified attribute was set correctly
    const emailVerifiedAttr = result.User.Attributes?.find(
      (attr) => attr.Name === 'email_verified'
    );
    const isEmailVerified = emailVerifiedAttr?.Value === 'true';

    // Log the password for app use (this will appear in server logs)
    console.log('========================================');
    console.log('COGNITO USER CREATED (NEW GEN 1)');
    console.log('Email:', email);
    console.log('Email Verified:', isEmailVerified ? 'YES ✓' : 'NO ✗');
    console.log('Temporary Password:', temporaryPassword);
    console.log('New Gen 1 User Pool ID:', newGen1Config.aws_user_pools_id);
    console.log('========================================');

    res.status(200).json({
      success: true,
      username: result.User.Username,
      userStatus: result.User.UserStatus,
      temporaryPassword: temporaryPassword, // Return password so it can be logged client-side too
    });
  } catch (error) {
    console.error('Error creating Cognito user:', error);
    
    // Handle specific Cognito errors
    if (error.code === 'UsernameExistsException') {
      return res.status(409).json({
        message: 'User already exists in Cognito',
        error: error.message,
      });
    }

    res.status(500).json({
      message: 'Error creating Cognito user',
      error: error.message,
    });
  }
}

