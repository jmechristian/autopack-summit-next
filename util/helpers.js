export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
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
