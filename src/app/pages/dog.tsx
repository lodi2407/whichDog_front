import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { GetDog } from '../api/dogs';
import { Dog } from '../components/types/type-dog';
import { useParams } from 'react-router-dom';

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
      <div className='container mx-auto '>
        <p className='text-white'>Dog</p>
        <p className='text-white'>{dog && dog?.breed}</p>
      </div>
    </>
  );
};
