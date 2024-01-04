"use client";

import React, { useMemo, useState } from "react";

import ChevronIcon from "@/components/svg/ChevronIcon";
import EllipseIcon from "@/components/svg/EllipseIcon";
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

  return (
    <div className="relative">
      <div
        className={`flex-center  flex flex-col items-center overflow-hidden  rounded-md ${
          className ?? ""
        } ${indicatorColor[indicators]}`}
      >
        <div
          className="z-0 flex w-full flex-row self-start duration-300 ease-in-out"
          style={{ transform: test }}
        >
          {children}
        </div>
        <div
          className={`${
            indicators === IndicatorType.inside
              ? "absolute bottom-[15%] right-[calc(50%-28px)]"
              : ""
          }bottom-[15%] flex  w-20 flex-row justify-around`}
        >
          {children.map((_, i) => (
            <EllipseIcon
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-pointer ${
                index === i ? indicatorColor[indicators] : "text-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
      <ChevronIcon
        className={`absolute top-[calc(50%-15px)] z-20 rotate-180 cursor-pointer ${
          indicators === IndicatorType.inside ? "left-10" : "-left-10"
        }
        ${index === 0 ? "text-gray-400" : ""}`}
        onClick={() => setIndex(Math.max(index - 1, 0))}
      />

      <ChevronIcon
        className={`absolute top-[calc(50%-15px)]   z-20 cursor-pointer ${
          indicators === IndicatorType.inside ? "right-10" : "-right-10"
        } ${index === children.length - 1 ? "text-gray-400" : ""}`}
        onClick={() => setIndex(Math.min(index + 1, children.length - 1))}
      />
    </div>
  );
}
