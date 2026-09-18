export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/** Turn CMS **bold** markers into HTML so mixed rich-text descriptions render. */
export function formatAgendaHtml(html) {
  if (!html || typeof html !== 'string') return html || '';
  return html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

export function orderByIds(items, getId, order) {
  if (!Array.isArray(items) || !items.length) return items || [];
  const normalizedOrder = (order || [])
    .map((id) => (id || '').trim())
    .filter(Boolean);
  if (!normalizedOrder.length) return items;

  const rank = new Map(normalizedOrder.map((id, index) => [id, index]));
  return [...items].sort((a, b) => {
    const aRank = rank.get(getId(a) || '');
    const bRank = rank.get(getId(b) || '');
    if (aRank == null && bRank == null) return 0;
    if (aRank == null) return 1;
    if (bRank == null) return -1;
    return aRank - bRank;
  });
}

/**
 * Resolves relative S3 image paths to full URLs.
 * Uses NEXT_PUBLIC_S3_PUBLIC_URL or constructs from aws-exports bucket/region.
 */
export function getS3ImageUrl(path) {
  if (!path || typeof path !== 'string') return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base =
    process.env.NEXT_PUBLIC_S3_PUBLIC_URL ||
    'https://autopacksummitapp94b14feadba64f23aff0ed8deae77b99bc6-dev.s3.us-east-1.amazonaws.com/public';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}/${cleanPath}`;
}
