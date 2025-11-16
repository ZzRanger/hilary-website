"use client";

import React, { useState } from "react";
import Image from "next/image";
import Tokyo from "@public/about/tokyo.png";
import Austria from "@public/about/austria.png";
import Singapore from "@public/about/singapore.png";
import ChevronIcon from "../svg/ChevronIcon";
import EllipseIcon from "../svg/EllipseIcon";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const indexArray = ["", "-translate-x-full", "-translate-x-[200%]"];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-md shadow-2xl">
      {index !== 0 && (
        <ChevronIcon
          className="absolute left-10 top-[calc(50%-15px)] z-20 rotate-180 cursor-pointer text-white shadow-2xl"
          onClick={() => setIndex((index - 1) % 3)}
        />
      )}
      {index !== 2 && (
        <ChevronIcon
          className="absolute right-10 top-[calc(50%-15px)] z-20 cursor-pointer text-white shadow-2xl"
          onClick={() => setIndex((index + 1) % 3)}
        />
      )}

      <div className="absolute bottom-[5%] right-[calc(50%-28px)] z-20 flex w-14 flex-row justify-around">
        <EllipseIcon
          onClick={() => setIndex(0)}
          className={`cursor-pointer ${
            index === 0 ? "text-white" : "text-[#D9D9D9]"
          }`}
        />
        <EllipseIcon
          onClick={() => setIndex(1)}
          className={`cursor-pointer ${
            index === 1 ? "text-white" : "text-[#D9D9D9]"
          }`}
        />
        <EllipseIcon
          onClick={() => setIndex(2)}
          className={`cursor-pointer ${
            index === 2 ? "text-white" : "text-[#D9D9D9]"
          }`}
        />
      </div>
      <div
        className={`flex w-full flex-row ${indexArray[index]} z-0 h-full duration-300 ease-in-out`}
      >
        <div className="relative box-border w-fit flex-shrink-0 rounded-md">
          <Image
            src={Tokyo}
            priority
            alt=""
            className={`${
              index === 0 ? "z-10" : "z-0"
            } h-full object-cover duration-500`}
          />
          <Caption
            caption="View of Tokyo 🇯🇵 Top of Tokyo Government Tower"
            location="Tokyo, Japan"
          />
        </div>
        <div className="relative box-border w-fit flex-shrink-0 rounded-md">
          <Image
            src={Singapore}
            alt=""
            className={`${
              index === 1 ? "z-10" : "z-0"
            } h-full object-cover duration-500`}
          />
          <Caption
            caption="View of Singapore's skyline at night 🇸🇬 🌌"
            location="Singapore, Singapore"
          />
        </div>
        <div className="relative box-border w-fit flex-shrink-0 rounded-md">
          <Image
            src={Austria}
            alt=""
            className={`${
              index === 2 ? "z-10" : "z-0"
            }  h-full object-cover duration-500`}
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
  <div className="absolute bottom-[15%] left-[calc(50%-140px)] z-50 flex h-[178px] w-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#CCC9C8]/90 text-black shadow-2xl sm:bottom-[15%] sm:left-[calc(50%-140px)] lg:left-[104px] lg:top-[calc(50%-89px)] lg:bg-inherit lg:bg-glass-2 lg:backdrop-blur-xl">
    <div className="text-center">Info</div>
    <hr className="h-[1px] w-full border-0 bg-[#828282]" />
    <div className="w-60 py-6 text-center">{caption}</div>
    <hr className="h-[1px] w-full border-0 bg-[#828282]" />
    <div>{location}</div>
    <hr />
  </div>
);
