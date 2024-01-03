import Image from "next/image";
import H1 from "@/components/typography/H1";
import HeroPhone1 from "@public/lezhin/heroPhone1.png";
import HeroPhone2 from "@public/lezhin/heroPhone2.png";
import ScrollLink from "@/components/ScrollLink";
import Text, { Weight } from "@/components/typography/Text";

export default function LezhinHero() {
  return (
    <section className="mt-[-70px] flex h-[140vh] w-screen flex-col items-center border-2 border-black bg-hn-lezhin text-center text-white">
      <H1 className="mt-[25vh]">Lezhin Webtoon Redesign</H1>
      <div className="mt-8 w-[720px] text-[28px] font-medium leading-[40px]">
        Ann app redesign project that reimagine the Lezhin app to help address
        its problems and enhance the user experience through UX.
      </div>
      <article className="mt-[15vh] flex flex-row justify-center">
        <div className="relative w-[320px]">
          <Image src={HeroPhone1} alt="macbook" className="z-20 " />
        </div>
        <div className="w-[320px]">
          <Image src={HeroPhone2} alt="macbook" className="z-20" />
        </div>
      </article>
    </section>
  );
}
