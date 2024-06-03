import React from 'react';

interface charachteristicProps {
  title: string;
}

export const CharacteristicHeader = ({ title }: charachteristicProps) => {
  console.log(title);
  return (
    <div className='text-center'>
      <p className='w-80 text-black text-3xl font-bold bg-[#F5CB5C] rounded-xl mb-2'>{title}</p>
    </div>
  );
};
