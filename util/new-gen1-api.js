/**
 * New Gen 1 API Client
 * Separate API from the existing Gen 1 Amplify setup
 * Uses API Key authentication
 * Does NOT interfere with existing Amplify configuration
 */

const NEW_GEN1_CONFIG = {
  endpoint: 'https://kksf3hvg4rcsflse5jeesqsmki.appsync-api.us-east-1.amazonaws.com/graphql',
  region: 'us-east-1',
  apiKey: 'da2-qp6j4obhl5crvafpdrloce5mwy',
};

const NEW_GEN1_EVENT_ID = 'd00b35f5-c45b-42eb-b306-fa3dfeee0251';

/**
 * Calls the new Gen 1 GraphQL API endpoint using API Key authentication
 * @param {string} query - GraphQL query or mutation string
 * @param {object} variables - Variables for the query/mutation
 * @returns {Promise<object>} The data from the GraphQL response
 */
export const newGen1GraphQL = async (query, variables = {}) => {
  try {
    const response = await fetch(NEW_GEN1_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': NEW_GEN1_CONFIG.apiKey,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
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
    console.error('Error calling new Gen 1 API:', error);
    throw error;
  }
};

/**
 * Helper to call a GraphQL query
 * @param {string} query - GraphQL query string
 * @param {object} variables - Query variables
 * @returns {Promise<object>} Query result data
 */
export const newGen1Query = async (query, variables = {}) => {
  return newGen1GraphQL(query, variables);
};

/**
 * Helper to call a GraphQL mutation
 * @param {string} mutation - GraphQL mutation string
 * @param {object} variables - Mutation variables
 * @returns {Promise<object>} Mutation result data
 */
export const newGen1Mutation = async (mutation, variables = {}) => {
  return newGen1GraphQL(mutation, variables);
};

/**
 * List APS events from the new Gen 1 API
 * @returns {Promise<Array>} Array of APS events
 */
export const listAPSNewGen1 = async () => {
  const query = `
    query ListAPS {
      listAPS {
        items {
          id
          year
        }
      }
    }
  `;

  const result = await newGen1Query(query);
  return result.listAPS.items || [];
};

/**
 * Create a company in the new Gen 1 API
 * @param {object} data - Company data
 * @returns {Promise<object>} Created company object
 */
export const createCompanyNewGen1 = async (data) => {
  const mutation = `
    mutation CreateAPSCompany($input: CreateAPSCompanyInput!) {
      createAPSCompany(input: $input) {
        id
        name
        email
        type
        eventId
        description
        website
        phone
        address
        city
        state
        zip
        country
        logo
      }
    }
  `;

  const companyInput = {
    name: data.name || '',
    email: data.email || '',
    type: data.type || 'OEMTIER1',
    eventId: NEW_GEN1_EVENT_ID,
    description: data.description || null,
    website: data.website || null,
    phone: data.phone || null,
    address: data.address || data.street_1 || null,
    city: data.city || null,
    state: data.state || null,
    zip: data.zip || null,
    country: data.country || null,
    logo: data.logo || null,
  };

  const result = await newGen1Mutation(mutation, { input: companyInput });
  return result.createAPSCompany;
};

/**
 * Get all companies from the new Gen 1 API
 * @returns {Promise<Array>} Array of company objects
 */
export const getAPSCompaniesNewGen1 = async () => {
  const query = `
    query ListAPSCompanies($filter: ModelAPSCompanyFilterInput, $limit: Int) {
      listAPSCompanies(filter: $filter, limit: $limit) {
        items {
          id
          name
          email
          type
          description
          website
          phone
        }
      }
    }
  `;

  try {
    const result = await newGen1Query(query, {
      limit: 1000,
    });

    return result.listAPSCompanies.items || [];
  } catch (error) {
    console.error('Error fetching new Gen 1 companies:', error);
    throw error;
  }
};

/**
 * Check if a company exists in new Gen 1 API by email
 * @param {string} email - Company email to check
 * @returns {Promise<object|null>} Company object if found, null otherwise
 */
export const checkForExistingCompanyNewGen1 = async (email) => {
  const query = `
    query ListAPSCompanies($filter: ModelAPSCompanyFilterInput) {
      listAPSCompanies(filter: $filter) {
        items {
          id
          name
          email
        }
      }
    }
  `;

  try {
    const result = await newGen1Query(query, {
      filter: { email: { contains: email } },
    });

    if (result.listAPSCompanies.items.length > 0) {
      return result.listAPSCompanies.items[0];
    }
    return null;
  } catch (error) {
    console.error('Error checking for existing new Gen 1 company:', error);
    throw error;
  }
};

/**
 * Get companies from existing Gen 1 and create them in new Gen 1 API
 * @param {Function} getAPSCompanies - Function to get companies from existing Gen 1
 * @returns {Promise<object>} Results with successful, failed, and skipped companies
 */
export const syncCompaniesToNewGen1 = async (getAPSCompanies) => {
  // Get companies from existing Gen 1
  const gen1Companies = await getAPSCompanies();
  console.log(`Found ${gen1Companies.length} companies in existing Gen 1`);

  const results = {
    successful: [],
    failed: [],
    skipped: [],
  };

  // Create each company in new Gen 1
  for (const gen1Company of gen1Companies) {
    try {
      // Check if company already exists (by email)
      const checkQuery = `
        query ListAPSCompanies($filter: ModelAPSCompanyFilterInput) {
          listAPSCompanies(filter: $filter) {
            items {
              id
              email
            }
          }
        }
      `;

      const existing = await newGen1Query(checkQuery, {
        filter: { email: { eq: gen1Company.email } },
      });

      if (existing.listAPSCompanies.items.length > 0) {
        results.skipped.push({
          gen1Id: gen1Company.id,
          name: gen1Company.name,
          reason: 'Already exists in new Gen 1',
          newGen1Id: existing.listAPSCompanies.items[0].id,
        });
        continue;
      }

      // Create the company in new Gen 1
      const created = await createCompanyNewGen1(gen1Company);

      results.successful.push({
        gen1Id: gen1Company.id,
        newGen1Id: created.id,
        name: gen1Company.name,
        email: gen1Company.email,
      });
    } catch (err) {
      results.failed.push({
        gen1Id: gen1Company.id,
        name: gen1Company.name,
        error: err.message,
      });
      console.error(`Failed to create company ${gen1Company.name}:`, err);
    }
  }

  return {
    summary: {
      total: gen1Companies.length,
      successful: results.successful.length,
      failed: results.failed.length,
      skipped: results.skipped.length,
    },
    details: results,
  };
};

/**
 * Get company name from new Gen 1 API
 * @param {string} companyId - Company ID
 * @returns {Promise<string|null>} Company name or null
 */
export const getCompanyNameNewGen1 = async (companyId) => {
  if (!companyId) return null;

  const query = `
    query GetAPSCompany($id: ID!) {
      getAPSCompany(id: $id) {
        id
        name
      }
    }
  `;

  try {
    const result = await newGen1Query(query, { id: companyId });
    return result.getAPSCompany?.name || null;
  } catch (error) {
    console.error('Error fetching company name:', error);
    return null;
  }
};

/**
 * Create a new registrant in the new Gen 1 API
 * Includes: registrant, QR code, app user, and Cognito user
 * @param {object} data - Registration data
 * @returns {Promise<object>} Created registrant, app user, and Cognito user data
 */
export const createNewApsRegistrantNewGen1 = async (data) => {
  // Get company name if we have a companyId
  let companyName = null;
  if (data.aPSRegistrant2025CompanyNameId) {
    companyName = await getCompanyNameNewGen1(data.aPSRegistrant2025CompanyNameId);
  }

  // Map fields to new Gen 1 schema (same as Gen 2)
  const registrantInput = {
    apsID: NEW_GEN1_EVENT_ID,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || null,
    companyId: data.aPSRegistrant2025CompanyNameId || null,
    jobTitle: data.jobTitle || null,
    attendeeType: data.attendeeType,
    termsAccepted: data.termsAccepted || false,
    interests: data.interests || [],
    otherInterest: data.otherInterest || null,
    speedNetworking: data.speedNetworking || false,
    speedNetworkingStatus: data.speedNetworking ? 'PENDING' : null,
    billingAddressFirstName: data.billingAddress?.firstName || null,
    billingAddressLastName: data.billingAddress?.lastName || null,
    billingAddressEmail: data.billingAddress?.email || null,
    billingAddressPhone: data.billingAddress?.phone || null,
    billingAddressStreet: data.billingAddress?.street || null,
    billingAddressCity: data.billingAddress?.city || null,
    billingAddressState: data.billingAddress?.state || null,
    billingAddressZip: data.billingAddress?.zip || null,
    sameAsAttendee: data.sameAsAttendee || false,
    speakerTopic: data.speakerTopic || null,
    learningObjectives: data.learningObjectives || null,
    totalAmount: data.totalAmount ? parseInt(data.totalAmount) : null,
    discountCode: data.discountCode || null,
    status:
      data.attendeeType === 'Solution-Provider' ||
      data.attendeeType === 'Sponsor'
        ? 'WAITLIST'
        : 'PENDING',
    morrisetteTransportation: data.morrisetteTransportation || null,
    morrisetteStatus: data.morrisetteStatus || null,
    magnaTransportation: data.magnaTransportation || null,
    magnaStatus: data.magnaStatus || null,
    aristoTransportation: data.aristoTransportation || null,
    aristoStatus: data.aristoStatus || null,
    paymentConfirmation: data.paymentConfirmation || null,
    registrationEmailSent: false,
    registrationEmailReceived: false,
    welcomeEmailSent: false,
  };

  // Create registrant mutation
  const createRegistrantMutation = `
    mutation CreateApsRegistrant($input: CreateApsRegistrantInput!) {
      createApsRegistrant(input: $input) {
        id
        email
        firstName
        lastName
      }
    }
  `;

  try {
    // Create the registrant
    const registrantResult = await newGen1Mutation(createRegistrantMutation, {
      input: registrantInput,
    });

    const registrantId = registrantResult.createApsRegistrant.id;

    if (!registrantId) {
      throw new Error('Failed to create registrant - no ID returned');
    }

    // Generate QR code and upload to S3 (using existing Gen 1 Storage)
    let qrCodeUrl = null;
    try {
      // Import Storage from aws-amplify (Gen 1)
      const { Storage } = await import('aws-amplify');
      const QRCode = (await import('qrcode')).default;

      // Generate vCard format
      const vcardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${data.firstName} ${data.lastName}\nN:${data.lastName};${data.firstName};;;\nORG:${companyName || ''}\nTITLE:${data.jobTitle || ''}\nEMAIL;TYPE=WORK:${data.email}\nTEL;TYPE=WORK:${data.phone || ''}\nEND:VCARD`;

      const qrDataUrl = await QRCode.toDataURL(vcardData, {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        quality: 0.92,
        margin: 1,
        width: 512,
      });

      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      const fileName = `qrcodes/${registrantId}-${Date.now()}.png`;
      const file = new File([blob], fileName, { type: 'image/png' });

      const res = await Storage.put(fileName, file, {
        contentType: 'image/png',
        level: 'public',
      });

      const key = res.key || res.params?.Key || res;
      qrCodeUrl = `https://packmedia54032-staging.s3.us-east-1.amazonaws.com/public/${key}`;
    } catch (qrError) {
      console.error('Error generating QR code, continuing without it:', qrError);
    }

    // Create app user tied to the registrant with QR code URL
    const createAppUserMutation = `
      mutation CreateApsAppUser($input: CreateApsAppUserInput!) {
        createApsAppUser(input: $input) {
          id
          registrantId
          qrCode
        }
      }
    `;

    const appUserResult = await newGen1Mutation(createAppUserMutation, {
      input: {
        registrantId: registrantId,
        qrCode: qrCodeUrl,
      },
    });

    // Create Cognito user for app authentication
    // NOTE: You'll need to update the Cognito User Pool ID in the API route
    // or create a new API route for the new Gen 1 Cognito pool
    let cognitoUser = null;
    let temporaryPassword = null;
    try {
      const cognitoResponse = await fetch('/api/create-cognito-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        }),
      });

      if (cognitoResponse.ok) {
        const cognitoData = await cognitoResponse.json();
        cognitoUser = cognitoData;
        temporaryPassword = cognitoData.temporaryPassword;

        console.log('========================================');
        console.log('COGNITO USER CREATED FOR APP AUTHENTICATION');
        console.log('Email:', data.email);
        console.log('Temporary Password:', temporaryPassword);
        console.log('User Status:', cognitoData.userStatus);
        console.log('========================================');
      } else {
        const errorData = await cognitoResponse.json();
        if (cognitoResponse.status === 409) {
          console.warn('Cognito user already exists:', data.email);
        } else {
          console.error('Error creating Cognito user:', errorData);
        }
      }
    } catch (cognitoError) {
      console.error('Error creating Cognito user, continuing without it:', cognitoError);
    }

    return {
      registrant: registrantResult.createApsRegistrant,
      appUser: appUserResult.createApsAppUser,
      cognitoUser: cognitoUser,
      temporaryPassword: temporaryPassword,
    };
  } catch (error) {
    console.error('Error creating new Gen 1 registrant and app user:', error);
    throw error;
  }
};

export { NEW_GEN1_EVENT_ID };

