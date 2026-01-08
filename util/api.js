import { API, Amplify, Storage } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { gen2Mutation, gen2Query } from './gen2-api';
import QRCode from 'qrcode';
import {
  createAPSRegistrant,
  createAPSTicketRegistrant,
  updateAPSRegistrant,
  updateAPSTicketRegistrant,
  createEmailTracking,
  updateEmailTracking,
  createAPSCompany,
  createAPSRegistrant2025,
  createAPSActivity2025,
  updateAPSRegistrant2025,
  updateAPSCode2025,
  createAPSCodeRequest25,
  updateAPSCodeRequest25,
} from '../src/graphql/mutations';
import {
  aPSRegistrantsByEmail,
  aPSTicketRegistrantsByEmail,
  listEmailTrackings,
  listAPSBoards,
  listAPSCompanies,
  listAPSAddOn2025s,
  getAPSRegistrant2025,
  listAPSCode2025s,
  aPSCodeRequest25sByEmail,
  aPSRegistrant2025sByEmail,
  getAPSCompany,
  getAPSCode2025,
} from '../src/graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

export const getRegistrantByEmail = async (email) => {
  const reg = await API.graphql({
    query: aPSRegistrantsByEmail,
    variables: { email: email },
  });

  if (reg.data.aPSRegistrantsByEmail.items.length > 0) {
    return { registrant: reg.data.aPSRegistrantsByEmail.items };
  } else {
    return { error: 'Error Finding Registrant' };
  }
};

export const createAPSUserFromCodeRequest = async (
  name,
  title,
  company,
  email,
  phone
) => {
  const res = await API.graphql({
    query: createAPSRegistrant,
    variables: {
      input: {
        name,
        title,
        company,
        email,
        phone,
        codeRequested: true,
        codeSent: false,
        registrationReceived: false,
        welcomeEmailSent: false,
      },
    },
  });

  return res.data;
};

export const ApproveRegistrantCode = async (id) => {
  const updated = await API.graphql({
    query: updateAPSRegistrant,
    variables: { input: { id: id, codeSent: true } },
  });

  return updated.data;
};

export const sendRegCode = async (firstName, lastName, email, company) => {
  const res = fetch('/api/send-registration-code', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      company,
    }),
  });

  return (await res).status;
};

export const handleRegInit = async (
  name,
  title,
  company,
  email,
  phone,
  regCode,
  worksWith,
  speedNetworking,
  innovationWorkshop,
  plantTour
) => {
  // Check for existing registrant
  const isRegistrant = await API.graphql({
    query: aPSRegistrantsByEmail,
    variables: { email: email },
  });

  if (isRegistrant.data.aPSRegistrantsByEmail.items.length === 0) {
    //Create New Registrant
    const newReg = await API.graphql({
      query: createAPSRegistrant,
      variables: {
        input: {
          name,
          title,
          company,
          email,
          phone,
          code: regCode ? regCode : 'TICKET',
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          codeRequested: false,
          codeSent: false,
          registrationReceived: true,
          welcomeEmailSent: false,
        },
      },
    });

    return newReg.data;
  }

  // If there is a reg, update data, otherwise...
  if (isRegistrant.data.aPSRegistrantsByEmail.items.length > 0) {
    const updated = await API.graphql({
      query: updateAPSRegistrant,
      variables: {
        input: {
          id: isRegistrant.data.aPSRegistrantsByEmail.items[0].id,
          name,
          title,
          company,
          email,
          phone,
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          registrationReceived: true,
        },
      },
    });

    return updated.data;
  }
};

export const handleTicketRegInit = async (
  name,
  title,
  company,
  email,
  phone,
  worksWith,
  speedNetworking,
  innovationWorkshop,
  plantTour
) => {
  // Check for existing registrant
  const isRegistrant = await API.graphql({
    query: aPSTicketRegistrantsByEmail,
    variables: { email: email },
  });

  if (isRegistrant.data.aPSTicketRegistrantsByEmail.items.length === 0) {
    //Create New Registrant
    const newReg = await API.graphql({
      query: createAPSTicketRegistrant,
      variables: {
        input: {
          name,
          title,
          company,
          email,
          phone,
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          registrationReceived: true,
          welcomeEmailSent: false,
        },
      },
    });

    return newReg.data;
  }

  // If there is a reg, update data, otherwise...
  if (isRegistrant.data.aPSTicketRegistrantsByEmail.items.length > 0) {
    const updated = await API.graphql({
      query: updateAPSTicketRegistrant,
      variables: {
        input: {
          id: isRegistrant.data.aPSTicketRegistrantsByEmail.items[0].id,
          name,
          title,
          company,
          email,
          phone,
          worksWith,
          speedNetworking,
          innovationWorkshop,
          plantTour,
          registrationReceived: true,
        },
      },
    });

    return updated.data;
  }
};

export const approveRegistrant = async (id) => {
  const updated = await API.graphql({
    query: updateAPSRegistrant,
    variables: { input: { id: id, welcomeEmailSent: true } },
  });

  return updated.data;
};

export const sendWelcomeEmail = async (name, email) => {
  const res = fetch('/api/send-welcome-email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  return (await res).status;
};

export const sendSpeakerInterest = async (data) => {
  const res = fetch('/api/send-speaker-interest', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendMorrisette = async (data) => {
  const res = fetch('/api/send-morrisette', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendMorrisetteWelcome = async (email, preference) => {
  const res = fetch('/api/send-morrisette-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      preference,
    }),
  });

  return (await res).status;
};

export const sendGuardian = async (data) => {
  const res = fetch('/api/send-guardian', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendGuardianWelcome = async (email) => {
  const res = fetch('/api/send-guardian-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return (await res).status;
};

export const sendClemson = async (data) => {
  const res = fetch('/api/send-clemson', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendClemsonWelcome = async (email) => {
  const res = fetch('/api/send-clemson-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return (await res).status;
};

export const sendSurgere = async (data) => {
  const res = fetch('/api/send-surgere', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendSurgereWelcome = async (email) => {
  const res = fetch('/api/send-surgere-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return (await res).status;
};

export const sendBosch = async (data) => {
  const res = fetch('/api/send-bosch', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });

  return (await res).status;
};

export const sendBoschWelcome = async (email, topics) => {
  const res = fetch('/api/send-bosch-approval', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      topics,
    }),
  });
};

export const sendAgenda = async (registrant, id) => {
  const res = fetch('/api/send-agenda', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      registrant,
      id,
    }),
  });

  return (await res).status;
};

export const trackEmail = async (email) => {
  const res = await API.graphql({
    query: createEmailTracking,
    variables: {
      input: {
        email: email,
        opened: false,
        sent: new Date().toISOString(),
      },
    },
  });

  return res.data;
};

export const getEmailTracking = async () => {
  const res = await API.graphql({
    query: listEmailTrackings,
    variables: {
      limit: 1000,
    },
  });

  return res.data;
};

export const trackEmailOpen = async (id) => {
  const res = await API.graphql({
    query: updateEmailTracking,
    variables: {
      input: { id: id, opened: true, openedDate: new Date().toISOString() },
    },
  });

  return res.data;
};

export const getBoardMembers = async () => {
  const res = await API.graphql({
    query: listAPSBoards,
  });

  return res.data.listAPSBoards.items;
};

export const getAPSCompanies = async () => {
  const res = await API.graphql({
    query: listAPSCompanies,
    variables: {
      limit: 1000,
    },
  });

  return res.data.listAPSCompanies.items;
};

export const createCompany = async (data) => {
  const res = await API.graphql({
    query: createAPSCompany,
    variables: { input: data },
  });

  return res.data.createAPSCompany;
};

export const checkForExistingCompany = async (email) => {
  const res = await API.graphql({
    query: listAPSCompanies,
    variables: { filter: { email: { contains: email } } },
  });

  if (res.data.listAPSCompanies.items.length > 0) {
    return res.data.listAPSCompanies.items[0];
  }
  return null;
};

// ========== Gen 2 Company Functions ==========

const GEN2_EVENT_ID = 'd854c771-db74-4315-83ec-36ce55173532';
const GEN2_APS_ID = 'd854c771-db74-4315-83ec-36ce55173532';

/**
 * Get all APS companies from Gen 2 API
 * @returns {Promise<Array>} Array of company objects
 */
export const getAPSCompaniesGen2 = async () => {
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
    const result = await gen2Query(query, {
      limit: 1000,
    });

    return result.listAPSCompanies.items || [];
  } catch (error) {
    console.error('Error fetching Gen 2 companies:', error);
    throw error;
  }
};

/**
 * Check if a company exists in Gen 2 by email (supports domain matching like Gen 1)
 * @param {string} email - Company email or domain to check (e.g., "@example.com")
 * @returns {Promise<object|null>} Company object if found, null otherwise
 */
export const checkForExistingCompanyGen2 = async (email) => {
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
    // Use contains to match Gen 1 behavior (supports domain matching)
    const result = await gen2Query(query, {
      filter: { email: { contains: email } },
    });

    if (result.listAPSCompanies.items.length > 0) {
      return result.listAPSCompanies.items[0];
    }
    return null;
  } catch (error) {
    console.error('Error checking for existing Gen 2 company:', error);
    throw error;
  }
};

/**
 * Create a new company in Gen 2 API
 * @param {object} data - Company data { name, email, type?, description?, website?, phone?, address?, city?, state?, zip?, country?, logo? }
 * @returns {Promise<object>} Created company object
 */
export const createCompanyGen2 = async (data) => {
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
    name: data.name,
    email: data.email,
    type: data.type || 'OEMTIER1', // Default to OEMTIER1 if not provided
    eventId: GEN2_EVENT_ID,
    description: data.description || null,
    website: data.website || null,
    phone: data.phone || null,
    address: data.address || null,
    city: data.city || null,
    state: data.state || null,
    zip: data.zip || null,
    country: data.country || null,
    logo: data.logo || null,
  };

  try {
    const result = await gen2Mutation(mutation, {
      input: companyInput,
    });

    return result.createAPSCompany;
  } catch (error) {
    console.error('Error creating Gen 2 company:', error);
    throw error;
  }
};

export const getAPS25AddOns = async () => {
  const res = await API.graphql({
    query: listAPSAddOn2025s,
  });

  return res.data.listAPSAddOn2025s.items;
};

/**
 * Create a new APS registrant in Gen 2 API (replaces old Gen 1 function)
 * Automatically creates an app user after creating the registrant
 * @param {object} data - Registration data (same format as before)
 * @returns {Promise<object>} Created registrant data with same structure as Gen 1 for compatibility
 */
export const createNewAPS25Registrant = async (data) => {
  // Use the new Gen 1 API function
  const { createNewApsRegistrantNewGen1 } = await import('./new-gen1-api');
  const result = await createNewApsRegistrantNewGen1(data);

  // Return in the same format as Gen 1 for backward compatibility
  return {
    createAPSRegistrant2025: {
      id: result.registrant.id,
      ...result.registrant,
      temporaryPassword: result.temporaryPassword, // Include password for client-side logging
    },
  };
};

export const createNewApsRegistrant = async (data) => {
  const res = await API.graphql({
    query: createAPSRegistrant2025,
    variables: {
      input: {
        email: data.email,
        aPSCompanyApsRegistrantsId: data.aPSRegistrant2025CompanyNameId,
        attendeeType: data.attendeeType,
        billingAddressCity: data.billingAddress.city,
        billingAddressEmail: data.billingAddress.email,
        billingAddressFirstName: data.billingAddress.firstName,
        billingAddressLastName: data.billingAddress.lastName,
        billingAddressPhone: data.billingAddress.phone,
        billingAddressState: data.billingAddress.state,
        billingAddressStreet: data.billingAddress.street,
        billingAddressZip: data.billingAddress.zip,
        discountCode: data.discountCode,
        firstName: data.firstName,
        interests: data.interests,
        jobTitle: data.jobTitle,
        lastName: data.lastName,
        learningObjectives: data.learningObjectives,
        otherInterest: data.otherInterest,
        paymentConfirmation: data.paymentConfirmation,
        phone: data.phone,
        sameAsAttendee: data.sameAsAttendee,
        speakerTopic: data.speakerTopic,
        speedNetworking: data.speedNetworking,
        status:
          data.attendeeType === 'Solution-Provider' ||
          data.attendeeType === 'Sponsor'
            ? 'WAITLIST'
            : 'PENDING',
        termsAccepted: data.termsAccepted,
        totalAmount: data.totalAmount,
        welcomeEmailSent: false,
        registrationEmailReceived: false,
        morrisetteStatus: data.morrisetteStatus,
        morrisetteTransportation: data.morrisetteTransportation,
        magnaStatus: data.magnaStatus,
        magnaTransportation: data.magnaTransportation,
        aristoStatus: data.aristoStatus,
        aristoTransportation: data.aristoTransportation,
      },
    },
  });

  return res.data;
};

/**
 * Get company name from Gen 2 API by company ID
 * @param {string} companyId - Company ID
 * @returns {Promise<string|null>} Company name or null if not found
 */
const getCompanyNameGen2 = async (companyId) => {
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
    const result = await gen2Query(query, { id: companyId });
    return result.getAPSCompany?.name || null;
  } catch (error) {
    console.error('Error fetching company name from Gen 2:', error);
    return null;
  }
};

/**
 * Generate vCard (vcf) format string from registrant data
 * vCard is the standard format for contact information in QR codes
 * @param {object} registrantData - Object with firstName, lastName, email, phone, jobTitle, companyName
 * @returns {string} vCard formatted string
 */
const generateVCard = (registrantData) => {
  const fullName =
    `${registrantData.firstName} ${registrantData.lastName}`.trim();
  const lastName = registrantData.lastName || '';
  const firstName = registrantData.firstName || '';
  const email = registrantData.email || '';
  const phone = registrantData.phone || '';
  const title = registrantData.jobTitle || '';
  const company = registrantData.companyName || '';

  // vCard format (version 3.0)
  // FN = Full Name, N = Name (last;first;middle;prefix;suffix)
  // ORG = Organization, TITLE = Job Title
  // EMAIL and TEL are contact methods
  let vcard = 'BEGIN:VCARD\n';
  vcard += 'VERSION:3.0\n';
  vcard += `FN:${fullName}\n`;
  vcard += `N:${lastName};${firstName};;;\n`;

  if (company) {
    vcard += `ORG:${company}\n`;
  }

  if (title) {
    vcard += `TITLE:${title}\n`;
  }

  if (email) {
    vcard += `EMAIL;TYPE=WORK:${email}\n`;
  }

  if (phone) {
    // Remove any non-digit characters for phone number
    const cleanPhone = phone.replace(/\D/g, '');
    vcard += `TEL;TYPE=WORK:${phone}\n`;
  }

  vcard += 'END:VCARD';

  return vcard;
};

/**
 * Generate QR code with registrant data in vCard format and upload to S3
 * vCard format allows QR scanners to automatically add contact to phone's contact list
 * @param {object} registrantData - Object with firstName, lastName, email, phone, jobTitle, companyName
 * @param {string} registrantId - Registrant ID for unique filename
 * @returns {Promise<string>} S3 URL of the uploaded QR code
 */
const generateAndUploadQRCode = async (registrantData, registrantId) => {
  try {
    // Generate vCard format string (standard contact format)
    const vcardData = generateVCard(registrantData);

    // Generate QR code as data URL (PNG) with vCard data
    const qrDataUrl = await QRCode.toDataURL(vcardData, {
      errorCorrectionLevel: 'M',
      type: 'image/png',
      quality: 0.92,
      margin: 1,
      width: 512,
    });

    // Convert data URL to blob
    const response = await fetch(qrDataUrl);
    const blob = await response.blob();

    // Create a File object from the blob
    const fileName = `qrcodes/${registrantId}-${Date.now()}.png`;
    const file = new File([blob], fileName, { type: 'image/png' });

    // Upload to S3 using Gen 1 Storage API
    const res = await Storage.put(fileName, file, {
      contentType: 'image/png',
      level: 'public',
    });

    // Construct the S3 URL based on the bucket configuration
    // Using the same pattern as uploadToAPS3
    const key = res.params?.Key || res.key || res;
    const photoUrl = `https://packmedia54032-staging.s3.us-east-1.amazonaws.com/public/${key}`;

    return photoUrl;
  } catch (error) {
    console.error('Error generating or uploading QR code:', error);
    throw error;
  }
};

/**
 * Create a new APS registrant in Gen 2 API and automatically create an app user
 * @param {object} data - Registration data (same format as createNewApsRegistrant)
 * @param {string} apsId - The APS ID (required for Gen 2 schema - e.g., current year's APS ID)
 * @returns {Promise<object>} Created registrant and app user data
 */
export const createNewApsRegistrantGen2 = async (data, apsId) => {
  if (!apsId) {
    throw new Error('apsId is required for Gen 2 API');
  }

  // Get company name if we have a companyId
  let companyName = null;
  if (data.aPSRegistrant2025CompanyNameId) {
    companyName = await getCompanyNameGen2(data.aPSRegistrant2025CompanyNameId);
  }

  // Map fields to Gen 2 schema
  const registrantInput = {
    apsID: apsId,
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
    const registrantResult = await gen2Mutation(createRegistrantMutation, {
      input: registrantInput,
    });

    const registrantId = registrantResult.createApsRegistrant.id;

    if (!registrantId) {
      throw new Error('Failed to create registrant - no ID returned');
    }

    // Generate QR code and upload to S3
    let qrCodeUrl = null;
    try {
      qrCodeUrl = await generateAndUploadQRCode(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          jobTitle: data.jobTitle,
          companyName: companyName,
        },
        registrantId
      );
    } catch (qrError) {
      console.error(
        'Error generating QR code, continuing without it:',
        qrError
      );
      // Continue without QR code - don't fail the entire registration
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

    const appUserResult = await gen2Mutation(createAppUserMutation, {
      input: {
        registrantId: registrantId,
        qrCode: qrCodeUrl,
      },
    });

    // Create Cognito user for app authentication
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

        // Log the password for app use
        console.log('========================================');
        console.log('COGNITO USER CREATED FOR APP AUTHENTICATION');
        console.log('Email:', data.email);
        console.log('Temporary Password:', temporaryPassword);
        console.log('User Status:', cognitoData.userStatus);
        console.log('========================================');
      } else {
        const errorData = await cognitoResponse.json();
        // If user already exists, that's okay - log it but don't fail
        if (cognitoResponse.status === 409) {
          console.warn('Cognito user already exists:', data.email);
        } else {
          console.error('Error creating Cognito user:', errorData);
        }
      }
    } catch (cognitoError) {
      console.error(
        'Error creating Cognito user, continuing without it:',
        cognitoError
      );
      // Continue without Cognito user - don't fail the entire registration
    }

    return {
      registrant: registrantResult.createApsRegistrant,
      appUser: appUserResult.createApsAppUser,
      cognitoUser: cognitoUser,
      temporaryPassword: temporaryPassword, // Include password in response for logging
    };
  } catch (error) {
    console.error('Error creating Gen 2 registrant and app user:', error);
    throw error;
  }
};

export const getCurrentAPS25Registrant = async (id) => {
  const res = await API.graphql({
    query: getAPSRegistrant2025,
    variables: { id: id },
  });

  return res.data.getAPSRegistrant2025;
};

export const getAPS25Codes = async () => {
  const res = await API.graphql({
    query: listAPSCode2025s,
    variables: {
      limit: 1000,
    },
  });

  return res.data.listAPSCode2025s.items;
};

export const createAPS25Notification = async (data) => {
  const res = await API.graphql({
    query: createAPSActivity2025,
    variables: { input: data },
  });

  return res.data;
};

export const trackRegistrationEmailOpen = async (id, email) => {
  const date = new Date();
  const estDate = new Date(
    date.toLocaleString('en-US', { timeZone: 'America/New_York' })
  );

  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: {
      input: {
        id: id,
        registrationEmailReceived: true,
        registrationEmailReceivedDate: estDate.toISOString(),
      },
    },
  });

  await createAPS25Notification({
    type: 'REGISTRATION_EMAIL_OPENED',
    activity: 'Registration email opened from ' + email,
  });

  return res.data;
};

export const sendRegistrationConfirmation = async (data) => {
  const date = new Date();
  const estDate = new Date(
    date.toLocaleString('en-US', { timeZone: 'America/New_York' })
  );

  const res = await fetch('/api/send-registration-confirmation', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const updateRes = await API.graphql({
      query: updateAPSRegistrant2025,
      variables: {
        input: {
          id: data.formDataId,
          registrationEmailSent: true,
          registrationEmailSentDate: estDate.toISOString(),
        },
      },
    });
    return updateRes.data;
  }

  return null;
};

export const sendAdditionalRegistrationConfirmation = async (data) => {
  const res = await fetch('/api/send-additional-registration', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.data;
};

export const sendStaffRegistrationConfirmation = async (data) => {
  const res = await fetch('/api/send-staff-reg-confirmation', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.data;
};

export const addCodeUsage = async (code) => {
  const res = await API.graphql({
    query: updateAPSCode2025,
    variables: { input: { id: code.id, used: code.used + 1 } },
  });
  return res.data;
};

export const registerSpeedNetworking = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: {
      input: {
        id: id,
        speedNetworkingStatus: 'PENDING',
      },
    },
  });

  return res.data;
};

export const unregisterSpeedNetworking = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, speedNetworkingStatus: null } },
  });
  return res.data;
};

export const sendActivity = async (data) => {
  const res = await API.graphql({
    query: createAPSActivity2025,
    variables: { input: data },
  });
  return res.data;
};

export const registerMorrisette = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, morrisetteStatus: 'PENDING' } },
  });
  return res.data;
};

export const registerMagna = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, magnaStatus: 'PENDING' } },
  });
  return res.data;
};

export const registerAristo = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, aristoStatus: 'PENDING' } },
  });
  return res.data;
};

export const unregisterMorrisette = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, morrisetteStatus: null } },
  });
  return res.data;
};

export const unregisterMagna = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, magnaStatus: null } },
  });
  return res.data;
};

export const unregisterAristo = async (id) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, aristoStatus: null } },
  });
  return res.data;
};

export const uploadToAPS3 = async (file) => {
  if (!file) return;

  try {
    // Replace spaces with hyphens in the filename
    const fileName = `speakers/${file.name.replace(/\s+/g, '-')}`;

    const res = await Storage.put(fileName, file, {
      contentType: file.type,
      resumable: true,
    });

    console.log(res);

    const photoUrl = `https://packmedia54032-staging.s3.us-east-1.amazonaws.com/public/${res.params.Key}`;

    return photoUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export const updateSpeakerProfile = async (id, data) => {
  const res = await API.graphql({
    query: updateAPSRegistrant2025,
    variables: { input: { id: id, ...data } },
  });
  return res.data;
};

export const sendCodeRequest = async (email, company, firstName, lastName) => {
  console.log('Sending code request to: ', email);
  await API.graphql({
    query: createAPSCodeRequest25,
    variables: {
      input: {
        email: email,
        company: company,
        firstName: firstName,
        lastName: lastName,
      },
    },
  });

  const res = await fetch('/api/send-code-request', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, company, firstName, lastName }),
  });

  return res.status;
};

export const updateSentRegistrantCode = async (email) => {
  const id = await API.graphql({
    query: aPSCodeRequest25sByEmail,
    variables: { email: email },
  });

  const res = await API.graphql({
    query: updateAPSCodeRequest25,
    variables: {
      input: {
        id: id.data.aPSCodeRequest25sByEmail.items[0].id,
        status: 'SENT',
      },
    },
  });
  return res.data;
};

export const checkForExistingRegistrant = async (email) => {
  const res = await API.graphql({
    query: aPSRegistrant2025sByEmail,
    variables: { email: email },
  });

  if (res.data.aPSRegistrant2025sByEmail.items.length > 0) {
    return true;
  }
  return false;
};

export const getSolutionProviderRegistrants = async (id) => {
  const res = await API.graphql({
    query: getAPSCompany,
    variables: { id: id },
  });

  return res.data.getAPSCompany.apsRegistrants.items;
};

export const checkCodeUsage = async (id) => {
  const res = await API.graphql({
    query: getAPSCode2025,
    variables: { id: id },
  });

  if (res.data.getAPSCode2025.used >= res.data.getAPSCode2025.limit) {
    return true;
  }
  return false;
};

export const createAdditionalAPS25Registrant = async (data) => {
  const res = await API.graphql({
    query: createAPSRegistrant2025,
    variables: {
      input: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        aPSCompanyApsRegistrantsId: data.aPSRegistrant2025CompanyNameId,
        jobTitle: data.jobTitle,
        attendeeType: data.attendeeType,
        termsAccepted: data.termsAccepted,
        status: 'PENDING',
      },
    },
  });
  return res.data;
};

export const listApprovedAPS25Registrants = async () => {
  const query = `query MyQuery($nextToken: String) {
  listAPSRegistrant2025s(filter: {status: {eq: "APPROVED"}}, nextToken: $nextToken) {
    nextToken
    items {
      email
      id
      firstName
      lastName
      company {
        name
      }
    }
  }
}`;

  let allItems = [];
  let nextToken = null;

  do {
    const res = await API.graphql({
      query: query,
      variables: { nextToken },
    });

    const data = res.data.listAPSRegistrant2025s;
    allItems = allItems.concat(data.items);
    nextToken = data.nextToken;
  } while (nextToken);

  return allItems;
};

export const sendPreEmail = async (id, email) => {
  const res = await fetch('/api/send-pre-email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, email }),
  });
  return res.json();
};

export const logEmailResponse = async (registrant, response, status) => {
  try {
    await fetch('/api/log-email-response', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        registrant,
        response,
        timestamp: new Date().toISOString(),
        status,
      }),
    });
  } catch (error) {
    console.error('Error logging email response:', error);
  }
};
