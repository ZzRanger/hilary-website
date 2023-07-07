import Image from 'next/image';
import H1 from '@/components/typography/H1';
import HeroPhone1 from '@public/lezhin/heroPhone1.png';
import HeroPhone2 from '@public/lezhin/heroPhone2.png';
import ScrollLink from '@/components/ScrollLink';
import Text, { Weight } from '@/components/typography/Text';

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
      {/* <article className="fixed top-[20vh] right-10 gap-y-[20px] flex flex-col text-right bg-white text-black">
        <ScrollLink href="#lezhin-overview">
          <Text weight={Weight.medium}>P</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-problem">
          <Text weight={Weight.medium}>R</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-research">
          <Text weight={Weight.medium}>E</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-usability">
          <Text weight={Weight.medium}>U</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-design">
          <Text weight={Weight.medium}>I</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-conclusion">
          <Text weight={Weight.medium}>C</Text>
        </ScrollLink>
      </article> */}
      <article className="absolute top-[60vh] right-10 gap-y-[20px] flex flex-col text-right">
        <ScrollLink href="#lezhin-overview">
          <Text weight={Weight.medium}>Project Overview</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-problem">
          <Text weight={Weight.medium}>Problem</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-research">
          <Text weight={Weight.medium}>Research</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-usability">
          <Text weight={Weight.medium}>Usability Testing</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-design">
          <Text weight={Weight.medium}>UI Design Process</Text>
        </ScrollLink>
        <ScrollLink href="#lezhin-conclusion">
          <Text weight={Weight.medium}>Conclusion</Text>
        </ScrollLink>
      </article>
    </section>
  );
}
