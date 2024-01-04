import Carousel from "@/components/Carousel";
import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Persona1 from "@public/lezhin/persona1.png";
import Persona2 from "@public/lezhin/persona2.png";
import Persona3 from "@public/lezhin/persona3.png";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

const Personas = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  Personas.displayName = "Personas";
  return (
    <section
      ref={ref}
      className="flex w-[80%] flex-col items-center gap-[70px] py-[60px] text-left"
    >
      <Text weight={Weight.bold}>Users Persona & Flows</Text>
      <H2 className="text-center">
        I decided to organize all of my user&apos;s data and pain points into
        user personas to better defined the problems I&apos;m trying to solve.
      </H2>
      <Carousel className="w-[60vw]">
        <Image src={Persona1} priority alt="" />
        <Image src={Persona2} priority alt="" />
        <Image src={Persona3} priority alt="" />
      </Carousel>
    </section>
  );
});

export default Personas;
