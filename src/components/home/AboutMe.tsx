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
    <section className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
      <HilaryHeader />
      <article className="text-base leading-6 sm:text-lg sm:leading-7 lg:text-[24px] lg:leading-9">
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
    <article className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <Image
        src={profilePic}
        alt=""
        className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
      />
      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="text-xl font-semibold sm:text-2xl lg:text-[32px]">
          Hey! I&apos;m Hilary 👋🏻
        </div>
        <div className="text-sm font-light tracking-wide text-[#A3A3A3] sm:text-base">
          Product Designer
        </div>
      </div>
    </article>
  );
};

const AboutButtonSection = () => {
  return (
    <article className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5">
      <AboutButton
        route="https://www.linkedin.com/in/hilary-nguyen/"
        variant="primary"
      >
        <PlusIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        <div className="text-xs sm:text-sm lg:text-base">Connect with me</div>
      </AboutButton>
      <AboutButton route="/resume.pdf" variant="secondary">
        <DownloadIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        <div className="text-xs sm:text-sm lg:text-base">My resume</div>
      </AboutButton>
    </article>
  );
};

const AboutButton = ({
  route,
  variant = "primary",
  children,
}: {
  route: string;
  variant?: "primary" | "secondary";
  children: JSX.Element[];
}) => {
  const baseStyles =
    "flex cursor-pointer flex-row items-center gap-1 rounded-[10px] border px-4 py-2 text-sm font-medium transition-transform duration-150 hover:-translate-y-1 hover:shadow-md sm:px-5 sm:py-2.5 lg:text-base";
  const variantStyles =
    variant === "primary"
      ? "border-[#F0AECE] bg-[#F0AECE] text-white"
      : "border-[#F0AECE] bg-white text-[#F0AECE]";

  return (
    <Link href={route} target="_blank">
      <button className={`${baseStyles} ${variantStyles}`}>{children}</button>
    </Link>
  );
};
