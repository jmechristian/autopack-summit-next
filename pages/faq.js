import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import HeaderPadding from '../shared/HeaderPadding';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const faqs = [
  {
    id: 'whats-included',
    category: 'Registration',
    question: "What's included in my registration?",
    answer: (
      <p>
        Full access to all summit sessions, meals (opening cocktail hour,
        breakfast, lunch, and cocktail reception), the exhibitor hall, table
        activities, the Pack Pitch Contest, a swag bag, and access to the event
        app.
      </p>
    ),
    searchText:
      "What's included in my registration? Full access to all summit sessions, meals opening cocktail hour breakfast lunch cocktail reception exhibitor hall table activities Pack Pitch Contest swag bag event app",
  },
  {
    id: 'registration-cost',
    category: 'Registration',
    question: 'How much does registration cost?',
    answer: (
      <p>
        $1,600 per attendee, limited to 2 per company for solution providers.
      </p>
    ),
    searchText:
      'How much does registration cost? $1600 1600 per attendee limited to 2 per company solution providers',
  },
  {
    id: 'oem-discount',
    category: 'Registration',
    question:
      "I'm an OEM or Tier 1 supplier — do I qualify for a discount code?",
    answer: (
      <p>
        Yes. OEMs and Tier 1 Part Suppliers can request a code on the{' '}
        <a href='/register' className='font-semibold text-ap-blue underline'>
          registration page
        </a>
        . Each request is reviewed for approval before it&apos;s issued.
      </p>
    ),
    searchText:
      "I'm an OEM or Tier 1 supplier do I qualify for a discount code? Yes OEMs and Tier 1 Part Suppliers can request a code on the registration page. Each request is reviewed for approval before it's issued.",
  },
  {
    id: 'exhibitor-staff',
    category: 'Registration',
    question: 'Can I add exhibitor staff tickets?',
    answer: (
      <p>
        Exhibitor staff tickets can be added by booth sponsors only, at $699 per
        ticket. These include full access to networking, sessions, food and
        drinks (opening cocktail hour, breakfast, lunch, and cocktail
        reception), but do not include an assigned seat at the main-stage round
        tables.
      </p>
    ),
    searchText:
      'Can I add exhibitor staff tickets? Exhibitor staff tickets can be added by booth sponsors only at $699 per ticket. Full access networking sessions food drinks cocktail hour breakfast lunch cocktail reception no assigned seat main-stage round tables',
  },
  {
    id: 'plant-tours',
    category: 'Tours',
    question: 'Are the plant/campus tours open to all attendees?',
    answer: (
      <>
        <p>
          Yes, open to all attendees on a first-come, first-served basis — spots
          are limited. Two Clemson University tours are included as part of the
          main summit agenda (Sep 30 and Oct 2). Attendees must register for
          tours either during event registration or via their registration
          profile page, linked in the welcome email. Some tours have a fee.
        </p>
        <p className='mt-4 rounded-r-lg border-l-4 border-ap-yellow bg-ap-yellow/10 px-4 py-3 text-sm text-gray-700'>
          A BMW plant tour is still under discussion and may be added closer to
          the event, subject to review for non-competitive registrants.
        </p>
      </>
    ),
    searchText:
      'Are the plant campus tours open to all attendees? Yes first-come first-served limited spots Clemson University Sep 30 Oct 2 register during registration or profile page welcome email fee BMW plant tour under discussion non-competitive',
  },
  {
    id: 'event-app',
    category: 'Event App',
    question: 'Do you have an event app?',
    answer: (
      <>
        <p>
          Yes, we have our own event app this year. You will receive access to
          the event app after registration is complete. Only approved registered
          attendees will be able to access the app.
        </p>
        <div className='mt-5 flex flex-col gap-4'>
          <div className='flex flex-wrap items-center gap-3'>
            <a
              href='https://apps.apple.com/us/app/automotive-packaging-summit/id6761734425'
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
              href='https://play.google.com/store/apps/details?id=com.packagingschool.autopacksummit'
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
              href='https://autopacksummit.expo.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-12 items-center justify-center rounded-lg bg-black px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90'
            >
              Open Web App
            </a>
          </div>
          <a
            href='/appguide'
            className='text-sm font-semibold text-ap-blue underline'
          >
            Open the full app how-to guide →
          </a>
        </div>
      </>
    ),
    searchText:
      'Do you have an event app? Yes own event app access after registration approved registered attendees App Store Google Play Android iOS web app expo how-to guide',
  },
  {
    id: 'cancellation',
    category: 'Policies',
    question: "What's the cancellation/refund policy?",
    answer: (
      <p>
        Can&apos;t attend? While we can&apos;t offer refunds, you&apos;re welcome
        to send a substitute from your company in your place — just let us know
        before the event.
      </p>
    ),
    searchText:
      "What's the cancellation refund policy? Can't attend no refunds substitute from your company let us know before the event",
  },
  {
    id: 'venue-hotel',
    category: 'Venue & Hotel',
    question: 'Where is the event, and is there a hotel block?',
    answer: (
      <>
        <p>
          Hyatt Regency, Greenville SC, September 30 – October 2, 2026.
        </p>
        <ul className='mt-4 space-y-2'>
          <li>
            <span className='font-semibold text-gray-900'>Room block:</span>{' '}
            <a
              href='https://www.hyatt.com/events/en-US/group-booking/GSPRG/G-APSM'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-ap-blue underline'
            >
              Book your room
            </a>
          </li>
          <li>
            <span className='font-semibold text-gray-900'>Group code:</span>{' '}
            G-APSM
          </li>
          <li>
            <span className='font-semibold text-gray-900'>Cut-off date:</span>{' '}
            September 8, 2026
          </li>
        </ul>
      </>
    ),
    searchText:
      'Where is the event and is there a hotel block? Hyatt Regency Greenville SC September 30 October 2 2026 room block group code G-APSM cut-off September 8 2026',
  },
  {
    id: 'what-to-wear',
    category: 'Attendee Info',
    question: 'What should I wear / bring?',
    answer: (
      <p>
        Business casual is typical for the sessions; the Oct 2 Clemson tour
        recommends comfortable clothing and walking shoes.
      </p>
    ),
    searchText:
      'What should I wear bring? Business casual sessions Oct 2 Clemson tour comfortable clothing walking shoes',
  },
  {
    id: 'contact-questions',
    category: 'Contact',
    question: 'Who do I contact with questions?',
    answer: (
      <p>
        Reach out to Bianca at{' '}
        <a
          href='mailto:bianca@packagingschool.com'
          className='font-semibold text-ap-blue underline'
        >
          bianca@packagingschool.com
        </a>
        .
      </p>
    ),
    searchText:
      'Who do I contact with questions? Bianca bianca@packagingschool.com',
  },
  {
    id: 'shipping-handling',
    category: 'Contact',
    question: 'Questions with shipping or handling?',
    answer: (
      <p>
        Reach out to Lars at{' '}
        <a
          href='mailto:lars@packagingschool.com'
          className='font-semibold text-ap-blue underline'
        >
          lars@packagingschool.com
        </a>
        .
      </p>
    ),
    searchText:
      'Questions with shipping or handling? Lars lars@packagingschool.com',
  },
];

const categories = [
  'All',
  ...Array.from(new Set(faqs.map((f) => f.category))),
];

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className='border-b border-gray-200 last:border-b-0'>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        className='flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-ap-blue'
      >
        <span className='text-lg font-semibold leading-snug text-gray-900'>
          {item.question}
        </span>
        <ChevronDownIcon
          className={`mt-1 h-5 w-5 shrink-0 text-ap-darkblue transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className='overflow-hidden'>
          <div className='pb-6 text-base leading-relaxed text-gray-600'>
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [openIds, setOpenIds] = useState(() => new Set());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((item) => {
      const matchesCategory =
        category === 'All' || item.category === category;
      const matchesQuery =
        !q || item.searchText.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filtered.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | FAQ</title>
        <meta
          name='description'
          content='Answers to common questions about Automotive Packaging Summit registration, tours, the event app, hotel block, and more.'
        />
        <meta
          property='og:title'
          content='Automotive Packaging Summit | FAQ'
        />
      </Head>

      <HeaderPadding />

      <div className='bg-ap-darkblue'>
        <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <p className='text-sm font-semibold uppercase tracking-widest text-ap-yellow'>
            Help Center
          </p>
          <h1 className='mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
            Frequently Asked Questions
          </h1>
          <p className='mt-4 max-w-2xl text-lg text-blue-100'>
            Everything you need to know about registration, tours, the event
            app, lodging, and more for APS 2026.
          </p>
        </div>
      </div>

      <div className='border-b border-gray-200 bg-white'>
        <div className='mx-auto max-w-3xl px-6 py-8 lg:px-8'>
          <label htmlFor='faq-search' className='sr-only'>
            Search FAQs
          </label>
          <div className='relative'>
            <MagnifyingGlassIcon className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
            <input
              id='faq-search'
              type='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search questions…'
              className='w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-12 pr-4 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-ap-blue focus:outline-none focus:ring-2 focus:ring-ap-blue/30'
            />
          </div>

          <div className='mt-5 flex flex-wrap gap-2'>
            {categories.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type='button'
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-ap-darkblue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-3xl px-6 py-10 lg:px-8'>
        <div className='mb-4 flex items-center justify-between gap-4'>
          <p className='text-sm text-gray-500'>
            {filtered.length}{' '}
            {filtered.length === 1 ? 'question' : 'questions'}
            {query.trim() ? ` matching “${query.trim()}”` : ''}
          </p>
          <div className='flex gap-3 text-sm font-semibold'>
            <button
              type='button'
              onClick={expandAll}
              className='text-ap-blue hover:underline'
              disabled={!filtered.length}
            >
              Expand all
            </button>
            <button
              type='button'
              onClick={collapseAll}
              className='text-gray-500 hover:underline'
              disabled={!openIds.size}
            >
              Collapse all
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className='rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center'>
            <p className='text-lg font-semibold text-gray-900'>
              No matching questions
            </p>
            <p className='mt-2 text-gray-600'>
              Try a different search term, or{' '}
              <button
                type='button'
                onClick={() => {
                  setQuery('');
                  setCategory('All');
                }}
                className='font-semibold text-ap-blue underline'
              >
                clear filters
              </button>
              .
            </p>
            <p className='mt-4 text-sm text-gray-500'>
              Still need help? Email{' '}
              <a
                href='mailto:bianca@packagingschool.com'
                className='font-semibold text-ap-blue underline'
              >
                bianca@packagingschool.com
              </a>
            </p>
          </div>
        ) : (
          <div className='rounded-2xl border border-gray-200 bg-white px-5 shadow-sm sm:px-8'>
            {filtered.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        )}

        <div className='mt-12 rounded-2xl bg-ap-darkblue px-6 py-8 text-center sm:px-10'>
          <h2 className='text-xl font-bold text-white'>Still have a question?</h2>
          <p className='mt-2 text-blue-100'>
            We&apos;re happy to help — reach out and we&apos;ll get back to you
            quickly.
          </p>
          <div className='mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row'>
            <a
              href='mailto:bianca@packagingschool.com'
              className='inline-flex items-center justify-center rounded-lg bg-ap-yellow px-5 py-2.5 text-sm font-bold text-ap-darkblue transition-opacity hover:opacity-90'
            >
              Email Bianca
            </a>
            <a
              href='mailto:lars@packagingschool.com'
              className='inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10'
            >
              Shipping questions → Lars
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
