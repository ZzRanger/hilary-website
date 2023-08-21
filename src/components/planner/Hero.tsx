import Image from 'next/image';
import H1 from '@/components/typography/H1';
import ScrollLink from '@/components/ScrollLink';
import Text, { Weight } from '@/components/typography/Text';
import Macbook from '../../../public/planner/macbook.png';
import NebulaLogo from '../../../public/planner/nebulaLogo.png';

export default function PlannerHero() {
  return (
    <section className="bg-[#6266F9] mt-[-70px] h-[140vh] flex flex-col items-center text-center text-white w-screen relative">
      <H1 className="mt-[25vh]">Nebula Planner</H1>
      <div className="font-medium text-[28px] leading-[40px] mt-8 w-[720px]">
        Software assisting students at UT Dallas with organizing their academic
        plan for a four-year degree.
      </div>
      <Image src={Macbook} alt="macbook" className="z-20 w-[80vw]" />
      <Image
        src={NebulaLogo}
        className="absolute top-[120px] left-0 z-0 w-[81vw]"
        alt="nebula logo"
      />
    </section>
  );
}
