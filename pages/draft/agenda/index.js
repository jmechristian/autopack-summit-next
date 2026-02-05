import React, { useState, useMemo, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@headlessui/react';
import FullAgendaItem from '../../../components/agenda/FullAgendaItem';
import NewAgendaItem from '../../../components/agenda/NewAgendaItem';
import Logo from '../../../shared/Logo';
import newGen1Config from '../../../src/new-gen1-aws-exports';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AGENDA_DATES = {
  dayOne: '2026-09-30',
  dayTwo: '2026-10-01',
  dayThree: '2026-10-02',
};

const AGENDA_LABELS = {
  dayOne: 'Wednesday, September 30, 2026',
  dayTwo: 'Thursday, October 1, 2026',
  dayThree: 'Friday, October 2, 2026',
};

const APS_AGENDA_ID = '83afcde3-7ff3-464a-b116-69e244a39dfd';

const APS_AGENDA_QUERY = `
  query MyQuery {
    getApsAgenda(id: "${APS_AGENDA_ID}") {
      id
      eventId
      items {
        items {
          agendaId
          createdAt
          date
          description
          endTime
          id
          location
          startTime
          title
          speakers {
            items {
              aPSSpeaker {
                id
                headshot
                firstName
                linkedin
                company
                title
              }
            }
          }
          sponsors {
            items {
              apsSponsor {
                id
                company {
                  logo
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const normalizeAgendaDate = (value) => {
  if (!value) return null;

  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }

  const parts = value.split(/[-/]/);
  if (parts.length === 3) {
    const [month, day, year] = parts;
    const fullYear = year.length === 2 ? `20${year}` : year;
    const paddedMonth = month.padStart(2, '0');
    const paddedDay = day.padStart(2, '0');
    return `${fullYear}-${paddedMonth}-${paddedDay}`;
  }

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return value;
};

const normalizeAgendaTime = (value) => {
  if (!value) return null;
  if (/^\d{2}:\d{2}:\d{2}$/.test(value)) return value;
  if (/^\d{2}:\d{2}$/.test(value)) return `${value}:00`;
  return value;
};

const combineDateTime = (dateValue, timeValue) => {
  if (!dateValue || !timeValue) return null;
  const normalizedDate = normalizeAgendaDate(dateValue);
  const normalizedTime = normalizeAgendaTime(timeValue);
  if (!normalizedDate || !normalizedTime) return null;
  if (normalizedTime.includes('T')) return normalizedTime;
  return `${normalizedDate}T${normalizedTime}`;
};

const matchesAgendaDate = (value, targetDate) => {
  if (!value || !targetDate) return false;

  if (value === targetDate) return true;

  const normalized = normalizeAgendaDate(value);
  if (normalized === targetDate) return true;

  const monthDay =
    normalized && normalized.length >= 10 ? normalized.slice(5) : null;
  return monthDay ? monthDay === targetDate.slice(5) : false;
};

const mapAgendaItems = (items) =>
  items.map((item) => ({
    _id: item.id,
    date: normalizeAgendaDate(item.date),
    location: item.location,
    title: item.title || item.description,
    description: item.description || 'No Description',
    type: 'session',
    startTime: combineDateTime(item.date, item.startTime),
    endTime: combineDateTime(item.date, item.endTime),
    speakers:
      item.speakers?.items?.map((speakerItem) => ({
        id: speakerItem.aPSSpeaker?.id,
        name: speakerItem.aPSSpeaker?.firstName,
        company: speakerItem.aPSSpeaker?.company,
        title: speakerItem.aPSSpeaker?.title,
        headshot: speakerItem.aPSSpeaker?.headshot,
        linkedin: speakerItem.aPSSpeaker?.linkedin,
      })) || [],
    sponsors:
      item.sponsors?.items?.map((sponsorItem) => ({
        id: sponsorItem.apsSponsor?.id,
        name: sponsorItem.apsSponsor?.company?.name,
        logo: sponsorItem.apsSponsor?.company?.logo,
      })) || [],
  }));

const DraftCompactAgenda = ({ dayOne, dayTwo, dayThree, enabled }) => {
  return (
    <motion.div
      className='flex flex-col'
      key={enabled}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <motion.div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day One</span> {AGENDA_LABELS.dayOne}
        </motion.div>
      </motion.div>
      {dayOne &&
        dayOne.map((s) => (
          <motion.div className='w-full' key={s._id}>
            <NewAgendaItem
              type={s.type}
              title={s.title}
              description={s.description}
              startTime={s.startTime}
              endTime={s.endTime}
              location={s.location}
              speakers={s.speakers}
              sponsors={s.sponsors}
            />
          </motion.div>
        ))}
      <motion.div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <motion.div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day Two</span> {AGENDA_LABELS.dayTwo}
        </motion.div>
      </motion.div>
      {dayTwo &&
        dayTwo.map((s) => (
          <motion.div className='w-full' key={s._id}>
            <NewAgendaItem
              type={s.type}
              title={s.title}
              description={s.description}
              startTime={s.startTime}
              endTime={s.endTime}
              location={s.location}
              speakers={s.speakers}
              sponsors={s.sponsors}
            />
          </motion.div>
        ))}
      <motion.div className='bg-black rounded-xl w-full px-6 py-4 flex'>
        <motion.div className='text-ap-yellow font-medium text-lg lg:text-xl font-oswald uppercase'>
          <span className='text-white'>Day Three</span> {AGENDA_LABELS.dayThree}
        </motion.div>
      </motion.div>
      {dayThree &&
        dayThree.map((s) => (
          <motion.div className='w-full' key={s._id}>
            <NewAgendaItem
              type={s.type}
              title={s.title}
              description={s.description}
              startTime={s.startTime}
              endTime={s.endTime}
              location={s.location}
              speakers={s.speakers}
              sponsors={s.sponsors}
            />
          </motion.div>
        ))}
    </motion.div>
  );
};

const AgendaDraft = ({ sessionData }) => {
  const [enabled, setEnabled] = useState(false);
  const [isDay, setDay] = useState(1);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dayOne = useMemo(() => {
    const one =
      sessionData &&
      sessionData.filter((s) => matchesAgendaDate(s.date, AGENDA_DATES.dayOne));

    return one;
  }, [sessionData]);

  const dayTwo = useMemo(() => {
    const two =
      sessionData &&
      sessionData.filter((s) => matchesAgendaDate(s.date, AGENDA_DATES.dayTwo));

    return two;
  }, [sessionData]);

  const dayThree = useMemo(() => {
    const three =
      sessionData &&
      sessionData.filter((s) =>
        matchesAgendaDate(s.date, AGENDA_DATES.dayThree)
      );
    return three;
  }, [sessionData]);

  const sessionByDate = useMemo(() => {
    const currentDay = () => {
      switch (isDay) {
        case 0:
          return AGENDA_DATES.dayOne;
        case 1:
          return AGENDA_DATES.dayTwo;
        case 2:
          return AGENDA_DATES.dayThree;
        default:
          return AGENDA_DATES.dayOne;
      }
    };

    const dayToShow =
      sessionData &&
      sessionData.filter((s) => matchesAgendaDate(s.date, currentDay(isDay)));

    return dayToShow;
  }, [sessionData, isDay]);

  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | Agenda</title>
        <meta
          property='og:title'
          content='Automotive Packaging Summit | Agenda'
        />
      </Head>
      <div className='max-w-lg lg:max-w-5xl xl:max-w-7xl mx-auto pt-5 lg:pt-9 pb-20 relative px-5 xl:px-0'>
        <div className='w-full flex flex-col sticky top-9 bg-white rounded-2xl shadow-xl'>
          <div className='w-full flex flex-col gap-6 lg:flex-row justify-between py-9 items-center px-8 rounded-2xl border-4 border-neutral-900'>
            <div className='flex gap-3 items-center'>
              <div className='font-oswald uppercase font-medium text-3xl lg:text-5xl'>
                2026 Agenda
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-3'>
                <div className='font-bold text-sm'>Compact</div>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={classNames(
                    enabled ? 'bg-ap-yellow' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                  )}
                >
                  <span className='sr-only'>Use setting</span>
                  <span
                    className={classNames(
                      enabled ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                  >
                    <span
                      className={classNames(
                        enabled
                          ? 'opacity-0 duration-100 ease-out'
                          : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                      )}
                      aria-hidden='true'
                    >
                      <svg
                        className='h-3 w-3 text-gray-400'
                        fill='none'
                        viewBox='0 0 12 12'
                      >
                        <path
                          d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
                          stroke='currentColor'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                    <span
                      className={classNames(
                        enabled
                          ? 'opacity-100 duration-200 ease-in'
                          : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                      )}
                      aria-hidden='true'
                    >
                      <svg
                        className='h-3 w-3 text-black'
                        fill='currentColor'
                        viewBox='0 0 12 12'
                      >
                        <path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
                      </svg>
                    </span>
                  </span>
                </Switch>
              </div>
              <div
                ref={componentRef}
                className='hidden print:flex print:flex-col gap-6 p-6'
              >
                <div className='flex w-full justify-between gap-3 items-center'>
                  <div className='w-28 md:w-32 lg:w-40 xl:w-48'>
                    <Logo />
                  </div>
                  <div className='font-oswald uppercase font-medium text-3xl lg:text-5xl'>
                    2026 Agenda
                  </div>
                </div>
                <DraftCompactAgenda
                  dayOne={dayOne}
                  dayTwo={dayTwo}
                  dayThree={dayThree}
                  enabled={enabled}
                />
              </div>
              <button
                className='bg-ap-blue w-fit text-white text-sm md:text-sm font-medium px-4 py-1.5 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all'
                onClick={handlePrint}
              >
                Download as PDF
              </button>
            </div>
          </div>
          {!enabled && (
            <AnimatePresence>
              <div className='w-full bg-neutral-900 rounded-2xl flex items-center justify-center border-4 border-neutral-900'>
                <div className='flex flex-col lg:flex-row px-6 py-6 lg:py-4 gap-3'>
                  <div className='text-sm font-bold text-white place-self-center'>
                    Select Date:
                  </div>
                  <div className='flex items-center gap-1'>
                    <div
                      className={classNames(
                        isDay === 0
                          ? 'bg-ap-yellow text-white'
                          : 'bg-gray-300 text-neutral-400',
                        'font-oswald text-lg  font-medium w-28 h-9 flex justify-center items-center cursor-pointer hover:bg-amber-300 hover:text-white/80 transition-all ease-in'
                      )}
                      onClick={() => setDay(0)}
                    >
                      <div>WED SEP 30</div>
                    </div>
                    <div
                      className={classNames(
                        isDay === 1
                          ? 'bg-ap-yellow text-white'
                          : 'bg-gray-300 text-neutral-400',
                        'font-oswald text-lg  font-medium w-28 h-9 flex justify-center items-center cursor-pointer hover:bg-amber-300 hover:text-white/80 transition-all ease-in'
                      )}
                      onClick={() => setDay(1)}
                    >
                      <div>THU OCT 1</div>
                    </div>
                    <div
                      className={classNames(
                        isDay === 2
                          ? 'bg-ap-yellow text-white'
                          : 'bg-gray-300 text-neutral-400',
                        'font-oswald text-lg  font-medium w-28 h-9 flex justify-center items-center cursor-pointer hover:bg-amber-300 hover:text-white/80 transition-all ease-in'
                      )}
                      onClick={() => setDay(2)}
                    >
                      <div>FRI OCT 2</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          )}
        </div>
        <div className='w-full rounded-2xl border-4 border-neutral-900 bg-amber-100 lg:px-6 lg:py-8 flex flex-col'>
          <AnimatePresence>
            {enabled && (
              <DraftCompactAgenda
                dayOne={dayOne}
                dayTwo={dayTwo}
                dayThree={dayThree}
                enabled={enabled}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!enabled && (
              <motion.div
                className='flex flex-col gap-1 lg:gap-3'
                key={enabled}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {sessionByDate &&
                  sessionByDate
                    .sort((a, b) =>
                      (a.startTime || '').localeCompare(
                        b.startTime || ''
                      )
                    )
                    .map((s) => (
                      <motion.div key={s._id}>
                        <FullAgendaItem
                          type={s.type}
                          title={s.title}
                          startTime={s.startTime}
                          endTime={s.endTime}
                          location={s.location}
                          speakers={s.speakers}
                          sponsors={s.sponsors}
                          description={s.description}
                          details={s.details}
                        />
                      </motion.div>
                    ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let sessionData = [];

  try {
    const endpoint =
      process.env.NEXT_PUBLIC_NEW_GEN1_APPSYNC_ENDPOINT ||
      process.env.NEW_GEN1_APPSYNC_ENDPOINT ||
      newGen1Config.aws_appsync_graphqlEndpoint;

    if (!endpoint) {
      throw new Error('New Gen 1 AppSync endpoint is missing.');
    }

    const apiKey =
      process.env.NEXT_PUBLIC_NEW_GEN1_APPSYNC_API_KEY ||
      process.env.NEW_GEN1_APPSYNC_API_KEY ||
      newGen1Config.aws_appsync_apiKey;

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (apiKey) {
      headers['x-api-key'] = apiKey;
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: APS_AGENDA_QUERY }),
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
      console.error('Agenda fetch error:', result.errors || response.statusText);
    } else {
      const agendaItems = result.data?.getApsAgenda?.items?.items || [];
      sessionData = mapAgendaItems(agendaItems);
    }
  } catch (error) {
    console.error('Agenda fetch failed:', error);
  }

  return {
    props: {
      sessionData,
    },
  };
}

export default AgendaDraft;
