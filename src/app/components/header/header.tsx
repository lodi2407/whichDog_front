import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='grid grid-cols-12 justify-between p-4'>
      <div className='col-span-10'>
        <h1 className='text-4xl'>
          <button onClick={() => navigate('/')}>Which Dog ?</button>
        </h1>
      </div>
      <nav className='col-span-2'>
        <ul className='flex flex-row justify-around'>
          <li>
            <button onClick={() => navigate('/dogs')}>Dogs</button>
          </li>
          <li>
            <button onClick={() => navigate('/aboutUs')}>About Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
