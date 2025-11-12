import React, { useState } from 'react';

const submitLatestEventInterest = async ({ name, email }) => {
  const response = await fetch('/api/active-campaign/2026-interest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch (error) {
    // Swallow JSON parsing errors; not all responses will include a body.
  }

  if (!response.ok) {
    const message =
      payload?.message ||
      'Unable to process your request right now. Please try again in a moment.';
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return payload;
};

/**
 * Simple signup form for collecting APS 2026 updates interest.
 * Integrates success and error messaging with single-submit behaviour.
 */
const LatestEventSignupForm = ({ onSubmit = submitLatestEventInterest }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const isLocked = status === 'success';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === 'submitting' || status === 'success') {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await onSubmit(formValues);

      setStatus('success');
    } catch (error) {
      console.error('LatestEventSignupForm submission failed', error);
      setErrorMessage(
        error?.message ||
          'Something went wrong. Please try again or reach out to the APS team.'
      );
      setStatus('error');
    }
  };

  return (
    <div className='w-full max-w-xl rounded-2xl border-2 border-black bg-slate-100 p-6 shadow-lg'>
      <div className='mb-6 space-y-3'>
        <div className='font-oswald text-3xl font-semibold uppercase tracking-tight text-ap-blue'>
          Get the latest on the 2026 event
        </div>
        <div className='text-sm font-semibold uppercase text-neutral-800'>
          Sept 30 - Oct 2, 2026 &bull; Hyatt Regency, Greenville SC
        </div>
        <p className='text-sm text-neutral-600'>
          Drop your name and email below and we&rsquo;ll keep you posted as
          details go live.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-semibold uppercase text-neutral-700'>
            Name
          </span>
          <input
            type='text'
            name='name'
            value={formValues.name}
            onChange={handleChange}
            placeholder='Enter your full name'
            className='rounded-xl border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-ap-blue focus:ring-2 focus:ring-ap-blue/30 disabled:cursor-not-allowed disabled:bg-neutral-100'
            disabled={isLocked}
            required
          />
        </label>

        <label className='flex flex-col gap-2'>
          <span className='text-sm font-semibold uppercase text-neutral-700'>
            Email
          </span>
          <input
            type='email'
            name='email'
            value={formValues.email}
            onChange={handleChange}
            placeholder='Enter your email address'
            className='rounded-xl border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-ap-blue focus:ring-2 focus:ring-ap-blue/30 disabled:cursor-not-allowed disabled:bg-neutral-100'
            disabled={isLocked}
            required
          />
        </label>

        <button
          type='submit'
          className='mt-2 flex items-center justify-center rounded-xl bg-ap-blue px-6 py-3 font-oswald text-lg font-semibold uppercase tracking-wide text-white shadow-md transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:shadow-none'
          disabled={isLocked || status === 'submitting'}
        >
          {status === 'success'
            ? 'Submitted'
            : status === 'submitting'
            ? 'Submitting...'
            : 'Notify Me'}
        </button>
      </form>

      {(status === 'success' || status === 'error') && (
        <div className='mt-4 text-sm'>
          {status === 'success' ? (
            <p className='font-semibold text-emerald-600'>
              Thanks! You&rsquo;re on the list. We&rsquo;ll be in touch soon.
            </p>
          ) : (
            <p className='font-semibold text-red-600'>{errorMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LatestEventSignupForm;
