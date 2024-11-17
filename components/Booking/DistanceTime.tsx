import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react';

const DistanceTime: React.FC = () => {
  const { directionData } = useContext(DirectionDataContext);

  if (!directionData?.routes || directionData.routes.length === 0) {
    return null; // or you could return a fallback UI if preferred
  }

  const distance = directionData.routes[0].distance;
  const duration = directionData.routes[0].duration;

  return (
    <div className='bg-yellow-500 p-3'>
      <h2 className='text-yellow-100 opacity-80 text-[15px]'>
        Distance:
        <span className='font-bold mr-3 text-black'>
          {(distance * 0.000621371192).toFixed(2)} Miles
        </span>
        Duration:
        <span className='font-bold text-black'>
          {(duration / 60).toFixed(2)} Min
        </span>
      </h2>
    </div>
  );
};

export default DistanceTime;