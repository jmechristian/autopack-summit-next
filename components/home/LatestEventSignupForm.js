import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { sendCodeRequest } from '../../util/api';

const TICKET_PRICE = 1600;
const CODE_REQUEST_COOLDOWN_MS = 60 * 1000;

const LatestEventSignupForm = () => {
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [codeForm, setCodeForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
  });
  const [codeStatus, setCodeStatus] = useState('idle'); // idle | submitting | success | error
  const [codeError, setCodeError] = useState('');
  const [codeCooldownUntil, setCodeCooldownUntil] = useState(0);
  const [, setCooldownTick] = useState(0);

  useEffect(() => {
    if (!codeCooldownUntil || Date.now() >= codeCooldownUntil) return;
    const id = setInterval(() => setCooldownTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [codeCooldownUntil]);

  const codeCooldownActive =
    codeCooldownUntil > 0 && Date.now() < codeCooldownUntil;

  const openCodeModal = () => {
    setCodeModalOpen(true);
    setCodeStatus('idle');
    setCodeError('');
  };

  const closeCodeModal = () => {
    setCodeModalOpen(false);
  };

  const handleCodeFieldChange = (e) => {
    const { name, value } = e.target;
    setCodeForm((prev) => ({ ...prev, [name]: value }));
    if (codeStatus === 'error') setCodeError('');
  };

  const handleCodeRequestSubmit = async (e) => {
    e.preventDefault();
    if (codeStatus === 'submitting' || codeCooldownActive) return;

    const email = codeForm.email.trim();
    const firstName = codeForm.firstName.trim();
    const lastName = codeForm.lastName.trim();
    const company = codeForm.company.trim();

    if (!email || !firstName || !lastName || !company) {
      setCodeError(
        'Please enter your email, first name, last name, and company.',
      );
      setCodeStatus('error');
      return;
    }

    setCodeStatus('submitting');
    setCodeError('');

    try {
      await sendCodeRequest(email, company, firstName, lastName);
      setCodeStatus('success');
      setCodeCooldownUntil(Date.now() + CODE_REQUEST_COOLDOWN_MS);
      setCodeForm({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
      });
    } catch (err) {
      console.error('Home OEM code request failed:', err);
      setCodeError(
        err?.message ||
          'Could not send your request. Please try again or contact info@packagingschool.com.',
      );
      setCodeStatus('error');
    }
  };

  const afterSubmitSuccess = codeStatus === 'success';

  return (
    <div className='w-full max-w-xl rounded-2xl border-2 border-black bg-slate-100 p-6 shadow-lg'>
      <div className='mb-6 space-y-5'>
        <div className='font-oswald text-3xl font-semibold uppercase tracking-tight text-ap-blue'>
          Registration is now open!
        </div>
        <div className='flex flex-col gap-0 leading-tight'>
          <div className='text-lg font-semibold uppercase text-neutral-800'>
            Sept 30 - Oct 2, 2026
          </div>
          <div className='text-lg font-semibold uppercase text-neutral-700'>
            Hyatt Regency, Greenville SC
          </div>
        </div>
      </div>

      <div className='mt-4 border-t border-neutral-300 pt-4'>
        <div className='flex flex-wrap items-baseline justify-between gap-2'>
          <span className='font-oswald text-2xl font-semibold uppercase tracking-tight text-neutral-900'>
            ${TICKET_PRICE.toLocaleString()}
          </span>
          <span className='text-xs font-semibold uppercase text-neutral-600'>
            Limit 2 per company
          </span>
        </div>
      </div>

      <a href='/register' className='mt-4 block'>
        <button
          type='button'
          className='flex w-full items-center justify-center rounded-xl bg-ap-blue px-6 py-3 font-oswald text-lg font-semibold uppercase tracking-wide text-white shadow-md transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:shadow-none'
        >
          Register Now
        </button>
      </a>

      <div className='mt-6 border-t border-neutral-300 pt-4'>
        <button
          type='button'
          onClick={openCodeModal}
          className='font-oswald text-base font-semibold uppercase tracking-wide text-ap-blue underline decoration-2 underline-offset-4 hover:text-ap-darkblue'
        >
          OEM/Tier 1 Code Request
        </button>
        <p className='mt-2 text-xs leading-snug text-neutral-600'>
          <span className='font-semibold text-neutral-800'>*</span>
          OEMs and Tier 1 Part Suppliers may request a code. Each code request
          will be reviewed upon approval.
        </p>
      </div>

      <Transition.Root show={codeModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={closeCodeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-slate-900/75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 sm:items-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-md transform overflow-hidden rounded-2xl border-2 border-black bg-white p-6 text-left shadow-xl transition-all'>
                  <button
                    type='button'
                    className='absolute right-3 top-3 rounded-md p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600'
                    onClick={closeCodeModal}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                  </button>

                  <Dialog.Title className='font-oswald text-xl font-semibold uppercase tracking-tight text-neutral-900 pr-8'>
                    OEM / Tier 1 code request
                  </Dialog.Title>
                  <p className='mt-2 text-sm text-neutral-600'>
                    Enter your details. We will email you after your request is
                    reviewed.
                  </p>

                  {afterSubmitSuccess ? (
                    <p className='mt-4 text-sm font-semibold text-emerald-700'>
                      Request sent. Check your inbox for next steps.
                    </p>
                  ) : (
                    <form
                      onSubmit={handleCodeRequestSubmit}
                      className='mt-4 flex flex-col gap-3'
                    >
                      <label className='flex flex-col gap-1'>
                        <span className='text-xs font-semibold uppercase text-neutral-700'>
                          Email *
                        </span>
                        <input
                          type='email'
                          name='email'
                          value={codeForm.email}
                          onChange={handleCodeFieldChange}
                          autoComplete='email'
                          className='rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-ap-blue focus:ring-2 focus:ring-ap-blue/30'
                          required
                        />
                      </label>
                      <label className='flex flex-col gap-1'>
                        <span className='text-xs font-semibold uppercase text-neutral-700'>
                          First name *
                        </span>
                        <input
                          type='text'
                          name='firstName'
                          value={codeForm.firstName}
                          onChange={handleCodeFieldChange}
                          autoComplete='given-name'
                          className='rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-ap-blue focus:ring-2 focus:ring-ap-blue/30'
                          required
                        />
                      </label>
                      <label className='flex flex-col gap-1'>
                        <span className='text-xs font-semibold uppercase text-neutral-700'>
                          Last name *
                        </span>
                        <input
                          type='text'
                          name='lastName'
                          value={codeForm.lastName}
                          onChange={handleCodeFieldChange}
                          autoComplete='family-name'
                          className='rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-ap-blue focus:ring-2 focus:ring-ap-blue/30'
                          required
                        />
                      </label>
                      <label className='flex flex-col gap-1'>
                        <span className='text-xs font-semibold uppercase text-neutral-700'>
                          Company **
                        </span>
                        <input
                          type='text'
                          name='company'
                          value={codeForm.company}
                          onChange={handleCodeFieldChange}
                          autoComplete='organization'
                          className='rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-ap-blue focus:ring-2 focus:ring-ap-blue/30'
                          required
                        />
                      </label>

                      {codeError && (
                        <p className='text-sm text-red-600'>{codeError}</p>
                      )}

                      <button
                        type='submit'
                        disabled={
                          codeStatus === 'submitting' || codeCooldownActive
                        }
                        className='mt-2 flex w-full items-center justify-center rounded-xl bg-ap-blue px-4 py-2.5 font-oswald text-sm font-semibold uppercase tracking-wide text-white shadow transition hover:bg-ap-darkblue disabled:cursor-not-allowed disabled:bg-neutral-400'
                      >
                        {codeStatus === 'submitting'
                          ? 'Sending...'
                          : codeCooldownActive
                            ? 'Request sent — try again shortly'
                            : 'Submit request'}
                      </button>
                    </form>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default LatestEventSignupForm;
