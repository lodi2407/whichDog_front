import React from 'react';

export const CharacteristicHeader = ({ children }: any) => {
  return (
    <div className='text-center'>
      <p className='w-80 text-black text-3xl font-bold bg-[#F5CB5C] rounded-xl mb-2'>{children}</p>
    </div>
  );
};
