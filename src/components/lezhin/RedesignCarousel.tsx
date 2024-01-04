"use client";

import React, { useMemo, useState } from "react";

import ChevronIcon from "@/components/svg/ChevronIcon";
import Text, { Weight } from "@/components/typography/Text";
import { IndicatorType } from "@/utils/indicatorType";

const indicatorColor = {
  inside: "text-white",
  outside: "text-black",
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
    "My Page",
    "Home",
    "Search",
    "Explore",
    "Trending Webtoon",
    "Individual Comics",
    "My Library",
    "Comment",
  ];

  return (
    <div className=" relative flex flex-col items-center overflow-hidden">
      <div className="z-[60] flex flex-row flex-wrap justify-center gap-x-8 leading-[60px]">
        {tabs.map((tab, idx) => (
          <Text
            key={idx}
            weight={index === idx ? Weight.bold : Weight.normal}
            className={`${index === idx ? "underline" : ""} cursor-pointer`}
            onClick={() => {
              setIndex(idx);
            }}
          >
            {tab}
          </Text>
        ))}
      </div>
      <div
        className={`flex-center mt-20 flex w-[800px] flex-col items-center overflow-hidden  rounded-md ${
          className ?? ""
        } ${indicatorColor[indicators]}`}
      >
        <div
          className=" z-0 flex w-full flex-row items-start duration-300 ease-in-out"
          style={{ transform: test }}
        >
          {children.map((elm, idx) => (
            <div key={idx} className="h-fit w-[800px] flex-shrink-0">
              {elm}
            </div>
          ))}
        </div>
      </div>
      <ChevronIcon
        className={`absolute left-0 top-[calc(50%-15px)] z-20 rotate-180 cursor-pointer
        ${index === 0 ? "text-gray-400" : ""}`}
        onClick={() => setIndex(Math.max(index - 1, 0))}
      />

      <ChevronIcon
        className={`absolute right-0   top-[calc(50%-15px)] z-20 cursor-pointer ${
          index === children.length - 1 ? "text-gray-400" : ""
        }`}
        onClick={() => setIndex(Math.min(index + 1, children.length - 1))}
      />
    </div>
  );
}
