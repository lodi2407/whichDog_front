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
        <div
          key={dog.Id}
          className='max-w-xs mb-5 bg-white text-black p-2 rounded-lg shadow-md shadow-gray-400'
        >
          <div className='text-xl font-bold text-center h-14'>{dog.breed}</div>
          <img
            src={`../src/assets/dogs-content/${dog.breed.replace(/ /g, '').toLowerCase()}.jpg`}
          />
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
      ))}
    </>
  );
};
