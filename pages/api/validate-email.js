import dns from 'node:dns/promises';

const isValidEmailFormat = (email = '') => {
  const normalized = String(email).trim();
  if (!normalized) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalized)) return false;
  const [localPart, domainPart] = normalized.split('@');
  if (!localPart || !domainPart) return false;
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
  if (localPart.includes('..') || domainPart.includes('..')) return false;
  return true;
};

const hasDeliverableDnsRecords = async (domain) => {
  try {
    const mxRecords = await dns.resolveMx(domain);
    if (Array.isArray(mxRecords) && mxRecords.length > 0) return true;
  } catch (_error) {
    // Fall through to A/AAAA checks.
  }

  try {
    const aRecords = await dns.resolve(domain);
    if (Array.isArray(aRecords) && aRecords.length > 0) return true;
  } catch (_error) {
    // Ignore and try AAAA.
  }

  try {
    const aaaaRecords = await dns.resolve6(domain);
    if (Array.isArray(aaaaRecords) && aaaaRecords.length > 0) return true;
  } catch (_error) {
    // Domain does not resolve.
  }

  return false;
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ valid: false, message: 'Method not allowed' });
  }

  const rawEmail = String(req.query.email || '').trim().toLowerCase();
  if (!isValidEmailFormat(rawEmail)) {
    return res.status(200).json({ valid: false, reason: 'format' });
  }

  const domain = rawEmail.split('@')[1];
  const domainIsDeliverable = await hasDeliverableDnsRecords(domain);

  if (!domainIsDeliverable) {
    return res.status(200).json({ valid: false, reason: 'domain' });
  }

  return res.status(200).json({ valid: true });
}
