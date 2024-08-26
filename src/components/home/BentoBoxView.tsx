import Somasawa1 from "@public/home/Somasawa1.png";
import Somasawa2 from "@public/home/Somasawa2.png";
import Knowverse1 from "@public/home/Knowverse1.png";
import Knowverse2 from "@public/home/Knowverse2.png";
import { PillTag } from "@/components/PillTag";
import NebulaLogo from "@public/home/NebulaLogo.png";
import ZineLogo from "@public/home/ZineLogo.png";
import ChevronIcon from "@/components/svg/ChevronIcon";
import Image from "next/image";
import { LayoutWrapper } from "@/app/(profile)/home/page";
import { ProjectIcon } from "@/components/home/HomeCarousel";

export default function BentoBoxView() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-between gap-4">
        <Somasawa />
        <Timeline />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <CoolProjects />
        <Knowverse />
      </div>
    </section>
  );
}

function Somasawa() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col">
        <article className="flex h-8 flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <ProjectIcon />
            <div>Project</div>
          </div>
          <div>Jan 2023 - March 2023</div>
        </article>
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-[#0E1E6D] p-8">
          <div className="flex w-full flex-row justify-center gap-6">
            <Image src={Somasawa1} className="w-[50%]" alt="" />
            <Image src={Somasawa2} className="w-[50%]" alt="" />
          </div>
          <div className="flex w-full flex-row justify-start gap-4">
            <PillTag className="bg-[#BDBDBD]/50 text-white">Mobile</PillTag>
            <PillTag className="bg-[#BDBDBD]/50 text-white">B2C</PillTag>
            <PillTag className="bg-[#BDBDBD]/50 text-white">Pro-Bono</PillTag>
          </div>
          <div className="text-[40px] font-medium leading-[48px] text-white">
            SomaSawa
          </div>
          <div className="text-[18px] text-white">
            Creation of an app for teachers in Rafiki Africa to help streamline
            their workflows for students
          </div>
          <div className=" flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
            <div className="font-medium text-black">Read More</div>{" "}
            <ChevronIcon className="h-3 w-3 text-black" />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

function Knowverse() {
  return (
    <LayoutWrapper>
      <div className=" flex flex-col">
        <article className="flex h-8 flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <ProjectIcon />
            <div>Project</div>
          </div>
          <div>Jan 2023 - March 2023</div>
        </article>
        <div
          className={`flex flex-col items-start gap-4 rounded-2xl bg-[url('/home/knowverse.png')] bg-cover p-8`}
        >
          <div className="flex w-full flex-row justify-center gap-6">
            <Image src={Knowverse1} className="w-[50%]" alt="" />
            <Image src={Knowverse2} className="w-[50%]" alt="" />
          </div>
          <div className="flex w-full flex-row justify-start gap-4">
            <PillTag className="bg-[#BDBDBD]/50 text-white">Mobile</PillTag>
            <PillTag className="bg-[#BDBDBD]/50 text-white">
              Competition Winner
            </PillTag>
          </div>
          <div className="text-[40px] font-medium leading-[48px] text-white">
            KnowVerse
          </div>
          <div className="text-[18px] text-white">
            An app for young professionals to connect with others to get support
            for emotional and skills supports
          </div>
          <div className="flex w-fit flex-row items-center gap-2 rounded-[100px] bg-white px-4 py-2 text-center text-[18px] ">
            <div className="font-medium text-black">Read More</div>{" "}
            <ChevronIcon className="h-3 w-3 text-black" />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

function CoolProjects() {
  return (
    <LayoutWrapper>
      <section className="flex flex-col">
        <article className="flex h-8 flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <SparkleIcon />
            <div>Other Cool Projects</div>
          </div>
        </article>
        <div className="grid grid-cols-2 gap-4 text-white">
          <article className="box-border flex h-full flex-col justify-center rounded-2xl bg-[#DBE2FF] bg-gradient-to-b from-white/0 to-black/20 p-4">
            <div className="flex flex-col items-start gap-4 ">
              <Image src={NebulaLogo} alt="" />
              <div className="flex flex-col">
                <div className="font-medium">Nebula Labs</div>
                <div className="text-sm">Branding</div>
              </div>
            </div>
          </article>
          <article className="flex flex-col items-center justify-center rounded-2xl bg-black p-4">
            <div className="flex  flex-col items-start gap-4">
              <Image src={ZineLogo} alt="" />
              <div className="flex flex-col">
                <div className="font-medium">Descension</div>
                <div className="text-sm">Printing & Branding</div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </LayoutWrapper>
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
    <LayoutWrapper>
      <section className="flex flex-col">
        <article className="flex h-8 flex-row items-center justify-between">
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
        <div className="flex flex-col bg-[#F5F5F5] p-4">
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
    </LayoutWrapper>
  );
}

const SparkleIcon = () => {
  return (
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
  );
};
