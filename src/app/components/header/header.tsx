import React, { useEffect, useState } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';
import { Dog } from '../types/type-dog';
import { AllDogs } from '../../api/dogs';
import { ItemPredicate, ItemRenderer, Suggest } from '@blueprintjs/select';

export const Header = () => {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState<Dog[]>();

  useEffect(() => {
    try {
      AllDogs().then((data) => setDogs(data));
    } catch (err) {
      console.log('Error while fetching dogs', err);
    }
  }, []);

  const renderDog: ItemRenderer<Dog> = (dog, { modifiers }) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        key={dog.Id}
        text={`${dog.breed}`}
        onClick={() => {
          navigate('/dog/' + dog.Id);
        }}
        roleStructure='listoption'
      />
    );
  };

  /* TODO: fix filtering */
  const filterDog: ItemPredicate<Dog> = (query, dog, _index, exactMatch) => {
    const normalizedTitle = dog.breed.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    if (exactMatch) {
      return normalizedTitle === normalizedQuery;
    } else {
      return `${dog.breed}`.indexOf(normalizedQuery) >= 0;
    }
  };

  return (
    <header className='grid grid-cols-12 justify-between p-4'>
      <div className='flex justify-between col-span-10'>
        <h1 className='text-4xl'>
          <button onClick={() => navigate('/')}>Which Dog ?</button>
        </h1>
        <div className='text-white w-96'>
          <Suggest<Dog>
            items={dogs || []}
            itemRenderer={renderDog}
            inputValueRenderer={undefined}
            itemPredicate={filterDog}
            noResults={<MenuItem disabled={true} text='No results.' roleStructure='listoption' />}
            popoverProps={{
              minimal: true,
              matchTargetWidth: true,
              popoverClassName: 'suggest',
            }}
          />
        </div>
        <div className='text-white'></div>
      </div>
      <nav className='col-span-2 text-white'>
        <ul className='flex flex-row justify-around'>
          <li className='hover:text-[#F5CB5C]'>
            <button onClick={() => navigate('/dogs')}>Dogs</button>
          </li>
          <li className='hover:text-[#F5CB5C]'>
            <button onClick={() => navigate('/aboutUs')}>About Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
