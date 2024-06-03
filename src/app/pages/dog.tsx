import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { GetDog } from '../api/dogs';
import { Dog } from '../components/types/type-dog';
import { useParams } from 'react-router-dom';
import { CharacteristicHeader } from '../components/dog-page/characteristic-header';

export const DogPage = () => {
  const { id } = useParams();

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
        <div className='text-white flex justify-around m-8'>
          <div>
            <CharacteristicHeader>
              <p>Breed</p>
            </CharacteristicHeader>
            <p>{dog?.breed}</p>
          </div>
          <div className='p-2 rounded-3xl border-8 border-double border-[#F5CB5C]'>
            <img
              src={`../src/assets/dogs-content/${dog?.breed.replace(/ /g, '').toLowerCase()}.jpg`}
              className='w-96 rounded-xl'
            />
          </div>
          <div>
            <CharacteristicHeader>
              <p>Temperament</p>
            </CharacteristicHeader>
            <p>{dog?.temperament}</p>
          </div>
        </div>
      </div>
    </>
  );
};
