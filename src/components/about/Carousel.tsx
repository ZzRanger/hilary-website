'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Tokyo from '@public/about/tokyo.png';
import Austria from '@public/about/austria.png';
import Singapore from '@public/about/singapore.png';
import ChevronIcon from '../svg/ChevronIcon';
import EllipseIcon from '../svg/EllipseIcon';

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const indexArray = ['', '-translate-x-full', '-translate-x-[200%]'];
  return (
    <div className="w-[1214px] relative rounded-md overflow-hidden">
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
        className={`flex flex-row w-full  ${indexArray[index]} z-0 duration-300 ease-in-out`}
      >
        <div className="relative flex-shrink-0 w-fit h-fit box-border rounded-md">
          <Image
            src={Tokyo}
            priority
            alt=""
            className={`${index === 0 ? 'z-10' : 'z-0'}  duration-500`}
          />
          <Caption
            caption="View of Tokyo 🇯🇵 Top of Tokyo Government Tower"
            location="Tokyo, Japan"
          />
        </div>
        <div className="relative flex-shrink-0 w-fit h-fit box-border rounded-md">
          <Image
            src={Singapore}
            alt=""
            className={`${index === 1 ? 'z-10' : 'z-0'} duration-500`}
          />
          <Caption
            caption="View of Singapore's skyline at night 🇸🇬 🌌"
            location="Singapore, Singapore"
          />
        </div>
        <div className="relative flex-shrink-0 w-fit h-fit box-border rounded-md">
          <Image
            src={Austria}
            alt=""
            className={`${index === 2 ? 'z-10' : 'z-0'}  duration-500`}
          />
          <Caption
            caption="🇦🇹 Vienna  at sunset  🌅"
            location="Vienna, Austria"
          />
        </div>
      </div>
    </div>
  );
}

const Caption = ({
  caption,
  location,
}: {
  caption: string;
  location: string;
}) => (
  <div
    className="absolute top-[calc(50%-89px)] left-[104px] flex flex-col items-center w-[280px] h-[178px] justify-evenly"
    style={{
      borderRadius: '20px',
      background:
        'radial-gradient(220.77% 112.20% at 42.83% 0.00%, #CCC8C8 0%, rgba(255, 255, 255, 0.00) 100%)',
      boxShadow: '0px 4px 19px 3px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(21px)',
    }}
  >
    <div className="text-center">Info</div>
    <hr className="bg-[#828282] h-[1px] w-full border-0" />
    <div className="w-60 text-center py-6">{caption}</div>
    <hr className="bg-[#828282] h-[1px] w-full border-0" />
    <div>{location}</div>
    <hr />
  </div>
);
