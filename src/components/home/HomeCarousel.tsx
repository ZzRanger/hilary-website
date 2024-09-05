"use client";

import { useState } from "react";
import HudlUI from "@public/hudl_ui.png";
import PlannerUI from "@public/planner_ui.png";
import Image from "next/image";
import ChevronIcon from "@/components/svg/ChevronIcon";

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    if (currentImageIndex === 0) {
      return;
    }
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    if (currentImageIndex === 1) {
      return;
    }
    setCurrentImageIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
  };

  const projectDate =
    currentImageIndex === 0
      ? "May 2024 - August 2024"
      : "May 2024 - August 2024";

  return (
    <section className="flex flex-col">
      <ProjectTopbar projectDate={projectDate} />
      <div className="relative max-w-[1100px] overflow-hidden">
        <CarouselDisplay currentImageIndex={currentImageIndex} />
        <CarouselButtons
          currentImageIndex={currentImageIndex}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
        />
      </div>
    </section>
  );
}

function ProjectTopbar({ projectDate }: { projectDate: string }) {
  return (
    <article className="flex h-7 flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-1">
        <ProjectIcon />
        <div>Project</div>
      </div>
      <div className="mr-6">{projectDate}</div>
    </article>
  );
}

function CarouselDisplay({ currentImageIndex }: { currentImageIndex: number }) {
  return (
    <div
      className={`flex flex-row duration-500 sm:h-fit sm:min-h-[500px] ${
        currentImageIndex === 1 && "-translate-x-full"
      }`}
    >
      <HudlCarouselPage />
      <PlannerCarouselPage />
    </div>
  );
}

function CarouselButtons({
  currentImageIndex,
  goToPreviousImage,
  goToNextImage,
}: {
  currentImageIndex: number;
  goToPreviousImage: () => void;
  goToNextImage: () => void;
}) {
  return (
    <article className="absolute bottom-12 left-6 box-border flex flex-row items-center gap-4">
      <button
        className={`rounded-full bg-white p-2 ${
          currentImageIndex === 0 && "bg-gray-300"
        }`}
        onClick={goToPreviousImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="text-[20px] font-medium text-white">
        {currentImageIndex + 1}/2
      </div>
      <button
        className={`rounded-full bg-white p-2 ${
          currentImageIndex === 1 && "bg-gray-300"
        }`}
        onClick={goToNextImage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </article>
  );
}

function HudlCarouselPage() {
  return (
    <div
      className={`flex w-full max-w-[1100px] flex-shrink-0 flex-col gap-2 bg-[url("/fan_bg.png")] bg-cover pb-20 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:gap-4 sm:pb-0 sm:pl-8 sm:pt-0`}
    >
      <article className="order-2 flex max-w-[375px] flex-col gap-4 py-4 pl-6 text-white sm:order-1 sm:pl-0">
        <div className="flex flex-row items-center gap-4">
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-xs font-medium text-white lg:text-[18px]">
            Web
          </div>
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-xs font-medium text-white lg:text-[18px]">
            B2C
          </div>
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-xs font-medium text-white lg:text-[18px]">
            SaaS
          </div>
        </div>
        <div className="text-[24px] font-medium lg:text-[40px]">Hudl Fan</div>
        <div className="w-60 text-sm font-medium sm:w-full lg:text-[18px] ">
          Designing a mobile experience for Hudl Ticketing on Hudl Fan app
        </div>
        <div className="flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
          <div className="text-sm text-black lg:font-medium">Read More</div>{" "}
          <ChevronIcon className="h-3 w-3 text-black" />
        </div>
      </article>
      <Image
        src={HudlUI}
        alt=""
        className="order-1 sm:order-2 sm:w-[80%] sm:max-w-[685px]"
      />
    </div>
  );
}

function PlannerCarouselPage() {
  return (
    <div
      className={`flex w-full max-w-[1100px] flex-shrink-0 flex-col bg-cover pb-10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:pb-0 sm:pl-8 sm:pt-0 ${`bg-[url("/planner_bg.png")]`}`}
    >
      <article className="order-2 flex max-w-[375px] flex-col gap-2 py-4 pl-6 text-white sm:order-1 sm:gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-xs font-medium text-white lg:text-[18px]">
            Web
          </div>
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-xs font-medium text-white lg:text-[18px]">
            B2C
          </div>
        </div>
        <div className="text-[24px] font-medium lg:text-[40px]">
          Nebula Planner
        </div>
        <div className="text-sm font-medium lg:text-[18px] ">
          Designing a mobile experience for Hudl Ticketing on Hudl Fan app
        </div>
        <div className="flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
          <div className="text-sm text-black lg:font-medium">Read More</div>{" "}
          <ChevronIcon className="h-3 w-3 text-black" />
        </div>
      </article>
      <Image
        src={PlannerUI}
        alt=""
        className="order-1 w-[80%] self-center sm:order-2 sm:max-w-[685px]"
      />
    </div>
  );
}

export const ProjectIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
        fill="#A3A3A3"
      />
      <path
        d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
        fill="#A3A3A3"
      />
      <path
        d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
        fill="#A3A3A3"
      />
      <path
        d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
        fill="#A3A3A3"
      />
    </svg>
  );
};
