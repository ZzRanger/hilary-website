import DownloadIcon from "@/components/svg/DownloadIcon";
import PlusIcon from "@/components/svg/PlusIcon";
import profilePic from "@public/hn.png";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      <HilaryHeader />
      <article className=" lg:text-[24px]">
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
    <article className="flex flex-row gap-4 lg:gap-6">
      <AboutButton route="/about">
        <PlusIcon />
        <div className="text-xs lg:text-base">Connect with me</div>
      </AboutButton>
      <AboutButton route="https://drive.google.com/file/d/10xotuPKtsh40tKZy1ifBUVvFw47equG1/view?usp=sharing">
        <DownloadIcon />
        <div className="text-xs lg:text-base">My resume</div>
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
  let target = "_blank";
  if (route.startsWith("https://")) {
    target = "_self";
  }
  return (
    <Link href={route} target={target}>
      <button className="flex cursor-pointer flex-row items-center gap-1 rounded-[8px] border border-[#CCCCCC] bg-[#F0AECE] px-4 py-2 text-white hover:-translate-y-1 hover:shadow-md lg:px-5 lg:py-3">
        {children}
      </button>
    </Link>
  );
};
