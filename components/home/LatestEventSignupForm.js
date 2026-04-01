import React from 'react';

const LatestEventSignupForm = () => {
  return (
    <div className='w-full max-w-xl rounded-2xl border-2 border-black bg-slate-100 p-6 shadow-lg'>
      <div className='mb-6 space-y-5'>
        <div className='font-oswald text-3xl font-semibold uppercase tracking-tight text-ap-blue'>
          Registration is now open!
        </div>
        <div className='flex flex-col gap-0 leading-tight'>
          <div className='text-xl font-semibold uppercase text-neutral-800'>
            Sept 30 - Oct 2, 2026
          </div>
          <div className='text-xl font-semibold uppercase text-neutral-700'>
            Hyatt Regency, Greenville SC
          </div>
        </div>
      </div>

      <p className='text-sm font-semibold uppercase text-neutral-700'>
        Spots are limited - secure your ticket today.
      </p>

      <a href='/register' className='block mt-2'>
        <button
          type='button'
          className='mt-2 flex items-center justify-center rounded-xl bg-ap-blue px-6 py-3 font-oswald text-lg font-semibold uppercase tracking-wide text-white shadow-md transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:shadow-none'
        >
          Register Now
        </button>
      </a>
    </div>
  );
};

export default LatestEventSignupForm;
