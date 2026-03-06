import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';

/**
 * Resolves S3 paths via Amplify Storage.get() to work around Access Denied
 * when using direct S3 URLs with authAndGuest buckets.
 */
export function useS3Url(path) {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!path || typeof path !== 'string') {
      setUrl(null);
      return;
    }
    if (path.startsWith('http://') || path.startsWith('https://')) {
      setUrl(path);
      return;
    }
    let cancelled = false;
    Storage.get(path, { level: 'public' })
      .then((res) => {
        if (!cancelled && res) {
          setUrl(typeof res === 'string' ? res : res?.url || res);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.warn('S3Image: failed to resolve', path, err);
          setError(err);
          setUrl(null);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [path]);

  return { url, error };
}

/**
 * Renders an img that resolves S3 paths via Storage.get().
 * Use for profile pictures, logos, etc. stored in Amplify Storage.
 */
export function S3Image({ src, alt = '', className, ...props }) {
  const { url } = useS3Url(src);

  if (!src) return null;
  if (!url) {
    return (
      <div
        className={className}
        style={{ background: 'var(--gray-200, #e5e7eb)' }}
        aria-label={alt}
      />
    );
  }
  return <img src={url} alt={alt} className={className} {...props} />;
}
