import React, { useEffect, useState } from 'react';

const EVENT_START = new Date(2026, 8, 30, 0, 0, 0); // Sep 30, 2026

const getCountdown = (target) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: diff === 0,
  };
};

const CountdownUnit = ({ value, label }) => (
  <div className='flex min-w-[3.25rem] flex-1 flex-col items-center rounded-lg bg-neutral-900 px-1.5 py-2 text-white'>
    <span className='font-oswald text-xl font-semibold tabular-nums leading-none tracking-tight sm:text-2xl'>
      {String(value).padStart(2, '0')}
    </span>
    <span className='mt-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400'>
      {label}
    </span>
  </div>
);

const LatestEventSignupForm = () => {
  const [countdown, setCountdown] = useState(() => getCountdown(EVENT_START));

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(getCountdown(EVENT_START));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='w-full max-w-xl rounded-2xl border-2 border-black bg-slate-100 p-6 shadow-lg'>
      <div className='mb-6 space-y-5'>
        <div className='inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white'>
          Sold Out
        </div>
        <div className='font-oswald text-3xl font-semibold uppercase tracking-tight text-ap-blue'>
          Tickets are sold out
        </div>
        <div className='flex flex-col gap-0 leading-tight'>
          <div className='text-lg font-semibold uppercase text-neutral-800'>
            Sept 30 - Oct 2, 2026
          </div>
          <div className='text-lg font-semibold uppercase text-neutral-700'>
            Hyatt Regency, Greenville SC
          </div>
        </div>
        <p className='text-sm leading-snug text-neutral-700'>
          Join the waitlist and we will notify you if a registration spot
          becomes available.
        </p>
      </div>

      <a href='/register' className='mt-4 block'>
        <button
          type='button'
          className='flex w-full items-center justify-center rounded-xl bg-ap-blue px-6 py-3 font-oswald text-lg font-semibold uppercase tracking-wide text-white shadow-md transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:shadow-none'
        >
          Join the Waitlist
        </button>
      </a>

      {!countdown.done && (
        <div className='mt-3'>
          <p className='mb-2 text-center text-xs font-semibold uppercase tracking-wide text-ap-red'>
            Summit starts in
          </p>
          <div className='flex gap-2'>
            <CountdownUnit value={countdown.days} label='Days' />
            <CountdownUnit value={countdown.hours} label='Hrs' />
            <CountdownUnit value={countdown.minutes} label='Min' />
            <CountdownUnit value={countdown.seconds} label='Sec' />
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestEventSignupForm;
