import Carousel from "@/components/Carousel";
import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Persona1 from "@public/lezhin/persona1.png";
import Persona2 from "@public/lezhin/persona2.png";
import Persona3 from "@public/lezhin/persona3.png";
import Image from "next/image";

export default function Personas() {
  return (
    <section className="flex w-[80%] flex-col items-center gap-[70px] py-[60px] text-left">
      <Text weight={Weight.bold}>Users Persona & Flows</Text>
      <H2 className="text-center">
        I decided to organize all of my user’s data and pain points into user
        personas to better defined the problems I'm trying to solve.
      </H2>
      <Carousel className="w-[60vw]">
        <Image src={Persona1} priority alt="" />
        <Image src={Persona2} priority alt="" />
        <Image src={Persona3} priority alt="" />
      </Carousel>
    </section>
  );
}
