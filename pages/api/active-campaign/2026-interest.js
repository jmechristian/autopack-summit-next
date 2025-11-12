const normalizeBaseUrl = (baseUrl) => baseUrl.replace(/\/$/, '');

const getHeaders = (apiKey) => ({
  'Content-Type': 'application/json',
  'Api-Token': apiKey,
});

const toError = async (response, fallbackMessage, detailsOverride = null) => {
  let details = detailsOverride;
  if (!details) {
    try {
      details = await response.json();
    } catch (error) {
      // Ignore parsing issues; we'll fall back to a default message.
    }
  }

  const error = new Error(details?.message || fallbackMessage);
  error.statusCode = response.status;
  error.details = details;
  return error;
};

const extractErrorSummary = (details) => {
  if (!details) return null;

  if (typeof details?.message === 'string') {
    return details.message;
  }

  if (Array.isArray(details?.errors) && details.errors.length > 0) {
    const firstError = details.errors[0];
    if (typeof firstError?.title === 'string') {
      return firstError.title;
    }
    if (typeof firstError?.detail === 'string') {
      return firstError.detail;
    }
    if (typeof firstError?.message === 'string') {
      return firstError.message;
    }
  }

  return null;
};

const ensureContact = async ({ baseUrl, apiKey, name, email }) => {
  const contactPayload = {
    contact: {
      email,
      firstName: name,
    },
  };

  const createResponse = await fetch(`${baseUrl}/api/3/contacts`, {
    method: 'POST',
    headers: getHeaders(apiKey),
    body: JSON.stringify(contactPayload),
  });

  if (createResponse.ok) {
    const { contact } = await createResponse.json();
    return contact?.id;
  }

  let createErrorDetails = null;
  try {
    createErrorDetails = await createResponse.json();
  } catch (error) {
    // Ignore JSON parsing errors.
  }

  const summary = extractErrorSummary(createErrorDetails);
  const isDuplicateEmail =
    summary?.toLowerCase().includes('exists') ||
    summary?.toLowerCase().includes('already subscribed');

  if (createResponse.status === 409 || isDuplicateEmail) {
    const lookupResponse = await fetch(
      `${baseUrl}/api/3/contacts?email=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: getHeaders(apiKey),
      }
    );

    if (!lookupResponse.ok) {
      throw await toError(
        lookupResponse,
        'Unable to fetch existing ActiveCampaign contact.'
      );
    }

    const data = await lookupResponse.json();
    const existingContact = data?.contacts?.[0];
    if (!existingContact?.id) {
      throw new Error(
        'ActiveCampaign contact already exists, but could not retrieve the contact ID.'
      );
    }
    return existingContact.id;
  }

  throw await toError(
    createResponse,
    'Unable to create ActiveCampaign contact at this time.',
    createErrorDetails
  );
};

const subscribeContactToList = async ({
  baseUrl,
  apiKey,
  contactId,
  listId,
}) => {
  const payload = {
    contactList: {
      list: String(listId),
      contact: String(contactId),
      status: 1,
    },
  };

  const response = await fetch(`${baseUrl}/api/3/contactLists`, {
    method: 'POST',
    headers: getHeaders(apiKey),
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 409) {
    return;
  }

  throw await toError(
    response,
    'Unable to subscribe contact to ActiveCampaign list.'
  );
};

const tagContact = async ({ baseUrl, apiKey, contactId, tagId }) => {
  const payload = {
    contactTag: {
      contact: String(contactId),
      tag: String(tagId),
    },
  };

  const response = await fetch(`${baseUrl}/api/3/contactTags`, {
    method: 'POST',
    headers: getHeaders(apiKey),
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 409) {
    return;
  }

  throw await toError(
    response,
    'Unable to apply ActiveCampaign tag to contact.'
  );
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email } = request.body || {};

  if (!name || !email) {
    return response
      .status(400)
      .json({ message: 'Both name and email are required.' });
  }

  const apiKey = process.env.ACTIVE_CAMPAIGN_API_KEY;
  const baseUrlConfig = process.env.ACTIVE_CAMPAIGN_API_BASE_URL;
  const listId = process.env.ACTIVE_CAMPAIGN_LIST_ID_2026;
  const tagId = process.env.ACTIVE_CAMPAIGN_TAG_ID_2026_INTEREST;

  if (!apiKey || !baseUrlConfig || !listId || !tagId) {
    console.error('ActiveCampaign environment variables are missing.');
    return response.status(500).json({
      message:
        'ActiveCampaign integration is not configured. Please contact the site administrator.',
    });
  }

  const baseUrl = normalizeBaseUrl(baseUrlConfig);

  try {
    const contactId = await ensureContact({ baseUrl, apiKey, name, email });
    await subscribeContactToList({ baseUrl, apiKey, contactId, listId });
    await tagContact({ baseUrl, apiKey, contactId, tagId });

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error('ActiveCampaign handler failed:', error);
    const statusCode =
      typeof error?.statusCode === 'number' ? error.statusCode : 500;
    return response.status(statusCode).json({
      message:
        error?.message ||
        'Something went wrong while processing your request. Please try again later.',
    });
  }
}
