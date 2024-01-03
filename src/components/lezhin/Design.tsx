import Image from "next/image";
import Text, { Weight } from "@/components/typography/Text";
import H1 from "@/components/typography/H1";
import IPadMockup from "../../../public/lezhin/iPadMockup.png";

export default function Design() {
  return (
    <section
      id="lezhin-design"
      className="flex h-[150vh] w-screen flex-row items-center gap-x-[40px] bg-black tabular-nums"
    >
      <article className="w-[50%]">
        <Image src={IPadMockup} alt="Macbook" />
      </article>
      <article className="flex w-[50%] flex-col text-white">
        <H1 className="mb-10">🎨 Design Process</H1>
        <Text weight={Weight.medium}>1. Users Persona</Text>
        <Text weight={Weight.medium}>2. Initial User Flow</Text>
        <Text weight={Weight.medium}>3. Wireframe Sketches & Mid-Fi</Text>
        <Text weight={Weight.medium}>4. Final Protoype</Text>
      </article>
    </section>
  );
}
