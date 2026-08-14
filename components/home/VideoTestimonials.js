import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import VideoPlayer from '../../shared/VideoPlayer';
import { videoTestimonials } from '../../data/videoTestimonials';

const QuoteMark = () => (
  <svg
    viewBox='0 0 48 36'
    className='h-10 w-12 text-ap-yellow sm:h-12 sm:w-14'
    aria-hidden='true'
    fill='currentColor'
  >
    <path d='M0 36V21.6C0 9.72 6.48 2.16 19.44 0L21.6 5.76C14.4 7.56 10.8 11.88 10.8 18H18V36H0Zm26.4 0V21.6C26.4 9.72 32.88 2.16 45.84 0L48 5.76C40.8 7.56 37.2 11.88 37.2 18H44.4V36H26.4Z' />
  </svg>
);

const VideoTestimonials = ({ testimonials = videoTestimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = testimonials.length;
  const active = testimonials[activeIndex] || testimonials[0];

  if (!count) return null;

  const goTo = (index) => {
    setActiveIndex(((index % count) + count) % count);
  };

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  return (
    <section className='w-full px-5 xl:px-0'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='mb-8 text-center md:mb-10'>
          <h2 className='font-oswald text-2xl font-medium uppercase tracking-tight text-neutral-900 md:text-4xl'>
            What Attendees Are Saying
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-lg text-neutral-700'>
            Hear directly from packaging leaders who&apos;ve been in the room.
          </p>
        </div>

        <div className='grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8'>
          {/* Left — video carousel */}
          <div className='flex h-full flex-col justify-center'>
            <div className='relative aspect-video w-full overflow-hidden rounded-2xl bg-black'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={active.id}
                  className='absolute inset-0'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <VideoPlayer videoEmbedLink={active.vimeoUrl} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='mt-3 flex items-center justify-between gap-3'>
              <button
                type='button'
                onClick={prev}
                aria-label='Previous testimonial'
                className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-neutral-900 transition hover:bg-ap-yellow'
              >
                <ChevronLeftIcon className='h-5 w-5' />
              </button>

              <div className='flex items-center gap-2'>
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type='button'
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === activeIndex}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === activeIndex
                        ? 'w-7 bg-ap-yellow'
                        : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type='button'
                onClick={next}
                aria-label='Next testimonial'
                className='inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-neutral-900 transition hover:bg-ap-yellow'
              >
                <ChevronRightIcon className='h-5 w-5' />
              </button>
            </div>
          </div>

          {/* Right — pull quote */}
          <div className='flex flex-col justify-center rounded-2xl border-2 border-black bg-white p-7 shadow-[4px_6px_0_black] sm:p-10 lg:p-12'>
            <QuoteMark />
            <AnimatePresence mode='wait'>
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className='mt-5 flex flex-col gap-8'
              >
                <blockquote className='font-oswald text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-3xl lg:text-[2rem] lg:leading-snug'>
                  {active.pullQuote}
                </blockquote>
                <footer className='border-t border-neutral-200 pt-5'>
                  <div className='text-lg font-bold text-ap-darkblue'>
                    {active.name}
                  </div>
                  <div className='mt-0.5 text-sm font-semibold uppercase tracking-wide text-neutral-600'>
                    {active.position}
                  </div>
                  <div className='mt-0.5 text-sm font-medium text-neutral-500'>
                    {active.company}
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>

            <p className='mt-8 text-xs font-semibold uppercase tracking-widest text-neutral-400'>
              {activeIndex + 1} / {count}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
