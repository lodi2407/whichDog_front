import { Icon } from '@blueprintjs/core';
import React from 'react';

interface charachteristicProps {
  title: string;
  characteristic?: string;
  value?: number;
  suppText?: string;
  suppClass?: string;
}

export const Characteristic = ({
  title,
  characteristic,
  value,
  suppText,
  suppClass,
}: charachteristicProps) => {
  const circles = (number: number) => {
    const totalCircles = 5;
    const thresholds = [0.2, 0.4, 0.6, 0.8, 1];
    const filledCircles = thresholds.findIndex((threshold) => number <= threshold) + 1;

    return (
      <>
        {Array.from({ length: totalCircles }, (_, index) => (
          <Icon
            key={index}
            icon='full-circle'
            size={15}
            className='pr-1'
            color={index < filledCircles ? '#F5CB5C' : undefined}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className='flex justify-between w-64 text-black text-2xl font-bold bg-[#F5CB5C] rounded-xl mb-2 pl-2'>
        <p>{title}</p>
        <p>
          <Icon icon='dot' />
        </p>
      </div>
      <p className={suppClass + ' text-lg mb-2 pl-2'}>{characteristic}</p>
      <p className='mb-4 pl-2'>
        {value && circles(value)} {suppText}
      </p>
    </>
  );
};
