import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeContent = () => {
  const navigate = useNavigate();

  //https://codepen.io/lodi2407/pen/rNrKbwP

  return (
    <div className='mx-auto'>
      <div className='grid grid-cols-3 grid-rows-3'>
        <div className='dog1 pl-20 md:pl-28 lg:pl-36'>
          <img
            src='../src/assets/home2.jpg'
            className='home-img-dog circle c1 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
          <div className='test absolute'></div>
        </div>

        <div className='dog2'>
          <img
            src='../src/assets/home3.jpg'
            className='home-img-dog circle c4 sm:ml-24 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
        </div>

        <div className='dog3 pl-12'>
          <img
            src='../src/assets/home4.jpg'
            className='home-img-dog circle c3 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
          <div className='test1 absolute'></div>
        </div>

        <div className='dog4'>
          <img
            src='../src/assets/home5.jpg'
            className='home-img-dog circle c2 sm:ml-24 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
        </div>

        <div className='find-my-dog-box flex justify-center relative'>
          {/* <div className='bg-yellow-400 h-2'> cc</div> */}
          <button
            className='find-my-dog-btn border rounded-full text-xs sm:text-lg font-bold bg-white text-black sm:h-20 p-1 sm:p-5 m-auto'
            onClick={() => navigate('/dogs')}
          >
            Find My Dog !
          </button>
          {/* <div className='bg-yellow-400'> cc</div> */}
        </div>

        <div className='dog5'>
          <img
            src='../src/assets/home6.jpg'
            className='home-img-dog circle c1 sm:ml-16 mr-auto h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
        </div>

        <div className='dog6 ml-20 md:ml-30 lg:ml-40'>
          <img
            src='../src/assets/home7.jpg'
            className='home-img-dog circle c3 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
          <div className='test2 absolute'></div>
        </div>

        <div className='dog7'>
          <img
            src='../src/assets/home8.jpg'
            className='home-img-dog circle c1 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
        </div>

        <div className='dog8'>
          <img
            src='../src/assets/home9.jpg'
            className='home-img-dog circle c4 h-20 w-20 sm:h-40 sm:w-36 md:h-48 md:w-48 lg:h-48 xl:h-72 xl:w-96'
          />
        </div>
      </div>
    </div>
  );
};
