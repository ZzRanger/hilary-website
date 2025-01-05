"use client";

import { useState } from "react";
import HudlUI from "@public/hudl_ui.png";
import PlannerUI from "@public/planner_ui.png";
import Image from "next/image";
import ChevronIcon from "@/components/svg/ChevronIcon";
import Link from "next/link";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import ProjectTopbar from "@/components/home/helpers/ProjectTopbar";

export default function CarouselLayout() {
  return (
    <LayoutWrapper>
      <Carousel />
    </LayoutWrapper>
  );
}

function Carousel() {
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
    currentImageIndex === 0 ? "May 2024 - Aug 2024" : "Jan 2023 - May 2023";

  return (
    <section className="flex w-full flex-col">
      <ProjectTopbar projectDate={projectDate} />
      <div className="relative max-w-[1100px] overflow-hidden rounded-lg">
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
    <article className="absolute bottom-4 left-6 box-border flex flex-row items-center gap-4 sm:bottom-12">
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
      className={`flex w-full max-w-[1100px] flex-shrink-0 flex-col gap-2 bg-[url("/fan_bg.png")] bg-cover pb-20 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pb-0 sm:pl-8 sm:pt-0`}
    >
      <article className="order-2 flex max-w-[270px] flex-col gap-4 py-4 pl-6 text-white sm:order-1 sm:max-w-[375px] sm:pl-0">
        <div className="flex w-0 flex-row gap-4">
          {" "}
          {/* Hacky solution */}
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
        <div className=" text-sm font-medium sm:w-full lg:text-[18px] ">
          Designing a mobile experience for Hudl Ticketing on Hudl Fan app
        </div>
        <Link
          className="w-fit cursor-pointer"
          target="_blank"
          href="https://www.figma.com/slides/MN5rVdJHC4mujeIfymyq9t/Hudl-Fan---Complimentary-Ticket?node-id=8-157&t=qzHjvAaIef8IZfTe-1"
        >
          <button className="flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
            <div className="text-sm text-black lg:font-medium">Read More</div>
            <ChevronIcon className="h-3 w-3 text-black" />
          </button>
        </Link>
      </article>
      <Image
        src={HudlUI}
        alt=""
        className="order-1 w-[90%] self-center sm:order-2 sm:max-w-[685px]"
      />
    </div>
  );
}

function PlannerCarouselPage() {
  return (
    <div
      className={`flex w-full min-w-0 max-w-[1100px] flex-shrink-0 flex-col bg-cover pb-10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:pb-0 sm:pl-8 sm:pt-0 ${`bg-[url("/planner_bg.png")]`}`}
    >
      <article className="order-2 flex w-fit max-w-[250px] flex-col gap-2 py-4 pl-6 text-white sm:order-1 sm:max-w-[400px] sm:gap-4 sm:pl-0">
        <div className="flex w-0 flex-row gap-4">
          {" "}
          {/* Hacky solution */}
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
          Designing a website tool to aid UT Dallas students in planning their
          four-year degree
        </div>
        <Link className="w-fit cursor-pointer" href="/planner">
          <button className="flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
            <div className="text-sm text-black lg:font-medium">Read More</div>{" "}
            <ChevronIcon className="h-3 w-3 text-black" />
          </button>
        </Link>
      </article>
      <Image
        src={PlannerUI}
        alt=""
        className="order-1 w-[80%] self-center sm:order-2 sm:max-w-[560px]"
      />
    </div>
  );
}
