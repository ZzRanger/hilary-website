import Image from "next/image";
import Text, { Weight } from "@/components/typography/Text";
import H1 from "@/components/typography/H1";
import Macbook3 from "../../../public/planner/macbook3.png";
import { ForwardedRef, forwardRef } from "react";

const Usability = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section
      ref={ref}
      id="planner-usability"
      className="flex h-[120vh] w-screen flex-row items-center bg-black"
    >
      <Image src={Macbook3} alt="Macbook" className="w-[65%]" />
      <article className="flex w-[35%] flex-col text-white">
        <H1 className="mb-10">Usability Test</H1>
        <Text weight={Weight.medium}>1. Old Prototype</Text>
        <Text weight={Weight.medium}>2. Testing Key Insight</Text>
        <Text weight={Weight.medium}>3. Pain Point</Text>
      </article>
    </section>
  );
});

export default Usability;
