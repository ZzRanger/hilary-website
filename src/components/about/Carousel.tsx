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
    <div className="w-full relative rounded-md overflow-hidden h-full shadow-2xl">
      {index !== 0 && (
        <ChevronIcon
          className="absolute top-[calc(50%-15px)] left-10 text-white rotate-180 z-20 cursor-pointer shadow-2xl"
          onClick={() => setIndex((index - 1) % 3)}
        />
      )}
      {index !== 2 && (
        <ChevronIcon
          className="absolute top-[calc(50%-15px)] text-white right-10 z-20 cursor-pointer shadow-2xl"
          onClick={() => setIndex((index + 1) % 3)}
        />
      )}

      <div className="absolute bottom-[5%] w-14 right-[calc(50%-28px)] z-20 flex flex-row justify-around">
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
        className={`flex flex-row w-full ${indexArray[index]} z-0 duration-300 ease-in-out h-full`}
      >
        <div className="relative flex-shrink-0 w-fit box-border rounded-md">
          <Image
            src={Tokyo}
            priority
            alt=""
            className={`${
              index === 0 ? 'z-10' : 'z-0'
            } duration-500 object-cover h-full`}
          />
          <Caption
            caption="View of Tokyo 🇯🇵 Top of Tokyo Government Tower"
            location="Tokyo, Japan"
          />
        </div>
        <div className="relative flex-shrink-0 w-fit box-border rounded-md">
          <Image
            src={Singapore}
            alt=""
            className={`${
              index === 1 ? 'z-10' : 'z-0'
            } duration-500 object-cover h-full`}
          />
          <Caption
            caption="View of Singapore's skyline at night 🇸🇬 🌌"
            location="Singapore, Singapore"
          />
        </div>
        <div className="relative flex-shrink-0 w-fit box-border rounded-md">
          <Image
            src={Austria}
            alt=""
            className={`${
              index === 2 ? 'z-10' : 'z-0'
            }  duration-500 object-cover h-full`}
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
  <div className="text-black bg-[#CCC9C8]/90 lg:bg-inherit lg:bg-glass-2 lg:backdrop-blur-xl shadow-2xl rounded-[20px] dark:text-black z-50 absolute sm:bottom-[15%] sm:left-[calc(50%-140px)] bottom-[15%] left-[calc(50%-140px)] lg:top-[calc(50%-89px)] lg:left-[104px] flex flex-col items-center w-[280px] h-[178px] justify-evenly">
    <div className="text-center">Info</div>
    <hr className="bg-[#828282] h-[1px] w-full border-0" />
    <div className="w-60 text-center py-6">{caption}</div>
    <hr className="bg-[#828282] h-[1px] w-full border-0" />
    <div>{location}</div>
    <hr />
  </div>
);
