import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import CarsList from '@/data/CarsList';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

const Cars: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const { directionData } = useContext(DirectionDataContext);
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);

  const getCost = (charges: number) =>  {
    if (!directionData?.routes?.[0]?.distance) return '0.00';
    return (charges * directionData.routes[0].distance * 0.000621371192).toFixed(2);
  };

  return (
    <div className='mt-3'>
      <h2 className='font-medium text-[14px]'>Select Car</h2>
      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
        {CarsList.map((item, index) => (
          <div
            key={index}
            className={`m-2 p-2 border-[1px] rounded-md hover:border-yellow-400 cursor-pointer ${
              index === selectedCar ? 'border-yellow-400 border-[2px]' : ''
            }`}
            onClick={() => {
              setSelectedCar(index);
              setCarAmount(getCost(item.charges));
            }}
          >
            <Image src={item.image} alt={item.name} width={75} height={90} className='w-full' />
            <h2 className='text-[10px] text-gray-500'>
              {item.name}
              {directionData?.routes && (
                <span className='float-right font-medium text-black'>{getCost(item.charges)} $</span>
              )}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
