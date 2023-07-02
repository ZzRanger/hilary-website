import Image from 'next/image';
import H1 from '@/components/typography/H1';
import HeroPhone1 from '@public/lezhin/heroPhone1.png';
import HeroPhone2 from '@public/lezhin/heroPhone2.png';

export default function LezhinHero() {
  return (
    <section className="bg-hn-lezhin h-[140vh] flex flex-col items-center text-center text-white w-screen border-black border-2">
      <H1 className="mt-[25vh]">Lezhin Webtoon Redesign</H1>
      <div className="font-medium text-[28px] leading-[40px] mt-8 w-[720px]">
        Ann app redesign project that reimagine the Lezhin app to help address
        its problems and enhance the user experience through UX.
      </div>
      <article className="flex flex-row justify-center mt-[15vh]">
        <div className="w-[320px] relative">
          <Image src={HeroPhone1} alt="macbook" className="z-20 " />
        </div>
        <div className="w-[320px]">
          <Image src={HeroPhone2} alt="macbook" className="z-20" />
        </div>
      </article>
    </section>
  );
}
