import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { GetDog } from '../api/dogs';
import { Dog } from '../components/types/type-dog';
import { useNavigate, useParams } from 'react-router-dom';
import { Characteristic } from '../components/dog-page/characteristic';
import { Icon } from '@blueprintjs/core';

export const DogPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [dog, setDog] = useState<Dog>();

  useEffect(() => {
    try {
      GetDog(id ? id : '').then((data) => setDog(data));
    } catch (err) {
      console.log('Error while fetching dogs', err);
    }
  }, []);

  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <div className='h-3'>
          <p
            className='text-white text-center cursor-pointer hover:text-[#F5CB5C]'
            onClick={() => navigate('/dogs')}
          >
            <Icon icon='chevron-left' />
            Go Back
          </p>
        </div>

        {/* left column */}
        <div className='w-3/4 mx-auto text-white flex flex-wrap justify-around m-8'>
          <div>
            <Characteristic
              title='Breed'
              characteristic={dog?.breed}
              suppClass='!mb-4 !text-2xl text-bold text-center'
            />
            <Characteristic title='Temperament' characteristic={dog?.temperament} />
            <Characteristic
              title='Energy'
              characteristic={dog?.energyLevelCategory}
              value={dog?.energyLevelValue}
            />
            <Characteristic
              title='Trainability'
              characteristic={dog?.trainabilityCategory}
              value={dog?.trainabilityValue}
            />
            <Characteristic title='Expectancy' />
            <p className='mb-2 pl-2'>
              {dog?.minExpectancy} - {dog?.maxExpectancy} years
            </p>

            {/* image */}
          </div>
          <div className='h-1/2 p-2 rounded-3xl border-8 border-double border-[#F5CB5C]'>
            <img
              src={`../src/assets/dogs-content/${dog?.breed.replace(/ /g, '').toLowerCase()}.jpg`}
              className='w-96 rounded-xl'
            />
          </div>

          {/* right column */}
          <div>
            <Characteristic
              title='Category'
              characteristic={dog?.category}
              suppClass='!mb-4 !text-2xl text-bold text-center'
            />
            <Characteristic
              title='Grooming'
              characteristic={dog?.groomingFrequencyCategory}
              value={dog?.groomingFrequencyValue}
            />
            <Characteristic title='Height' />
            <p>
              {dog?.minHeight && Math.round(dog.minHeight)} -
              {dog?.maxHeight && Math.round(dog.maxHeight)} cm
            </p>
            <Characteristic title='Weight' />
            <p>
              {dog?.minWeight && Math.round(dog.minWeight)} -
              {dog?.maxWeight && Math.round(dog.maxWeight)} kg
            </p>
            <Characteristic
              title='Shedding'
              characteristic={dog?.sheddingCategory}
              value={dog?.sheddingValue}
            />
            <Characteristic
              title='Demeanor'
              characteristic={dog?.demeanorCategory}
              value={dog?.sheddingValue}
            />
          </div>
        </div>

        <div className='w-3/4 mx-auto text-white text-justify'>
          <p className='text-3xl text-center text-[#F5CB5C] mb-4'>Description</p>
          <p className='text-lg'>{dog?.description}</p>
        </div>
      </div>
    </>
  );
};
