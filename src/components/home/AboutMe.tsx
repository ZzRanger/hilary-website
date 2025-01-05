import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import DownloadIcon from "@/components/svg/DownloadIcon";
import PlusIcon from "@/components/svg/PlusIcon";
import profilePic from "@public/hn.png";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeLayout() {
  return (
    <LayoutWrapper>
      <AboutMe />
    </LayoutWrapper>
  );
}

function AboutMe() {
  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <HilaryHeader />
      <article className="text-base leading-6 lg:text-[24px] lg:leading-9">
        I&apos;m a full-stack designer that loves cross-functional work,
        data-backed design, and user research. I like to craft cool products
        that can make a difference in someone&apos;s life.
      </article>
      <AboutButtonSection />
    </section>
  );
}

const HilaryHeader = () => {
  return (
    <article className="flex flex-row items-center gap-4">
      <Image
        src={profilePic}
        alt=""
        className="h-[50px] w-[50px] lg:h-20 lg:w-20"
      />
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="text-xl font-semibold lg:text-[32px]">
          Hey! I&apos;m Hilary 👋🏻
        </div>
        <div className="text-sm font-light tracking-wide text-[#A3A3A3] lg:text-base">
          Product Designer
        </div>
      </div>
    </article>
  );
};

const AboutButtonSection = () => {
  return (
    <article className="flex flex-row gap-2 md:gap-4 lg:gap-6">
      <AboutButton route="/about">
        <PlusIcon className="h-[16px] w-[16px]" />
        <div className="text-[11px] lg:text-base">Connect with me</div>
      </AboutButton>
      <AboutButton route="https://drive.google.com/file/d/10xotuPKtsh40tKZy1ifBUVvFw47equG1/view?usp=sharing">
        <DownloadIcon className="h-[16px] w-[16px]" />
        <div className="text-[11px] lg:text-base">My resume</div>
      </AboutButton>
    </article>
  );
};

const AboutButton = ({
  route,
  children,
}: {
  route: string;
  children: JSX.Element[];
}) => {
  return (
    <Link href={route} target="_blank">
      <button className="flex cursor-pointer flex-row items-center gap-0.5 rounded-[8px] border-[0.5px] border-[#CCCCCC] bg-[#F0AECE] px-4 py-2 text-white hover:-translate-y-1 hover:shadow-md lg:px-5 lg:py-3">
        {children}
      </button>
    </Link>
  );
};
