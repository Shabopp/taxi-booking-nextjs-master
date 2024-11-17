import React, { useContext, useEffect, useState } from 'react';
import AutocompleteAddress from './AutocompleteAddress';
import Cars from './Cars';
import Cards from './Cards';
import DistanceTime from './DistanceTime';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';


function Booking() {
  const [screenHeight, setScreenHeight] = useState(0);
  const {carAmount,setCarAmount}=useContext(SelectedCarAmountContext)
  const router:any=useRouter();

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight * 0.72);
    }
  }, []);

  return (
    <div className='p-5 '>
      <h2 className='text-[20px] font-semibold'>Booking</h2>
      <div className='border-[1px] p-5 rounded-md' style={{ height: screenHeight }}>
        <AutocompleteAddress />
        <Cars/>
        <Cards/>
        <button className={`w-full bg-yellow-400 p-1 rounded-md mt-4 ${!carAmount?'bg-gray-200':null}`}
        onClick={()=>router.push('/payment')}
        >Book</button>
      </div>
    </div>
  );
}

export default Booking;
