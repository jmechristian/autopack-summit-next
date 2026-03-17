import awsExports from '../../src/aws-exports';

const UPDATE_PROFILE_PICTURE = /* GraphQL */ `
  mutation UpdateApsAppUserProfilePicture($input: UpdateApsAppUserProfileInput!) {
    updateApsAppUserProfile(input: $input) {
      id
      profilePicture
      updatedAt
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { profileId, profilePicture } = req.body || {};
    if (!profileId || !profilePicture) {
      return res
        .status(400)
        .json({ error: 'profileId and profilePicture are required' });
    }

    const endpoint =
      process.env.NEXT_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT ||
      awsExports.aws_appsync_graphqlEndpoint;
    const apiKey =
      process.env.NEXT_PUBLIC_AWS_APPSYNC_API_KEY ||
      awsExports.aws_appsync_apiKey;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        query: UPDATE_PROFILE_PICTURE,
        variables: {
          input: {
            id: profileId,
            profilePicture,
          },
        },
      }),
    });

    const result = await response.json();
    if (!response.ok || result.errors) {
      return res.status(400).json({
        error:
          result?.errors?.[0]?.message ||
          response.statusText ||
          'Failed to update profile picture',
      });
    }

    return res.status(200).json({
      profile: result?.data?.updateApsAppUserProfile,
    });
  } catch (error) {
    console.error('Error updating app user profile picture:', error);
    return res
      .status(500)
      .json({ error: error?.message || 'Unexpected server error' });
  }
}

