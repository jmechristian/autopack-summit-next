import React from 'react';

const APP_STORE =
  'https://apps.apple.com/us/app/automotive-packaging-summit/id6761734425';
const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.packagingschool.autopacksummit';
const WEB_APP = 'https://autopacksummit.expo.app/';

const AlreadyRegisteredCallout = () => {
  return (
    <section className='w-full bg-ap-darkblue'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-10 lg:flex-row lg:justify-between lg:gap-12 lg:py-12 xl:px-0'>
        <div className='max-w-2xl text-center lg:text-left'>
          <p className='text-sm font-semibold uppercase tracking-widest text-ap-yellow'>
            Official Event App
          </p>
          <h2 className='mt-2 font-oswald text-4xl font-medium uppercase tracking-tight text-white md:text-5xl'>
            Already Registered?
          </h2>
          <p className='mt-4 text-lg leading-snug text-blue-100'>
            The APS app is live — download it on iOS or Android, or open it in
            your browser, then sign in with the credentials from your
            registration. Need a walkthrough?{' '}
            <a
              href='/appguide'
              className='font-semibold text-ap-yellow underline decoration-ap-yellow/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white'
            >
              Open the App Guide
            </a>
            .
          </p>
        </div>
        <div className='flex shrink-0 flex-wrap items-center justify-center gap-3'>
          <a
            href={APP_STORE}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block transition-opacity hover:opacity-90'
            aria-label='Download on the App Store'
          >
            <img
              src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83'
              alt='Download on the App Store'
              className='h-12 w-auto'
            />
          </a>
          <a
            href={PLAY_STORE}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block transition-opacity hover:opacity-90'
            aria-label='Get it on Google Play'
          >
            <img
              src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
              alt='Get it on Google Play'
              className='h-[72px] w-auto'
            />
          </a>
          <a
            href={WEB_APP}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-12 items-center justify-center rounded-lg bg-black px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90'
          >
            Open Web App
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlreadyRegisteredCallout;
