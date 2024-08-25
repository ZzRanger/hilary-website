"use client";

import DownloadIcon from "@/components/svg/DownloadIcon";
import PlusIcon from "@/components/svg/PlusIcon";
import profilePic from "@public/hn.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import HudlFanBg from "@public/fan_bg.png";
import PlannerBg from "@public/planner_bg.png";
import ChevronIcon from "@/components/svg/ChevronIcon";
import HudlUI from "@public/hudl_ui.png";
import PlannerUI from "@public/planner_ui.png";
import FigmaIcon from "@public/home/FigmaIcon.png";
import AtlassianIcon from "@public/home/AtlassianIcon.png";
import AdobeIcon from "@public/home/AdobeIcon.png";
import NotionIcon from "@public/home/NotionIcon.png";
import MiroIcon from "@public/home/MiroIcon.png";
import FramerIcon from "@public/home/FramerIcon.png";
import Somasawa1 from "@public/home/Somasawa1.png";
import Somasawa2 from "@public/home/Somasawa2.png";
import Knowverse1 from "@public/home/Knowverse1.png";
import Knowverse2 from "@public/home/Knowverse2.png";
import { PillTag } from "@/components/PillTag";
import NebulaLogo from "@public/home/NebulaLogo.png";
import ZineLogo from "@public/home/ZineLogo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AboutMe />
      <Carousel />
      <BentoBoxView />
      <MyStacks />
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

const MyStacks = () => {
  const toolInfo = [
    { icon: FigmaIcon, textTitle: "Figma", textDescription: "UI/UX tool" },
    {
      icon: AtlassianIcon,
      textTitle: "Atlassian",
      textDescription: "Project management",
    },
    {
      icon: AdobeIcon,
      textTitle: "Adobe Creative Suite",
      textDescription: "Graphic and branding tool",
    },
    {
      icon: NotionIcon,
      textTitle: "Notion",
      textDescription: "Project management",
    },
    {
      icon: MiroIcon,
      textTitle: "Miro",
      textDescription: "Design brainstorm/research",
    },
    {
      icon: FramerIcon,
      textTitle: "Framer",
      textDescription: "Website design",
    },
  ];
  return (
    <section className="mt-10 flex flex-col rounded-[16px] border border-[#D9D9D9] bg-white/70">
      <article className="m-6 flex h-8 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.625 1.75C0.625 0.783502 1.4085 0 2.375 0H7.625C8.5915 0 9.375 0.783502 9.375 1.75V14L5 11.8125L0.625 14V1.75Z"
              fill="#A3A3A3"
            />
          </svg>
          My Stacks
        </div>
      </article>
      <div className=" mx-6 mb-10 grid w-[1100px] grid-cols-2 bg-[#F5F5F5] p-5">
        {toolInfo.map((tool) => (
          <ToolArticle key={tool.textTitle} {...tool} />
        ))}
      </div>
    </section>
  );
};

const ToolArticle = ({
  icon,
  textTitle,
  textDescription,
}: {
  icon: StaticImageData;
  textTitle: string;
  textDescription: string;
}) => {
  return (
    <article className="flex w-[400px] flex-row items-center gap-4 border-b-2 border-[#D4D4D4] p-4">
      <Image src={icon} width={80} alt="Figma Icon" />
      <div>
        <div className="font-[500]">{textTitle}</div>
        <div className="text-sm text-gray-500">{textDescription}</div>
      </div>
    </article>
  );
};

function BentoBoxView() {
  return (
    <section className="grid w-[1100px] grid-cols-2 border border-black">
      <div className="flex flex-col">
        <Somasawa />
        <Timeline />
      </div>
      <div className="flex flex-col">
        <CoolProjects />
        <Knowverse />
      </div>
    </section>
  );
}

function Somasawa() {
  return (
    <div className="m-4 flex flex-col rounded-[16px] border border-[#D9D9D9] bg-white/70">
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
        <div className="mr-6">Jan 2023 - March 2023</div>
      </article>
      <div className="mx-6 mb-6 flex flex-col items-start gap-4 rounded-2xl bg-[#0E1E6D] p-4">
        <div className="flex w-full flex-row justify-center gap-6">
          <Image src={Somasawa1} width={200} alt="" />
          <Image src={Somasawa2} width={200} alt="" />
        </div>
        <div className="flex w-full flex-row justify-start gap-4">
          <PillTag className="bg-[#BDBDBD]/50 text-white">Mobile</PillTag>
          <PillTag className="bg-[#BDBDBD]/50 text-white">B2C</PillTag>
          <PillTag className="bg-[#BDBDBD]/50 text-white">Pro-Bono</PillTag>
        </div>
        <div className="text-[40px] font-[500] leading-[48px] text-white">
          SomaSawa
        </div>
        <div className="text-[18px]  text-white">
          Creation of an app for teachers in Rafiki Africa to help streamline
          their workflows for students
        </div>
        <div className=" flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
          <div className="font-medium text-black">Read More</div>{" "}
          <ChevronIcon className="h-3 w-3 text-black" />
        </div>
      </div>
    </div>
  );
}

function Knowverse() {
  return (
    <div className="m-4 flex flex-col rounded-[16px] border border-[#D9D9D9] bg-white/70">
      <article className="mx-6 mb-2 mt-6 flex h-8 flex-row items-center justify-between bg-[]">
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
        <div className="mr-6">Jan 2023 - March 2023</div>
      </article>
      <div
        className={`mx-6 mb-6 flex flex-col items-start gap-4 rounded-2xl bg-[url('/home/knowverse.png')] bg-cover p-4`}
      >
        <div className="flex w-full flex-row justify-center gap-6">
          <Image src={Knowverse1} width={200} alt="" />
          <Image src={Knowverse2} width={200} alt="" />
        </div>
        <div className="flex w-full flex-row justify-start gap-4">
          <PillTag className="bg-[#BDBDBD]/50 text-white">Mobile</PillTag>
          <PillTag className="bg-[#BDBDBD]/50 text-white">
            Competition Winner
          </PillTag>
        </div>
        <div className="text-[40px] font-[500] leading-[48px] text-white">
          KnowVerse
        </div>
        <div className="text-[18px]  text-white">
          An app for young professionals to connect with others to get support
          for emotional and skills supports
        </div>
        <div className=" flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
          <div className="font-medium text-black">Read More</div>{" "}
          <ChevronIcon className="h-3 w-3 text-black" />
        </div>
      </div>
    </div>
  );
}

function CoolProjects() {
  return (
    <section className="mt-10 flex flex-col rounded-[16px] border border-[#D9D9D9] bg-white/70">
      <article className="m-6 flex h-8 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.625 3C6.10825 3 6.5 3.39175 6.5 3.875V4.75H7.375C7.85825 4.75 8.25 5.14175 8.25 5.625C8.25 6.10825 7.85825 6.5 7.375 6.5H6.5V7.375C6.5 7.85825 6.10825 8.25 5.625 8.25C5.14175 8.25 4.75 7.85825 4.75 7.375V6.5H3.875C3.39175 6.5 3 6.10825 3 5.625C3 5.14175 3.39175 4.75 3.875 4.75H4.75V3.875C4.75 3.39175 5.14175 3 5.625 3ZM5.625 11.75C6.10825 11.75 6.5 12.1418 6.5 12.625V13.5H7.375C7.85825 13.5 8.25 13.8918 8.25 14.375C8.25 14.8582 7.85825 15.25 7.375 15.25H6.5V16.125C6.5 16.6082 6.10825 17 5.625 17C5.14175 17 4.75 16.6082 4.75 16.125V15.25H3.875C3.39175 15.25 3 14.8582 3 14.375C3 13.8918 3.39175 13.5 3.875 13.5H4.75V12.625C4.75 12.1418 5.14175 11.75 5.625 11.75Z"
              fill="#A3A3A3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.75 3C12.147 3 12.4942 3.2673 12.5958 3.65109L13.6276 7.54906L16.5622 9.24209C16.8331 9.39835 17 9.68729 17 10C17 10.3127 16.8331 10.6016 16.5622 10.7579L13.6276 12.4509L12.5958 16.3489C12.4942 16.7327 12.147 17 11.75 17C11.3529 17 11.0057 16.7327 10.9041 16.3489L9.87227 12.4509L6.93774 10.7579C6.66688 10.6016 6.5 10.3127 6.5 10C6.5 9.68729 6.66688 9.39836 6.93774 9.24209L9.87227 7.54907L10.9041 3.65109C11.0057 3.2673 11.3529 3 11.75 3Z"
              fill="#A3A3A3"
            />
          </svg>
          Other Cool Projects
        </div>
      </article>
      <div className=" mx-6 mb-10  bg-[#F5F5F5] p-5 text-white">
        <div className="flex flex-row items-center justify-center">
          <div className="box-border flex h-full w-[250px] flex-col items-start rounded-2xl bg-[#DBE2FF] bg-gradient-to-b from-white to-black/20 pt-4">
            <Image
              src={NebulaLogo}
              width={200}
              alt=""
              className="self-center"
            />
            <div className="p-4">
              <div className="font-[500]">Nebula Labs</div>
              <div className="text-sm">Branding</div>
            </div>
          </div>
          <div className="box-border flex w-[250px] flex-col items-start rounded-2xl bg-black pt-4">
            <Image src={ZineLogo} width={160} alt="" className="self-center" />
            <div className="p-4">
              <div className="font-[500]">Descension</div>
              <div className="text-sm">Branding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const timelineData = [
    {
      active: true,
      title: "Hudl",
      description: "Product Designer Intern • May 2024 - August 2024",
    },
    {
      active: false,
      title: "Dialexa",
      description: "UX Apprentice • January 2024 - April 2024",
    },
    {
      active: false,
      title: "Nebula Labs",
      description: "Head of Design • Aug 2023 - Jan 2024",
    },
    {
      active: false,
      title: "Develop for Good",
      description: "UX Intern • May 2023 - Aug 2023",
    },
  ];
  const TimelineComponent = ({
    active,
    title,
    description,
  }: {
    active: boolean;
    title: string;
    description: string;
  }) => {
    const icon = !active ? (
      <svg
        width="68"
        height="73"
        viewBox="0 0 68 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="33" y="0.191757" width="2" height="18" fill="#E5E5E5" />
        <rect
          x="17"
          y="19.1918"
          width="34"
          height="34"
          rx="17"
          stroke="#E5E5E5"
          stroke-width="2"
        />
        <rect x="33" y="54.1918" width="2" height="18" fill="#E5E5E5" />
      </svg>
    ) : (
      <svg
        width="68"
        height="73"
        viewBox="0 0 68 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="33" y="0.191757" width="2" height="18" fill="#F0AECE" />
        <g filter="url(#filter0_d_1633_183)">
          <rect
            x="16"
            y="18.1918"
            width="36"
            height="36"
            rx="18"
            fill="white"
          />
          <rect
            x="17"
            y="19.1918"
            width="34"
            height="34"
            rx="17"
            stroke="#F0AECE"
            stroke-width="2"
          />
          <circle cx="34" cy="36.1918" r="6" fill="#F0AECE" />
        </g>
        <rect x="33" y="54.1918" width="2" height="18" fill="#E5E5E5" />
        <defs>
          <filter
            id="filter0_d_1633_183"
            x="12"
            y="14.1918"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_1633_183"
            />
            <feOffset />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.912451 0 0 0 0 0.954899 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1633_183"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1633_183"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
    return (
      <div className="flex flex-row items-center">
        {icon}
        <div className="flex flex-col">
          <div className="font-[500] text-[#171717]">{title}</div>
          <div className="text-sm text-[#737373]">{description}</div>
        </div>
      </div>
    );
  };
  return (
    <section className="mt-10 flex flex-col rounded-[16px] border border-[#D9D9D9] bg-white/70">
      <article className="m-6 flex h-8 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 6.5V5.625C6.5 4.17525 7.67525 3 9.125 3H10.875C12.3247 3 13.5 4.17525 13.5 5.625V6.5H15.25C16.2165 6.5 17 7.2835 17 8.25V11.3744C14.8209 12.1829 12.463 12.625 10 12.625C7.537 12.625 5.17907 12.1829 3 11.3744V8.25C3 7.2835 3.7835 6.5 4.75 6.5H6.5ZM8.25 5.625C8.25 5.14175 8.64175 4.75 9.125 4.75H10.875C11.3582 4.75 11.75 5.14175 11.75 5.625V6.5H8.25V5.625ZM9.125 10C9.125 9.51675 9.51675 9.125 10 9.125H10.0087C10.492 9.125 10.8837 9.51675 10.8837 10C10.8837 10.4832 10.492 10.875 10.0087 10.875H10C9.51675 10.875 9.125 10.4832 9.125 10Z"
              fill="#A3A3A3"
            />
            <path
              d="M3 13.2307V15.25C3 16.2165 3.7835 17 4.75 17H15.25C16.2165 17 17 16.2165 17 15.25V13.2307C14.8013 13.9729 12.4469 14.375 10 14.375C7.55317 14.375 5.19869 13.9729 3 13.2307Z"
              fill="#A3A3A3"
            />
          </svg>
          Experience
        </div>
      </article>
      <div className=" mx-6 mb-10  flex flex-col bg-[#F5F5F5] p-5">
        {timelineData.map((data) => (
          <TimelineComponent
            key={data.title}
            active={data.active}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
}
