import { Icon } from '@blueprintjs/core';
import React from 'react';

interface charachteristicProps {
  title: string;
}

export const CharacteristicHeader = ({ title }: charachteristicProps) => {
  return (
    <div className='flex justify-between w-64 text-black text-2xl font-bold bg-[#F5CB5C] rounded-xl mb-2 pl-2'>
      <p>{title}</p>
      <p>
        <Icon icon='dot' />
      </p>
    </div>
  );
};
