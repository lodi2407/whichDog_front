import React from 'react';
import { DogCard } from '../components/dog-card';
import { Header } from '../components/header';

export const FindMyDog = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto '>
        {/* <div className='grid grid-cols-12 mr-52 ml-52 mt-8'> */}
        <div className='grid grid-cols-12 mx-10 mt-4'>
          <div className='col-span-3 border border-white mr-8'>Filters</div>
          <div className='col-span-9 flex-cards flex flex-row flex-wrap justify-between'>
            <DogCard />
          </div>
        </div>
      </div>
    </>
  );
};
