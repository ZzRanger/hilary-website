'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Tokyo from '../../public/tokyo.png';
import Japan from '../../public/japan.png';
import Singapore from '../../public/singapore.png';
import ChevronIcon from './svg/ChevronIcon';
import EllipseIcon from './svg/EllipseIcon';

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const indexArray = ['', '-translate-x-full', '-translate-x-[200%]'];
  return (
    <div className="w-[90vw] relative rounded-md overflow-hidden">
      {index !== 0 && (
        <ChevronIcon
          className="absolute top-[calc(50%-15px)] left-10 text-white rotate-180 z-20 cursor-pointer"
          onClick={() => setIndex((index - 1) % 3)}
        />
      )}
      {index !== 2 && (
        <ChevronIcon
          className="absolute top-[calc(50%-15px)] text-white right-10 z-20 cursor-pointer"
          onClick={() => setIndex((index + 1) % 3)}
        />
      )}

      <div className="absolute bottom-[15%] w-14 right-[calc(50%-28px)] z-20 flex flex-row justify-around">
        <EllipseIcon
          onClick={() => setIndex(0)}
          className={`cursor-pointer ${
            index === 0 ? 'text-white' : 'text-[#D9D9D9]'
          }`}
        />
        <EllipseIcon
          onClick={() => setIndex(1)}
          className={`cursor-pointer ${
            index === 1 ? 'text-white' : 'text-[#D9D9D9]'
          }`}
        />
        <EllipseIcon
          onClick={() => setIndex(2)}
          className={`cursor-pointer ${
            index === 2 ? 'text-white' : 'text-[#D9D9D9]'
          }`}
        />
      </div>
      <div
        className={`flex flex-row  ${indexArray[index]} z-0 duration-300 ease-in-out`}
      >
        <Image
          src={Tokyo}
          priority
          alt=""
          className={`${
            index === 0 ? 'z-10' : 'z-0'
          } scale-[1.01] duration-500`}
        />
        <Image
          src={Japan}
          alt=""
          className={`${
            index === 1 ? 'z-10' : 'z-0'
          } scale-[1.01] duration-500`}
        />
        <Image
          src={Singapore}
          alt=""
          className={`${
            index === 2 ? 'z-10' : 'z-0'
          } scale-[1.01] duration-500`}
        />
      </div>
    </div>
  );
}
