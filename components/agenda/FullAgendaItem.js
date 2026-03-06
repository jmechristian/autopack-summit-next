import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { S3Image, useS3Url } from '../S3Image';

function SponsorLogo({ sponsor, whiteOverlay = false }) {
  const { url: logoUrl } = useS3Url(sponsor?.logo);
  if (!sponsor?.name && !sponsor?.logo) return null;
  return (
    <div className='flex items-center'>
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={sponsor.name || 'Sponsor'}
          className={`max-h-10 w-auto object-contain ${
            whiteOverlay ? 'brightness-0 invert opacity-90' : ''
          }`}
        />
      ) : (
        <span className='text-sm text-neutral-500'>{sponsor.name}</span>
      )}
    </div>
  );
}

function SpeakerCard({ speaker: sp }) {
  const { url: logoUrl } = useS3Url(sp.companyLogo);
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='w-10 h-10 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0 ring-2 ring-neutral-300'>
        {sp.profilePicture ? (
          <S3Image
            src={sp.profilePicture}
            alt={sp.name}
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-lg font-semibold text-neutral-500'>
            {sp.name
              ?.split(/\s+/)
              .map((n) => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase() || '?'}
          </div>
        )}
      </div>
      <div className='mt-2 font-semibold text-neutral-900'>{sp.name}</div>
      <div className='text-xs leading-tight text-neutral-600'>
        {sp.title && `${sp.title}`}
        {sp.title && sp.company && ' · '}
        {sp.company}
      </div>
      {sp.companyLogo && logoUrl && (
        <div
          className='mt-2 w-16 h-8 bg-contain bg-center bg-no-repeat opacity-80'
          style={{ backgroundImage: `url(${logoUrl})` }}
          role='img'
          aria-label={sp.company || 'Company logo'}
        />
      )}
    </div>
  );
}

const FullAgendaItem = ({
  title,
  startTime,
  endTime,
  speakers,
  location,
  description,
  sponsors,
  details,
  type,
}) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/New_York',
    hour12: true,
  });

  const startDate = startTime ? new Date(startTime) : null;
  const endDate = endTime ? new Date(endTime) : null;
  const start =
    startDate && !Number.isNaN(startDate.getTime())
      ? formatter.format(startDate)
      : null;
  const end =
    endDate && !Number.isNaN(endDate.getTime())
      ? formatter.format(endDate)
      : null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`grid grid-cols-1 md:grid-cols-5 gap-8 xl:gap-16 h-full rounded-2xl  ${
          type === 'session'
            ? 'bg-ap-darkblue lg:min-h-[176px] pt-3 pr-2 lg:pt-2 lg:pr-3 border-4 border-ap-darkblue'
            : 'hover:bg-white pt-6 pb-9 lg:pt-3 lg:pb-3'
        }`}
      >
        <div
          className={`flex flex-col justify-center lg:grid lg:grid-cols-5 gap-1 lg:gap-8 xl:gap-12 col-span-8`}
        >
          <div
            className={`flex flex-col gap-6 lg:pl-6 py-3 lg:py-6 lg:border-r pr-8 md:border-r-slate-500 h-full w-full `}
          >
            <div
              className={`lg:col-span-1 font-oswald text-xl lg:text-2xl tracking-tight px-6 lg:px-0 ${
                type === 'session' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {start && end ? `${start} - ${end}` : 'TBD'}
            </div>
          </div>
          <div
            className={`flex flex-col gap-6 px-6 lg:px-0 ${
              !speakers ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}
          >
            <div className='flex flex-col lg:mt-0 py-6'>
              <div
                className={`font-semibold text-lg lg:text-xl lg:leading-tight xl:text-2xl leading-tight ${
                  type === 'session' ? 'text-amber-400' : 'text-neutral-900'
                }`}
              >
                {title}
              </div>
              <div
                className={`${
                  type === 'session'
                    ? 'text-neutral-300 pb-5 lg:pb-0'
                    : 'text-neutral-600'
                }`}
              >
                {location}
              </div>
              <div
                className={`mt-5 pb-3 text-sm ${
                  type === 'session'
                    ? 'text-white [&_*]:!text-white [&_a]:!text-white'
                    : 'text-black [&_*]:!text-black [&_a]:!text-black'
                }`}
              >
                {!isOpen && (
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                )}
              </div>
              {sponsors && sponsors.length > 0 && (
                <div
                  className={`mt-6 pt-4 border-t ${
                    type === 'session'
                      ? 'border-white/20'
                      : 'border-neutral-100'
                  }`}
                >
                  <p
                    className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                      type === 'session'
                        ? 'text-neutral-400'
                        : 'text-neutral-500'
                    }`}
                  >
                    Sponsored by
                  </p>
                  <div className='flex flex-wrap gap-6 items-center'>
                    {sponsors.map((sp, i) => (
                      <SponsorLogo
                        key={sp.id || sp.name || i}
                        sponsor={sp}
                        whiteOverlay={type === 'session'}
                      />
                    ))}
                  </div>
                </div>
              )}
              {details ? (
                <div className='flex flex-col gap-2'>
                  <div
                    className='flex items-center gap-1 pb-3 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div>
                      {isOpen ? (
                        <MinusCircleIcon className='fill-ap-yellow w-5 h-5' />
                      ) : (
                        <PlusCircleIcon className='fill-ap-yellow w-5 h-5' />
                      )}
                    </div>
                    <div className='text-sm font-semibold text-white'>
                      View {isOpen ? 'Less' : 'More'}
                    </div>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div className='flex flex-col gap-3 pb-3'>
                        {details.map((detail, i) => (
                          <motion.div
                            className={`!text-white text-sm ${
                              detail.children[0].marks &&
                              detail.children[0].marks.includes('strong')
                                ? 'font-bold'
                                : 'font-base'
                            }`}
                          >
                            {detail.children[0].text}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          {speakers && speakers.length > 0 && (
            <div
              className={`flex flex-col gap-6 lg:col-span-2 bg-white w-full px-5 py-6 rounded-xl lg:rounded-r-xl mx-1 mb-2`}
            >
              <div className='grid md:grid-cols-2 gap-6 mt-3 lg:mt-0 lg:col-span-4'>
                {speakers.map((sp, i) => (
                  <SpeakerCard key={sp.id || sp.name || i} speaker={sp} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullAgendaItem;
