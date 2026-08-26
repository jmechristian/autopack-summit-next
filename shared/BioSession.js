import React from 'react';
import { formatAgendaTimeRange } from '../util/agendaTime';

const BioSession = ({ startTime, endTime, title, location }) => {
  const timeLabel = formatAgendaTimeRange(startTime, endTime);

  return (
    <div className='flex flex-col py-6 gap-0.5'>
      <div>{timeLabel || 'TBD'}</div>
      <div className='text-lg font-bold leading-snug'>{title}</div>
      <div className='text-gray-600'>{location}</div>
    </div>
  );
};

export default BioSession;
