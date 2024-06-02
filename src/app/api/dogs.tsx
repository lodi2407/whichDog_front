import React from 'react';
import { Dog } from '../components/types/type-dog';

export const AllDogs = async (): Promise<Dog[]> => {
  const resp = await fetch('/api/dogs', {
    method: 'GET',
  });
  if (!resp.ok) {
    console.log('Could not fetch all dogs');
  }

  return await resp.json();
};

export const GetDog = async (id: string): Promise<Dog> => {
  const resp = await fetch('/api/dogs/' + id, {
    method: 'GET',
  });
  if (!resp.ok) {
    console.log('Could not fetch dog');
  }

  return await resp.json();
};
