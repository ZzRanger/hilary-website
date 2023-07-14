'use client';

import React, { useMemo, useState } from 'react';

import ChevronIcon from '@/components/svg/ChevronIcon';
import EllipseIcon from '@/components/svg/EllipseIcon';
import { IndicatorType } from '@/app/about/page';
import Text, { Weight } from '@/components/typography/Text';

const indicatorColor = {
  inside: 'text-white',
  outside: 'text-black',
};
export default function Carousel({
  children,
  indicators = IndicatorType.outside,
  className,
}: {
  children: React.ReactElement[];
  indicators?: IndicatorType;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  const test = useMemo(() => `translateX(-${index * 100}%)`, [index]);

  const tabs: string[] = [
    'My Page',
    'Home',
    'Search',
    'Explore',
    'Trending Webtoon',
    'Individual Comics',
    'My Library',
    'Comment',
  ];

  return (
    <div className=" overflow-hidden flex flex-col items-center relative">
      <div className="flex flex-row flex-wrap justify-center gap-x-8 leading-[60px] z-[60]">
        {tabs.map((tab, idx) => (
          <Text
            weight={index === idx ? Weight.bold : Weight.normal}
            className={`${index === idx ? 'underline' : ''} cursor-pointer`}
            onClick={() => {
              setIndex(idx);
            }}
          >
            {tab}
          </Text>
        ))}
      </div>
      <div
        className={`overflow-hidden flex flex-col flex-center items-center mt-20 w-[800px]  rounded-md ${
          className ?? ''
        } ${indicatorColor[indicators]}`}
      >
        <div
          className=" flex flex-row z-0 w-full duration-300 ease-in-out items-start"
          style={{ transform: test }}
        >
          {children.map((elm) => (
            <div className="w-[800px] h-fit flex-shrink-0">{elm}</div>
          ))}
        </div>
      </div>
      <ChevronIcon
        className={`absolute top-[calc(50%-15px)] rotate-180 z-20 cursor-pointer left-0
        ${index === 0 ? 'text-gray-400' : ''}`}
        onClick={() => setIndex(Math.max(index - 1, 0))}
      />

      <ChevronIcon
        className={`absolute top-[calc(50%-15px)]   z-20 cursor-pointer right-0 ${
          index === children.length - 1 ? 'text-gray-400' : ''
        }`}
        onClick={() => setIndex(Math.min(index + 1, children.length - 1))}
      />
    </div>
  );
}
