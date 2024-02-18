import React, { useEffect, useState } from 'react';
import { AllDogs } from '../../api/dogs';
import { Dog } from '../types/type-dog';

export const DogCard = () => {
  const [dogs, setDogs] = useState<Dog[]>();

  useEffect(() => {
    try {
      AllDogs().then((data) => setDogs(data));
    } catch (err) {
      console.log('Error while fetching dogs', err);
    }
  }, []);

  return (
    <>
      {dogs?.map((dog: Dog) => (
        <div key={dog.Id} className='max-w-xs mb-5 bg-white text-black rounded-lg'>
          <img
            src={`../src/assets/dogs-content/${dog.breed.replace(/ /g, '').toLowerCase()}.jpg`}
            className='w-full'
          />
          <div className='p-2'>
            <div className='text-xl font-bold text-center h-14'>{dog.breed}</div>
            <div>
              <span className='font-bold'>Category : </span>
              {dog.category}
            </div>
            <div className='truncate'>
              <span className='font-bold'>Description : </span>
              {dog.description}...
            </div>
            <div>{}</div>
          </div>
        </div>
      ))}
    </>
  );
};
