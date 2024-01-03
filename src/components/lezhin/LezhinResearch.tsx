import Image from "next/image";
import H1 from "@/components/typography/H1";
import Text, { Weight } from "@/components/typography/Text";
import ResearchPhone from "../../../public/lezhin/researchPhone.png";

export default function LezhinResearch() {
  return (
    <section
      id="lezhin-research"
      className="grid h-[150vh] w-screen grid-cols-[2fr_3fr] place-items-center"
    >
      <article className="flex flex-col items-center">
        <H1 className=" mb-[50px] ">📝 Research</H1>
        <ol className="list-decimal">
          <Text weight={Weight.medium} className="leading-[50px]">
            <li>Competitor Analysis</li>
            <li>Users Survey</li>
            <li>Usability Testing</li>
            <li>Users Personas</li>
          </Text>
        </ol>
      </article>
      <article className="mt-[200px]">
        <Image className="w-[85%]" src={ResearchPhone} alt="Macbook" />
      </article>
    </section>
  );
}
