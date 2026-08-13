import React from 'react';
import Logo from '../../../shared/Logo';

const FooterCopyright = () => {
  return (
    <div className='mx-auto w-full max-w-7xl px-6 xl:px-0'>
      <div className='w-full border-t border-slate-400' />
      <div className='flex w-full flex-col gap-4 py-6 sm:flex-row sm:items-end sm:justify-between'>
        <div className='flex flex-col items-start gap-3 text-left'>
          <div className='w-36'>
            <Logo />
          </div>
          <p className='text-base font-semibold text-white sm:text-lg'>
            Questions?{' '}
            <a
              href='mailto:bianca@packagingschool.com'
              className='font-bold text-ap-yellow underline decoration-ap-yellow/60 underline-offset-2 transition-colors hover:text-white hover:decoration-white'
            >
              bianca@packagingschool.com
            </a>
          </p>
          <p className='text-sm text-white/90'>
            Copyright © 2015-2026 The Packaging School, LLC. All Rights Reserved.
          </p>
        </div>
        <div className='flex shrink-0 gap-4 text-sm text-white/80'>
          <a href='/policies' className='hover:text-white'>
            Privacy Policy
          </a>
          <a href='/policies' className='hover:text-white'>
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
