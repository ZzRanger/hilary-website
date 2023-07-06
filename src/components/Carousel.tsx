'use client';

import React, { useMemo, useState } from 'react';

import ChevronIcon from '@/components/svg/ChevronIcon';
import EllipseIcon from '@/components/svg/EllipseIcon';
import { IndicatorType } from '@/app/about/page';

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

  return (
    <div className="relative">
      <div
        className={`overflow-hidden  flex flex-col flex-center items-center  rounded-md ${
          className ?? ''
        } ${indicatorColor[indicators]}`}
      >
        <div
          className="flex flex-row w-full z-0 duration-300 ease-in-out self-start"
          style={{ transform: test }}
        >
          {children}
        </div>
        <div
          className={`${
            indicators === IndicatorType.inside
              ? 'absolute bottom-[15%] right-[calc(50%-28px)]'
              : ''
          }bottom-[15%] w-20  flex flex-row justify-around`}
        >
          {children.map((_, i) => (
            <EllipseIcon
              onClick={() => setIndex(i)}
              className={`cursor-pointer ${
                index === i ? indicatorColor[indicators] : 'text-[#D9D9D9]'
              }`}
            />
          ))}
        </div>
      </div>
      <ChevronIcon
        className={`absolute top-[calc(50%-15px)] rotate-180 z-20 cursor-pointer ${
          indicators === IndicatorType.inside ? 'left-10' : '-left-10'
        }
        ${index === 0 ? 'text-gray-400' : ''}`}
        onClick={() => setIndex(Math.max(index - 1, 0))}
      />

      <ChevronIcon
        className={`absolute top-[calc(50%-15px)]   z-20 cursor-pointer ${
          indicators === IndicatorType.inside ? 'right-10' : '-right-10'
        } ${index === children.length - 1 ? 'text-gray-400' : ''}`}
        onClick={() => setIndex(Math.min(index + 1, children.length - 1))}
      />
    </div>
  );
}
