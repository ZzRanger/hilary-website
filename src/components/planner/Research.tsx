import Image from "next/image";
import H1 from "@/components/typography/H1";
import Text, { Weight } from "@/components/typography/Text";
import Macbook2 from "../../../public/planner/macbook2.png";
import { ForwardedRef, forwardRef } from "react";

const Research = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  Research.displayName = "Research";
  return (
    <section
      ref={ref}
      id="research"
      className="grid h-[120vh] w-screen grid-cols-[2fr_3fr] place-items-center"
    >
      <article className="flex flex-col items-center">
        <H1 className=" mb-[50px] ">📝 Research</H1>
        <ol className="list-decimal">
          <Text weight={Weight.medium} className="leading-[50px]">
            <li>Interview</li>
            <li>Empathy Map</li>
            <li>Research Takeaway</li>
          </Text>
        </ol>
      </article>
      <article className="">
        <Image className="w-[90%]" src={Macbook2} alt="Macbook" />
      </article>
    </section>
  );
});

export default Research;
