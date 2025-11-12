import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { listTestimonials } from '../src/graphql/queries';
import { createClient } from 'next-sanity';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import {
  MdDiversity3,
  MdPlayArrow,
  MdPlayCircleFilled,
  MdCelebration,
  MdMapsUgc,
} from 'react-icons/md';
import { Reveal } from '../shared/Reveal';
import { useDispatch } from 'react-redux';
import {
  openPowerConsole,
  closePowerConsole,
  openSponsorForm,
} from '../features/layout/layoutSlice';
import { useSelector } from 'react-redux';
import { PowerIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';

import ScrollingTestimonials from '../shared/ScrollingTestimonial';
import HeaderPadding from '../shared/HeaderPadding';
import SpeakersMain from '../components/home/SpeakersMain';
import SponsorsMain from '../components/home/sponsors/SponsorsMain';
import RibbonLogos from '../shared/RibbonLogos';
import PingIcon from '../shared/PingIcon';
import NewSpeakersMain from '../components/home/NewSpeakersMain';
import NewSponsorsMain from '../components/home/NewSponsorsMain';
import VideoPlayer from '../shared/VideoPlayer';
import Logo from '../shared/Logo';
import LatestEventSignupForm from '../components/home/LatestEventSignupForm';

const Page = ({ homepageData, speakers, testimonials }) => {
  const dispatch = useDispatch();
  const { powerOpen } = useSelector((state) => state.layout);
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full h-full flex flex-col gap-16 lg:gap-40 py-6 lg:py-10 relative'>
      {isOpen && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-md z-[50] flex items-center justify-center'>
          <div className='w-full max-h-[100vh] max-w-2xl lg:max-w-7xl bg-ap-blue rounded-2xl pt-3  lg:px-6 pb-6 flex flex-col'>
            <div className='flex justify-between w-full h-full items-center pb-3 lg:pb-6 lg:pt-3 px-3'>
              <div className='lg:w-48 w-36'>
                <Logo show={true} />
              </div>
              <div
                className='bg-ap-yellow rounded-xl lg:text-lg md:px-3 md:py-2 cursor-pointer text-white font-bold flex items-center gap-1'
                onClick={() => setIsOpen(false)}
              >
                <div>
                  <ArrowLeftCircleIcon className='md:w-5 md:h-5 w-7 h-7 fill-white' />
                </div>
                <div className='hidden md:block'>Back</div>
              </div>
            </div>
            <div className='w-full h-auto aspect-video bg-ap-blue'>
              <VideoPlayer
                videoEmbedLink={
                  'https://player.vimeo.com/video/399930893?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                }
              />
            </div>
          </div>
        </div>
      )}
      <div className='w-full px-5 xl:px-0 grid gap-16 lg:gap-12 lg:grid-cols-2 max-w-7xl mx-auto relative overflow-hidden'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-6 lg:gap-10 max-w-xl md:mx-auto'>
            <div>
              <Reveal delay={0} bgColor={'white'}>
                <h1 className='font-medium text-5xl xl:text-6xl tracking-tight font-oswald uppercase'>
                  The premier open forum for{' '}
                  <span className='text-ap-darkblue'>
                    Automotive Packaging Professionals
                  </span>
                </h1>
              </Reveal>
            </div>
            {/* <Reveal delay={0.25} bgColor={'white'}>
              <div className='text-lg xl:text-xl'>
                Discover cutting-edge solutions at the Automotive Packaging
                Summit, where industry veterans and packaging experts unite to
                tackle the unique challenges in OEM and Tier 1 part supplier
                logistics.
              </div>
            </Reveal> */}
            <Reveal delay={0.4} bgColor={'white'}>
              <LatestEventSignupForm />
            </Reveal>
          </div>
        </div>

        <div
          className='w-full bg-black rounded-xl overflow-hidden flex items-end bg-cover bg-center relative aspect-square md:aspect-auto'
          style={{
            backgroundImage: `url('https://packmedia54032-staging.s3.us-east-1.amazonaws.com/todd-bw.png')`,
          }}
        >
          <div className='flex flex-col gap-1 w-full p-6 z-20 max-w-lg'>
            <div className='text-white text-2xl font-medium font-oswald uppercase tracking-tight'>
              Todd Chesna
              <span className='text-ap-yellow font-medium font-oswald uppercase tracking-tight'>
                , Ford
              </span>
            </div>
            <div className='text-white text-sm font-medium'>
              2025 APS Keynote Speaker Todd Chesna, Manager – Packaging
              Engineering at Ford, shares strategies for integrating and
              optimizing packaging in new vehicle programs.
            </div>
          </div>
          <div className='flex flex-col gap-2 p-3 absolute bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent'></div>
        </div>
      </div>
      <RibbonLogos />
      <div className='w-full grid px-5 xl:px-0 lg:grid-cols-2 gap-6 md:max-w-xl lg:max-w-7xl mx-auto'>
        <div className='w-full rounded-2xl bg-amber-400 xl:aspect-square border-2 border-black shadow-[4px_6px_0_black]'>
          <div className='p-9 flex flex-col justify-between gap-12 lg:gap-40'>
            <div className='font-bold text-4xl max-w-lg tracking-tight leading-none'>
              An average production automobile has{' '}
              <span className='text-white inline-flex'> 30,000 parts</span> and
              tens of thousands of associated packages throughout the vehicle’s
              life cycle.
            </div>
            <div className='border-t border-t-neutral-500'>
              <div className='flex flex-col gap-3 pt-6 text-lg leading-snug'>
                <div className='flex gap-2 items-center'>
                  <div className='w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center'>
                    <div className='-mt-1'>
                      <MdDiversity3 color='white' size={'24px'} />
                    </div>
                  </div>
                  <div className='font-oswald uppercase font-medium '>
                    All the right folks, gathered in ONE room
                  </div>
                </div>
                <div>
                  At the Automotive Packaging Summit, we explore the specific
                  packaging and logistics challenges faced by OEMs and Tier1
                  Part Suppliers, and their impact on Transportation and
                  Logistics. Industry veterans and Packaging Experts
                  specializing in Automotive Packaging Solutions share insights
                  to streamline this process through knowledge sharing.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-2 w-full gap-6 overflow-hidden'>
          <div
            className='w-full rounded-2xl border-2 border-black md:aspect-video lg:aspect-auto bg-neutral-200 bg-cover bg-center flex items-center justify-center relative overflow-hidden'
            style={{
              backgroundImage: `url('https://packschool.s3.amazonaws.com/recap.png')`,
            }}
          >
            {isPlaying ? (
              <div className='w-full h-full bg-black'>
                <VideoPlayer
                  videoEmbedLink={
                    'https://www.youtube.com/embed/6xNwXZt3Wa8?si=ibW3QcLncKjXbp9x'
                  }
                  playing={true}
                />
              </div>
            ) : (
              <button
                className='bg-white/50 backdrop-blur w-28 h-28 rounded-full text-white text-base md:text-lg font-medium shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex justify-center items-center'
                onClick={() => setIsPlaying(true)}
              >
                <MdPlayArrow color='white' size={'75px'} />
              </button>
            )}
            {!isPlaying && (
              <div className='absolute bottom-4 left-4 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                2023 Highlights
              </div>
            )}
          </div>
          <div className='grid grid-cols-2 gap-6 w-full h-full overflow-hidden'>
            <div
              className=' cursor-pointer w-full h-full grayscale transition-all ease-in hover:grayscale-0 bg-white border-2 border-black rounded-2xl relative flex items-center bg-cover bg-center'
              style={{
                backgroundImage: `url('https://packschool.s3.amazonaws.com/front-autopack-summit-group-sm.png')`,
              }}
              onClick={() => setIsOpen(true)}
            >
              <div className='absolute bottom-2 left-2 w-fit px-4 py-2 rounded-2xl shadow-xl bg-black/40 backdrop-blur text-white font-oswald font-medium uppercase'>
                What Makes APS Unique?
              </div>
            </div>
            <div className='w-full  bg-neutral-300 rounded-2xl border-2 border-black'>
              <div className='flex flex-col justify-between p-4 lg:p-6 h-full gap-3 lg:gap-0'>
                <div className='flex gap-2 items-center'>
                  <div>
                    <PowerIcon className='w-6 h-6 lg:w-10 lg:h-10 stroke-neutral-900' />
                  </div>
                  <div className='font-medium font-oswald uppercase text-2xl lg:text-4xl tracking-tight text-neutral-900'>
                    Get Involved
                  </div>
                </div>
                <div className='flex flex-col gap-3 text-white'>
                  <div
                    className='flex gap-2 items-center cursor-pointer'
                    onClick={() => router.push('/speaker-interest')}
                  >
                    <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                      <MdMapsUgc color='white' size={'20px'} />
                    </div>
                    <div className='font-bold text-neutral-900 lg:text-lg'>
                      I'd like to Speak
                    </div>
                  </div>
                  <div
                    className='flex gap-2 items-center cursor-pointer'
                    onClick={() => dispatch(openSponsorForm())}
                  >
                    <div className='w-9 h-9 rounded-full bg-ap-yellow flex items-center justify-center'>
                      <MdCelebration color='white' size={'20px'} />
                    </div>
                    <div className='font-bold text-neutral-900 lg:text-lg'>
                      I'd like to Sponsor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingTestimonials
        testimonials={testimonials.listTestimonials.items}
      />
      <div className='max-w-7xl mx-auto w-full'>
        <NewSpeakersMain
          headline={homepageData[0].speakersHeadline}
          subheadline={homepageData[0].speakersSubheadline}
          text={homepageData[0].speakersBodyContent}
          speakers={speakers}
        />
      </div>
      <div className='md:max-w-lg lg:max-w-7xl mx-auto w-full'>
        <NewSponsorsMain sponsors={homepageData[0].sponsorList} />
      </div>
    </div>
  );
};

export default Page;

const client = createClient({
  projectId: 'h72r2zbr',
  dataset: 'aps',
  apiVersion: '2022-11-20',
  useCdn: true,
});

export async function getStaticProps() {
  const homepageData = await client.fetch(`*[_type == "homepage"]{
    ..., speakers[]->, "sponsorList": *[_type == "sponsor"]{
      logo { asset-> { url }}, name, teir, website
    }
  }`);

  const speakers = await client.fetch(`*[_type == "speaker"] {
    ..., companyLogo { asset-> {url}}, profilePic { asset-> {url}}, speakerSessions[]->{ name, location, session_start, session_end, date, linkedin}
  }`);

  const testimonialsData = await API.graphql({
    query: listTestimonials,
    variables: { filter: { tags: { contains: 'APS' } } },
  });
  const testimonials = testimonialsData.data;

  return {
    props: {
      homepageData,
      speakers,
      testimonials,
    },
    revalidate: 10,
  };
}
