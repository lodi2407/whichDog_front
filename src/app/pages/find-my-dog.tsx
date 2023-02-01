import React, { useEffect, useState } from 'react';
import { AllDogs } from '../api/dogs';
import { Header } from '../components/header';
import { Dog } from '../components/types/type-dog';

export const FindMyDog = () => {
  const [dogs, setDogs] = useState<Dog[]>();

  useEffect(() => {
    try {
      AllDogs().then((data) => setDogs(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Header />
      {dogs?.map((dog: Dog) => (
        <div key={dog.Id}>{dog.breed}</div>
      ))}
    </>
  );
};
