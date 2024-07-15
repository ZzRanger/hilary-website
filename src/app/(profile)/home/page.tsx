"use client";

import DownloadIcon from "@/components/svg/DownloadIcon";
import PlusIcon from "@/components/svg/PlusIcon";
import profilePic from "@public/hn.png";
import Image from "next/image";
import { useState } from "react";
import HudlFanBg from "@public/fan_bg.png";
import PlannerBg from "@public/planner_bg.png";
import ChevronIcon from "@/components/svg/ChevronIcon";
import HudlUI from "@public/hudl_ui.png";
import PlannerUI from "@public/planner_ui.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AboutMe />
      <Carousel />
    </main>
  );
}

function AboutMe() {
  return (
    <section className="mt-10 flex w-[1156px] flex-col gap-6 rounded-[16px] border border-[#D9D9D9] bg-white/70  p-6">
      <article className="flex flex-row items-center gap-4">
        <Image src={profilePic} alt="" className="h-20 w-20" />
        <div className="flex flex-col">
          <div className="text-[32px] font-bold">Hey! I&apos;m Hilary 👋</div>
          <div className="text-[#A3A3A3]">Product Designer</div>
        </div>
      </article>
      <article className="text-[24px]">
        I&apos;m a full-stack designer that loves cross-functional work,
        data-backed design, and user research. I like to craft cool products
        that can make a difference in someone&apos;s life.
      </article>
      <article className="flex flex-row gap-6">
        <button className="flex flex-row gap-1 rounded-[8px] border border-[#CCCCCC] bg-[#F0AECE] px-5 py-3 text-white">
          <PlusIcon />
          Connect with me
        </button>
        <button className="flex flex-row gap-1 rounded-[8px] border border-[#CCCCCC] bg-[#F0AECE] px-5 py-3 text-white">
          <DownloadIcon /> My resume
        </button>
      </article>
    </section>
  );
}

function Carousel() {
  const carouselComponents = [
    <HudlCarouselPage key={0} />,
    <PlannerCarouselPage key={1} />,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    if (currentImageIndex === 0) {
      return;
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselComponents.length - 1 : prevIndex - 1,
    );
  };

  const goToNextImage = () => {
    if (currentImageIndex === 1) {
      return;
    }
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselComponents.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="mt-10 flex flex-col rounded-[16px] border border-[#D9D9D9] bg-white/70">
      <article className="mx-6 mb-2 mt-6 flex h-8 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
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
          Project
        </div>
        <div className="mr-6">
          {currentImageIndex === 0
            ? "May 2024 - August 2024"
            : "May 2024 - August 2024"}
        </div>
      </article>
      <div className="relative mx-6 w-[1100px] overflow-hidden">
        <div
          className={`flex w-full flex-row duration-500 ${
            currentImageIndex === 1 && "-translate-x-full"
          }`}
        >
          <HudlCarouselPage />
          <PlannerCarouselPage />
        </div>
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
      </div>
    </section>
  );
}

function HudlCarouselPage() {
  return (
    <div className="relative w-[1100px] flex-shrink-0">
      <Image src={HudlFanBg} width={1100} height={540} alt="" />
      <Image
        src={HudlUI}
        width={685}
        height={410}
        alt=""
        className="absolute bottom-20 right-0"
      />
      <article className="absolute bottom-[calc(50%-100px)] left-6 flex w-[375px] flex-col gap-4 bg-black/50 py-4 text-white">
        <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-[18px] font-medium text-white">
          Coming Soon
        </div>
        <div className="text-[40px] font-medium">Hudl Fan</div>
        <div className="text-[18px] font-medium ">
          Designing a mobile experience for Hudl Ticketing on Hudl Fan app
        </div>
      </article>
    </div>
  );
}

function PlannerCarouselPage() {
  return (
    <div className="relative w-[1100px] flex-shrink-0">
      <Image src={PlannerBg} width={1100} height={540} alt="" />
      <Image
        src={PlannerUI}
        width={685}
        height={410}
        alt=""
        className="absolute -right-8 top-3"
      />
      <article className="absolute bottom-[calc(50%-140px)] left-6 flex w-[375px] flex-col gap-4 py-4 text-white">
        <div className="flex flex-row items-center gap-4">
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-[18px] font-medium text-white">
            Web
          </div>
          <div className="w-fit rounded-[100px] bg-[#BDBDBD]/50 px-4 py-2 text-center text-[18px] font-medium text-white">
            B2C
          </div>
        </div>
        <div className="text-[40px] font-medium">Nebula Planner</div>
        <div className="text-[18px] font-medium ">
          Designing a mobile experience for Hudl Ticketing on Hudl Fan app
        </div>
        <div className="flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
          <div className="font-medium text-black">Read More</div>{" "}
          <ChevronIcon className="h-3 w-3 text-black" />
        </div>
      </article>
    </div>
  );
}
