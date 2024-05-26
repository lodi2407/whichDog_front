import React, { useEffect, useState } from 'react';
import { AllDogs } from '../../api/dogs';
import { Dog } from '../types/type-dog';
import { Button, Dialog, DialogBody, DialogFooter, Icon } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

export const DogCard = () => {
  const naviguate = useNavigate();
  const [dogs, setDogs] = useState<Dog[]>();
  const [isDogDialogOpen, setIsDogDialogOpen] = useState<boolean>(false);
  const [selectedDog, setSelectedDog] = useState<Dog>();

  useEffect(() => {
    try {
      AllDogs().then((data) => setDogs(data));
    } catch (err) {
      console.log('Error while fetching dogs', err);
    }
  }, []);

  const handleDogDialog = () => {
    setIsDogDialogOpen(!isDogDialogOpen);
  };

  const handleDogClicked = (dog: Dog) => {
    handleDogDialog();
    setSelectedDog(dog);
  };

  return (
    <>
      {dogs?.map((dog: Dog) => (
        <div key={dog.Id} className='max-w-xs mb-5 bg-white text-black rounded-lg'>
          <img
            src={`../src/assets/dogs-content/${dog.breed.replace(/ /g, '').toLowerCase()}.jpg`}
            className='w-full'
          />
          <div className='p-2'>
            <div className='text-xl font-bold text-center h-14'>
              <Button onClick={() => naviguate('/dog/' + dog.Id)}>{dog.breed}</Button>
            </div>
            <div>
              <span className='font-bold'>Category : </span>
              {dog.category}
            </div>
            <div className='flex justify-between'>
              <p className='truncate'>
                <span className='font-bold'>Description : </span>
                {dog.description}
              </p>
              <Icon icon='add' className='cursor-pointer' onClick={() => handleDogClicked(dog)} />
            </div>
          </div>
        </div>
      ))}

      <Dialog
        isOpen={isDogDialogOpen}
        onClose={handleDogDialog}
        canOutsideClickClose={true}
        canEscapeKeyClose={true}
        className='w-1/2'
      >
        <DialogBody>
          <p className='font-bold'>Description</p>
          <br />
          <p className='text-justify'>{selectedDog?.description}</p>
        </DialogBody>
        <DialogFooter
          actions={<Button intent='primary' text='Close' onClick={handleDogDialog} />}
        />
      </Dialog>
    </>
  );
};
