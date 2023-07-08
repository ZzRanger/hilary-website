import Image from 'next/image';
import H1 from '@/components/typography/H1';
import ScrollLink from '@/components/ScrollLink';
import Text, { Weight } from '@/components/typography/Text';
import Macbook from '../../../public/planner/macbook.png';
import NebulaLogo from '../../../public/planner/nebulaLogo.png';

export default function PlannerHero() {
  return (
<<<<<<< Updated upstream
    <section className="bg-[#6266F9] h-[140vh] flex flex-col items-center text-center text-white w-screen relative">
      <H1 className="mt-[25vh]">Nebula Planner</H1>
      <div className="font-medium text-[28px] leading-[40px] mt-8 w-[720px]">
        Software assisting students at UT Dallas with organizing their academic
        plan for a four-year degree.
      </div>
      <Image src={Macbook} alt="macbook" className="z-20 w-[80vw]" />
=======
    <section className="bg-[#6266F9] flex flex-col items-center text-center text-white w-screen relative">
      <H1 className="mt-[25vh]">Nebula Planner</H1>
      <div className="font-medium text-[2rem] leading-[40px] mt-8 w-[720px]">
        Software assisting students at UT Dallas with organizing their academic
        plan for a four-year degree.
      </div>
      <Image src={Macbook} alt="macbook" className="z-20 w-[1100px]" />
>>>>>>> Stashed changes
      <Image
        src={NebulaLogo}
        className="absolute top-[120px] left-0 z-0 w-[81vw]"
        alt="nebula logo"
      />
      <article className="absolute top-[60vh] right-10 gap-y-[20px] flex flex-col text-right">
        <ScrollLink href="#planner-overview">
          <Text weight={Weight.medium}>Project Overview</Text>
        </ScrollLink>
        <ScrollLink href="#planner-problem">
          <Text weight={Weight.medium}>Problem</Text>
        </ScrollLink>
        <ScrollLink href="#planner-research">
          <Text weight={Weight.medium}>Research</Text>
        </ScrollLink>
        <ScrollLink href="#planner-usability">
          <Text weight={Weight.medium}>Usability Testing</Text>
        </ScrollLink>
        <ScrollLink href="#planner-design">
          <Text weight={Weight.medium}>UI Design Process</Text>
        </ScrollLink>
        <ScrollLink href="#planner-conclusion">
          <Text weight={Weight.medium}>Conclusion</Text>
        </ScrollLink>
      </article>
    </section>
  );
}
