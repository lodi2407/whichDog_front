import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const HomeContent = () => {
  const navigate = useNavigate();

  //https://codepen.io/lodi2407/pen/rNrKbwP

  return (
    <div className=''>
      <div id='homepage' className='grid grid-cols-3 grid-rows-3'>
        <div className='ml-auto'>
          <img src='../src/assets/home2.jpg' className='circle c1 hovicon effect-8' />
          <div className='test absolute'></div>
        </div>

        <img src='../src/assets/home3.jpg' className='circle c4 mr-auto ml-auto' />
        <div>
          <img src='../src/assets/home4.jpg' className='circle c3' />
          <div className='test1 absolute'></div>
        </div>

        <img src='../src/assets/home5.jpg' className='circle c2 ml-16' />
        <div className='text-center self-center'>
          <button
            className='border rounded-full p-10 text-lg font-bold bg-white text-black'
            onClick={() => navigate('/dogs')}
          >
            Find My Dog !
          </button>
        </div>
        <img src='../src/assets/home6.jpg' className='circle c1 ml-auto mr-auto' />

        <div className='ml-40'>
          <img src='../src/assets/home7.jpg' className='circle c3' />
          <div className='test2 absolute'></div>
        </div>

        <img src='../src/assets/home8.jpg' className='circle c1' />
        <div>
          <img src='../src/assets/home9.jpg' className='circle c4' />
          <div className='test3 absolute'></div>
        </div>

        {/*  <div className='-z-10 row-start-2'>cc</div> */}
        {/*       <div id='home' className='text-center text-4xl pt-5'>
        <h2>Which Dog is made for you ? </h2>
        <p>Try our test to know it</p>
      </div>
      <div className='text-center pt-5 pb-5'>
        <h3>Let us help you find your best match !</h3>
        <p>
          A dog brings a lot of things in the house but he has needs too. Regarding your place, time
          to care and cuteness you want, not every dog is made for you.
        </p>
        <button
          className='border rounded-md p-4 bg-black text-white'
          onClick={() => navigate('/dogs')}
        >
          Find My Dog !
        </button>
      </div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1' id='img-left'></div>
        <div>cc</div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <p>
            If you create an account, you could save your favourites dogs, share pictures and
            stories of your own dogs, visit the profile of other users and see their dogs Come and
            join us !
          </p>
        </div>
        <div id='img-right'></div>
      </div> */}
      </div>
    </div>
  );
};
