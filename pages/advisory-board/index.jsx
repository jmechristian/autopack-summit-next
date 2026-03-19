import React, { useEffect, useMemo, useState } from 'react';
import { getBoardMembers } from '../../util/api';
import Head from 'next/head';
import { useS3Url } from '../../components/S3Image';

const MemberCard = ({ member }) => {
  const { url: profilePicUrl } = useS3Url(member.profilePic);
  const initials = useMemo(() => {
    if (!member?.name) return 'AB';
    const parts = member.name.trim().split(/\s+/).slice(0, 2);
    return parts.map((part) => part[0]?.toUpperCase() || '').join('') || 'AB';
  }, [member?.name]);

  return (
    <div className='bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
      <div className='w-28 h-28 rounded-full overflow-hidden border border-gray-200 bg-gray-100 mb-4'>
        {profilePicUrl ? (
          <img
            src={profilePicUrl}
            alt={member.name}
            className='w-full h-full object-cover'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-ap-darkblue text-white text-2xl font-semibold'>
            {initials}
          </div>
        )}
      </div>
      <h3 className='text-lg font-semibold text-gray-900 leading-tight'>
        {member.name}
      </h3>
      <p className='text-sm text-gray-700 mt-1'>{member.company}</p>
      {member.title ? (
        <p className='text-sm text-gray-500 mt-0.5'>{member.title}</p>
      ) : null}
    </div>
  );
};

const Index = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sortedBoardMembers = useMemo(() => {
    const getLastName = (fullName = '') => {
      const parts = fullName.trim().split(/\s+/).filter(Boolean);
      return parts.length ? parts[parts.length - 1].toLowerCase() : '';
    };

    return [...boardMembers].sort((a, b) => {
      const lastNameCompare = getLastName(a?.name).localeCompare(
        getLastName(b?.name)
      );
      if (lastNameCompare !== 0) return lastNameCompare;
      return (a?.name || '').localeCompare(b?.name || '');
    });
  }, [boardMembers]);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const members = await getBoardMembers();
        setBoardMembers(Array.isArray(members) ? members : []);
      } catch (err) {
        console.error('Failed to load advisory board members:', err);
        setBoardMembers([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBoardMembers();
  }, []);

  return (
    <div className='py-16 max-w-7xl mx-auto'>
      <Head>
        <title>APS Advisory Board</title>
        <meta
          name='description'
          content='Meet the APS Advisory Board members'
        />
      </Head>
      <h1 className='text-4xl tracking-tight uppercase font-medium font-oswald mb-4'>
        APS Advisory Board
      </h1>
      <p className='text-gray-600 mb-12'>
        Industry leaders helping shape Automotive Packaging Summit.
      </p>

      {isLoading ? (
        <div className='text-gray-500'>Loading board members...</div>
      ) : sortedBoardMembers.length === 0 ? (
        <div className='text-gray-500'>No board members available yet.</div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
          {sortedBoardMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
