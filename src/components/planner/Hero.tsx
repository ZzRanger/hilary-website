import Image from "next/image";
import H1 from "@/components/typography/H1";
import ScrollLink from "@/components/ScrollLink";
import Text, { Weight } from "@/components/typography/Text";
import Macbook from "../../../public/planner/macbook.png";
import NebulaLogo from "../../../public/planner/nebulaLogo.png";

export default function PlannerHero() {
  return (
    <section className="relative mt-[-70px] flex h-[140vh] w-screen flex-col items-center bg-[#6266F9] text-center text-white">
      <H1 className="mt-[25vh]">Nebula Planner</H1>
      <div className="mt-8 w-[720px] text-[28px] font-medium leading-[40px]">
        Software assisting students at UT Dallas with organizing their academic
        plan for a four-year degree.
      </div>
      <Image src={Macbook} alt="macbook" className="z-20 w-[80vw]" />
      <Image
        src={NebulaLogo}
        className="absolute left-0 top-[120px] z-0 w-[81vw]"
        alt="nebula logo"
      />
    </section>
  );
}
