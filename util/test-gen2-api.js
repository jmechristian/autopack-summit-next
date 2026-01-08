/**
 * Test script for Gen 2 API
 * Run this to test your Gen 2 API connection
 */

import { gen2GraphQL } from './gen2-api';

const testQuery = `
  query MyQuery {
    listAPS {
      items {
        id
        year
      }
    }
  }
`;

export const testGen2API = async () => {
  console.log('Testing Gen 2 API connection...');
  console.log('Endpoint:', process.env.NEXT_PUBLIC_GEN2_APPSYNC_ENDPOINT);
  console.log('API Key:', process.env.NEXT_PUBLIC_GEN2_API_KEY ? '***' + process.env.NEXT_PUBLIC_GEN2_API_KEY.slice(-4) : 'NOT SET');

  try {
    const result = await gen2GraphQL(testQuery);
    console.log('✅ Success! Gen 2 API is working.');
    console.log('Response:', JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.error('❌ Error testing Gen 2 API:', error.message);
    throw error;
  }
};

// If running directly (not imported)
if (typeof window !== 'undefined') {
  // Browser environment - expose to window for console testing
  window.testGen2API = testGen2API;
}

