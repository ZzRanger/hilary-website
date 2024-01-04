import Image from "next/image";
import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Architecture from "../../../public/planner/architecture.png";
import { forwardRef, ForwardedRef } from "react";

const Information = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  Information.displayName = "Information";
  return (
    <section
      ref={ref}
      className="my-[178px] flex flex-col items-center text-center"
    >
      <Text weight={Weight.bold} className="mb-[44px]">
        Informational Architecture
      </Text>
      <H2 className="mb-[100px] w-[80%]">
        I decided to create an informational architecture for this project to
        enhance user experience by organizing and structuring the website
        content more effectively.
      </H2>
      <Image src={Architecture} alt="image" className="w-[80%]" />
    </section>
  );
});

export default Information;
