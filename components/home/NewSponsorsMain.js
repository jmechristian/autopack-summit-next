import React from 'react';
import NewSponsorsMainHead from './sponsors/NewSponsorMainHead';
import { useS3Url } from '../S3Image';

function SponsorLogoGrid({ sponsors }) {
  const visibleSponsors =
    sponsors?.filter((s) => s && s.logo && s.name) || [];

  return (
    <div className='max-w-7xl mx-auto py-16 px-5 xl:px-0'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
        {visibleSponsors.map((s) => (
          <SponsorLogoCard key={s.id || s.name} sponsor={s} />
        ))}
      </div>
    </div>
  );
}

function SponsorLogoCard({ sponsor }) {
  const { url: logoUrl } = useS3Url(sponsor.logo);
  if (!logoUrl) return null;

  const content = (
    <div className='w-full h-full flex items-center justify-center p-3'>
      <img
        src={logoUrl}
        alt={sponsor.name}
        className='max-h-16 w-auto object-contain'
      />
    </div>
  );

  return sponsor.website ? (
    <a
      href={sponsor.website}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={sponsor.name}
    >
      {content}
    </a>
  ) : (
    content
  );
}

const NewSponsorsMain = ({ sponsors }) => {
  return (
    <div className='overflow-hidden'>
      <NewSponsorsMainHead />
      <SponsorLogoGrid sponsors={sponsors} />
    </div>
  );
};

export default NewSponsorsMain;
