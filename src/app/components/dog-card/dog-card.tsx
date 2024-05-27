import React, { useEffect, useState } from 'react';
import { AllDogs } from '../../api/dogs';
import { Dog } from '../types/type-dog';
import { Button, Card, Dialog, DialogBody, DialogFooter, Icon } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

export const DogsCards = () => {
  const navigate = useNavigate();
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
        <div
          key={dog.Id}
          className='card max-w-xs mb-5 bg-white text-black rounded-xl border-gray-800 cursor-pointer'
          onClick={() => navigate('/dog/' + dog.Id)}
        >
          <img
            src={`../src/assets/dogs-content/${dog.breed.replace(/ /g, '').toLowerCase()}.jpg`}
            className='w-full rounded-xl'
          />
          <div className='p-4'>
            <div className='font-semibold text-center h-14 mb-5'>
              <Button
                className='!text-white !bg-black w-full text-center text-xl bp5-button bp5-minimal border-solid border-black border-2 rounded-full'
                onClick={() => navigate('/dog/' + dog.Id)}
              >
                {dog.breed}
              </Button>
            </div>
            <div>
              <span className='font-bold'>Category : </span>
              {dog.category}
            </div>
            <div className='flex justify-between pt-1'>
              <p className='truncate'>
                <span className='font-bold'>Description : </span>
                {dog.description}
              </p>
              {/* <Icon icon='add' className='cursor-pointer' onClick={() => handleDogClicked(dog)} /> */}
            </div>
          </div>
        </div>
      ))}

      {/* <Dialog
        isOpen={isDogDialogOpen}
        onClose={handleDogDialog}
        canOutsideClickClose={true}
        canEscapeKeyClose={true}
        className='bp5-dark modern-dialog w-1/2'
      >
        <DialogBody>
          <p className='modern-dialog-title'>Description</p>
          <br />
          <p className='modern-dialog-description text-justify'>{selectedDog?.description}</p>
        </DialogBody>
        <DialogFooter
          actions={
            <Button className='modern-dialog-button' text='Close' onClick={handleDogDialog} />
          }
        />
      </Dialog> */}
    </>
  );
};
