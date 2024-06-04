import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { GetDog } from '../api/dogs';
import { Dog } from '../components/types/type-dog';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacteristicHeader } from '../components/dog-page/characteristic-header';
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

        <div className='w-3/4 mx-auto text-white flex flex-wrap justify-around m-8'>
          <div>
            <CharacteristicHeader title='Breed' />
            <p className='mb-4 text-2xl text-center'>{dog?.breed}</p>
            <CharacteristicHeader title='Popularity' />
            <p className='mb-2'>{dog?.popularity}</p>
            <CharacteristicHeader title='Temperament' />
            <p className='mb-2'>{dog?.temperament}</p>
            <CharacteristicHeader title='Energy' />
            <p>{dog?.energyLevelCategory}</p>
            <p className='mb-2'>{dog?.energyLevelValue}</p>
            <CharacteristicHeader title='Trainability' />
            <p>{dog?.trainabilityCategory}</p>
            <p className='mb-2'>{dog?.trainabilityValue}</p>
            <CharacteristicHeader title='Expectancy' />
            <p>{dog?.minExpectancy}</p>
            <p className='mb-2'>{dog?.maxExpectancy}</p>
          </div>
          <div className='h-1/2 p-2 rounded-3xl border-8 border-double border-[#F5CB5C]'>
            <img
              src={`../src/assets/dogs-content/${dog?.breed.replace(/ /g, '').toLowerCase()}.jpg`}
              className='w-96 rounded-xl'
            />
          </div>
          <div>
            <CharacteristicHeader title='Category' />
            <p className='mb-4 text-2xl text-center'>{dog?.category}</p>
            <CharacteristicHeader title='Grooming' />
            <p>{dog?.groomingFrequencyCategory}</p>
            <p className='mb-2'>{dog?.groomingFrequencyValue}</p>
            <CharacteristicHeader title='Height' />
            <p>{dog?.minHeight}</p>
            <p className='mb-2'>{dog?.maxHeight}</p>
            <CharacteristicHeader title='Weight' />
            <p>{dog?.minWeight}</p>
            <p className='mb-2'>{dog?.maxWeight}</p>
            <CharacteristicHeader title='Shedding' />
            <p>{dog?.sheddingCategory}</p>
            <p className='mb-2'>{dog?.sheddingValue}</p>
            <CharacteristicHeader title='Demeanor' />
            <p>{dog?.demeanorCategory}</p>
            <p className='mb-2'>{dog?.demeanorValue}</p>
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
