import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeContent = () => {
  const navigate = useNavigate();

  //https://codepen.io/lodi2407/pen/rNrKbwP

  return (
    <div className='mx-auto'>
      <div id='homepage' className='grid grid-cols-3 grid-rows-3'>
        <div className='dog1 pl-36'>
          <img src='../src/assets/home2.jpg' className='circle c1' />
          <div className='test absolute'></div>
        </div>

        <div className='dog2'>
          <img src='../src/assets/home3.jpg' className='circle c4 ml-24' />
        </div>

        <div className='dog3 pl-12'>
          <img src='../src/assets/home4.jpg' className='circle c3' />
          <div className='test1 absolute'></div>
        </div>

        <div className='dog4'>
          <img src='../src/assets/home5.jpg' className='circle c2 ml-24' />
        </div>

        <div className='find-my-dog-box flex justify-center relative'>
          <button
            className='find-my-dog-btn border rounded-full p-10 text-lg font-bold bg-white text-black mt-20 mb-20'
            onClick={() => navigate('/dogs')}
          >
            Find My Dog !
          </button>
        </div>

        <div className='dog5'>
          <img src='../src/assets/home6.jpg' className='circle c1 ml-16 mr-auto' />
        </div>

        <div className='dog6 ml-40'>
          <img src='../src/assets/home7.jpg' className='circle c3' />
          <div className='test2 absolute'></div>
        </div>

        <div className='dog7'>
          <img src='../src/assets/home8.jpg' className='circle c1' />
        </div>

        <div className='dog8'>
          <img src='../src/assets/home9.jpg' className='circle c4' />
        </div>
      </div>
    </div>
  );
};
