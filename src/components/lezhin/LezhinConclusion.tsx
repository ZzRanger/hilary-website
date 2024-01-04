import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Image from "next/image";
import Table from "@public/lezhin/table.png";
import Final1 from "@public/lezhin/final1.png";
import Final2 from "@public/lezhin/final2.png";
import Final3 from "@public/lezhin/final3.png";
import Final4 from "@public/lezhin/final4.png";
import Final5 from "@public/lezhin/final5.png";

export default function LezhinConclusion() {
  return (
    <section
      id="conclusion"
      className="flex w-[90vw] flex-col items-center space-y-[80px] py-[92px]"
    >
      <H2>Conclusion</H2>
      <Text className="w-[89vw] leading-[50px]">
        The new prototype resulted in users completing the given tasks in
        usability testing 2x faster. I also received positive feedback from
        users about the new layout, allowing them to feel more comfortable using
        the app.
      </Text>
      <Image src={Table} alt="table" />
      <article className="mt-10 flex h-fit items-center justify-center rounded-[30px] bg-[#F5F5F5] py-[62px]">
        <div className="flex w-[92%] flex-col gap-y-10 space-y-10 text-center tabular-nums leading-[50px]">
          <H2 className="ml-[-40px]">💭 Key Takeaways</H2>
          <Text weight={Weight.bold}>
            1. Prioritize features through interviews and ranking to focus on
            designing a solution that addresses user needs effectively.
          </Text>
          <Text weight={Weight.bold}>
            2. User testing is an ongoing process, even after finalizing the
            prototype, as design requires constant iteration and improvement
            based on user feedback.
          </Text>
        </div>
      </article>
      <article className="grid grid-cols-2 gap-[25px]">
        <Image src={Final1} alt="image" className="col-span-full" />
        <Image src={Final2} alt="image" />
        <Image src={Final3} alt="image" />
        <Image src={Final4} alt="image" />
        <Image src={Final5} alt="image" />
      </article>
    </section>
  );
}
