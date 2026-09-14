import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeaderPadding from '../../../shared/HeaderPadding';

export default function AppContactLanding() {
  const router = useRouter();
  const registrantId = typeof router.query.id === 'string' ? router.query.id : '';
  const [showFallback, setShowFallback] = useState(false);

  const appUrl = useMemo(() => {
    if (!registrantId) return '';
    return `autopacksummitapp://open-profile?registrantId=${encodeURIComponent(registrantId)}`;
  }, [registrantId]);

  useEffect(() => {
    if (!appUrl) return;
    window.location.href = appUrl;
    const timer = setTimeout(() => setShowFallback(true), 1600);
    return () => clearTimeout(timer);
  }, [appUrl]);

  return (
    <>
      <Head>
        <title>Open in the AutoPack Summit app</title>
        <meta name='robots' content='noindex' />
      </Head>
      <HeaderPadding />
      <main className='mx-auto max-w-lg px-6 py-16 text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-ap-darkblue'>
          Automotive Packaging Summit
        </h1>
        <p className='mt-4 text-gray-600'>
          Opening this attendee in the event app…
        </p>
        {showFallback && (
          <div className='mt-8 space-y-4'>
            <p className='text-gray-600'>
              If the app didn’t open, install it and try again, or tap the button
              below.
            </p>
            {appUrl ? (
              <a
                href={appUrl}
                className='inline-flex rounded-xl bg-ap-blue px-5 py-3 font-semibold text-white'
              >
                Open in app
              </a>
            ) : null}
            <div>
              <a href='https://autopacksummit.com/appguide' className='text-ap-blue underline'>
                Get the app
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
