import { Dialog } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import BioSession from './BioSession';
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';
import { FaLinkedin } from 'react-icons/fa';

const SpeakerModal = ({
  open,
  close,
  name,
  title,
  company,
  url,
  bio,
  linkedin,
  session,
}) => {
  const router = useRouter();
  const hasBio = typeof bio === 'string' && bio.trim().length > 0;
  const hasSessions = Array.isArray(session) && session.length > 0;

  return (
    <Dialog open={open} onClose={() => close()} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/70' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex lg:items-center p-4 overflow-y-auto py-3'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto w-full max-w-4xl rounded-lg relative '>
          <div
            className='hidden lg:block absolute top-2 right-2 z-[60] cursor-pointer'
            onClick={() => close()}
          >
            <XCircleIcon className='w-8 h-8 fill-black/50' />
          </div>
          <div className='flex flex-col lg:flex-row w-full'>
            <div
              className={`w-full py-8 px-6 bg-ap-darkblue ${
                hasBio
                  ? 'lg:w-1/3 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg'
                  : 'rounded-t-lg lg:rounded-t-lg'
              }`}
            >
              <div
                className='flex flex-1 justify-end lg:hidden'
                onClick={() => close()}
              >
                <XCircleIcon className='w-6 h-6 fill-white/70' />
              </div>
              <div className='flex flex-col lg:gap-4 justify-center items-center'>
                <div
                  className={`w-24 h-24 md:w-28 md:h-28 bg-ap-yellow rounded-full ring-4 ring-ap-yellow bg-cover bg-center`}
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div className='flex flex-col mt-3 mb-1 w-full items-center text-center'>
                  <div className='flex gap-3 items-center justify-center'>
                    <div className='font-bold font-oswald uppercase text-ap-darkblue text-xl bg-white px-2 py-1 w-fit text-center'>
                      {name}
                    </div>
                    {linkedin && (
                      <div onClick={() => window.open(linkedin, '_blank')}>
                        <FaLinkedin color='white' size={30} />
                      </div>
                    )}
                  </div>
                  <div
                    className='flex flex-col mt-1 w-full px-3 py-1 text-white items-center text-center'
                  >
                    <div className='text-sm'>{title}</div>
                    <div className='text-sm font-bold'>{company}</div>
                  </div>
                </div>
              </div>
            </div>
            {hasBio && (
              <div className='w-full lg:w-2/3 bg-neutral-50 p-5 lg:p-9 text-sm flex flex-col justify-center gap-3 pb-9 lg:rounded-r-lg'>
                <div className='uppercase font-oswald text-xl text-ap-darkblue font-bold'>
                  Bio
                </div>
                <div className='text-gray-700 whitespace-pre-line max-w-2xl'>
                  {bio}
                </div>
              </div>
            )}
          </div>
          {hasSessions && (
            <div className='bg-white px-5 pt-3 pb-6 lg:px-9 lg:pt-4 lg:pb-8 text-sm border-t border-neutral-200'>
              <div className='uppercase font-oswald text-lg text-ap-darkblue font-bold'>
                Sessions
              </div>
              <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {session.map((s) => (
                  <div
                    key={s.name}
                    className='border border-gray-200 rounded-md p-3 cursor-pointer hover:border-ap-darkblue transition-colors'
                    onClick={() => router.push('/agenda')}
                  >
                    <BioSession
                      startTime={s.session_start}
                      endTime={s.session_end}
                      title={s.name}
                      location={s.location}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SpeakerModal;
