import Image from 'next/image';
import H1 from '@/components/typography/H1';
import Macbook from '../../../public/planner/macbook.png';
import NebulaLogo from '../../../public/planner/nebulaLogo.png';

export default function PlannerHero() {
  return (
    <section className="h-[200vh] w-screen text-white">
      <article className="bg-[#6266F9] h-[150vh] flex flex-col items-center text-center">
        <H1 className="mt-[25vh]">Nebula Planner</H1>
        <div className="font-medium text-3xl leading-8 mt-8 w-[750px]">
          Software assisting students at UT Dallas with organizing their
          academic plan for a four-year degree.
        </div>
        <Image src={Macbook} alt="macbook" className="z-20" />
        <Image
          src={NebulaLogo}
          className="absolute top-40 left-0 z-0 w-[84vw]"
          alt="nebula logo"
        />
      </article>
    </section>
  );
}
