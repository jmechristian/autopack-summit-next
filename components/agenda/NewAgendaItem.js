import React from 'react';
import Image from 'next/image';
import { classNames } from '../../util/helpers';
import { formatAgendaTimeRange } from '../../util/agendaTime';

const NewAgendaItem = ({
  title,
  description,
  startTime,
  endTime,
  speakers,
  location,
  sponsors,
  type,
}) => {
  const timeLabel = formatAgendaTimeRange(startTime, endTime);

  return (
    <div
      className={classNames(
        type === 'session' ? 'bg-amber-300' : 'bg-white',
        'w-full border-4 border-black rounded-2xl'
      )}
    >
      <div className='w-3xl py-3 px-6 flex flex-col gap-2 lg:grid lg:gap-6 lg:grid-cols-[10.5rem,_1fr,_1fr] lg:items-center'>
        <div className='font-bold tracking-tight text-sm lg:text-base leading-snug'>
          {timeLabel || 'TBD'}
        </div>
        <div className='font-bold text-lg leading-tight'>{title}</div>
        <div className='font-medium text-neutral-600 leading-tight' dangerouslySetInnerHTML={{ __html: description }} />
        <div className='font-medium text-neutral-600 leading-tight'>{location}</div>
      </div>
    </div>
  );
};

export default NewAgendaItem;
