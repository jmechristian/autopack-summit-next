import React, { useEffect, useState } from 'react';

const EVENT_START = new Date(2027, 9, 18, 0, 0, 0); // Oct 18, 2027

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
  <div className='flex flex-col'>
    <span className='font-oswald text-2xl font-medium tabular-nums leading-none text-neutral-900'>
      {String(value).padStart(2, '0')}
    </span>
    <span className='mt-1.5 text-xs font-medium uppercase tracking-wide text-neutral-600'>
      {label}
    </span>
  </div>
);

const LatestEventSignupForm = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    setCountdown(getCountdown(EVENT_START));
    const id = setInterval(() => {
      setCountdown(getCountdown(EVENT_START));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='w-full max-w-md rounded-xl bg-slate-100 px-5 py-4'>
      <p className='text-xs font-semibold uppercase tracking-[0.16em] text-ap-blue'>
        Save the date
      </p>
      <p className='mt-1.5 font-oswald text-3xl font-medium uppercase leading-none tracking-tight text-neutral-900'>
        October 18–20, 2027
      </p>
      <p className='mt-1.5 text-sm text-neutral-700'>
        Hyatt Regency, Greenville SC
      </p>
      {countdown && !countdown.done && (
        <div className='mt-4 flex items-end gap-6 border-t border-neutral-300/80 pt-3'>
          <CountdownUnit value={countdown.days} label='Days' />
          <CountdownUnit value={countdown.hours} label='Hrs' />
          <CountdownUnit value={countdown.minutes} label='Min' />
          <CountdownUnit value={countdown.seconds} label='Sec' />
        </div>
      )}
    </div>
  );
};

export default LatestEventSignupForm;
