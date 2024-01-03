import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";
import { ForwardedRef, forwardRef } from "react";

const UsabilityDescription = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-[65px] py-[60px] text-center"
    >
      <Text weight={Weight.bold} className="w-[80%]">
        Usability Test
      </Text>
      <H2 className="w-[80%]">
        Goal: Redesign Planner to be user-friendly and simplified degree
        requirements. How?
      </H2>
      <Text weight={Weight.medium} className="w-[80%]">
        We understood that our project needed to be more helpful for students.
        So, we started to test how easy it was to use the old model and listened
        to the problems students were facing.
      </Text>
      <iframe
        title="old video"
        src="https://drive.google.com/file/d/1wr8oAnSEb6RfL5l0TYxvrvzbAC4U774b/preview"
        allow="autoplay"
        style={{
          borderRadius: "30px",
          height: "100vh",
          width: "90vw",
        }}
      />

      <Text weight={Weight.medium} className="w-[80%] text-[#6E6E73]">
        Nebula Planner Old Version
      </Text>
      <button
        className="h-[90px] w-[420px] rounded-[50px] border-4 border-black"
        type="button"
      >
        <Link href="https://beta.planner.utdnebula.com/" target="_blank">
          <Text weight={Weight.bold}>View Old Prototype</Text>
        </Link>
      </button>
      <article className="flex w-[90%] flex-col rounded-[30px] bg-[#F5F5F5] px-[40px] py-[80px] text-left">
        <Text weight={Weight.bold}>
          <div className="mb-[50px] text-[50px]">💡 Testing Key Insight</div>
          <div>
            1. Users were confused about the general UI and the purpose of
            Planner
          </div>
          <div>
            2. Users expressed the need to be able to customize their plans
            better
          </div>
          <div>
            3. Users have different references on how courses should be searched
            and display
          </div>
        </Text>
      </article>
      <article className="flex h-[50vh] items-center justify-center">
        <button
          className="h-[90px] w-fit rounded-[50px] border-4 border-black px-[50px] py-[20px]"
          type="button"
        >
          <Link
            href="https://www.notion.so/xodaydream/Nebula-Planner-Interviews-Tasks-b5758f4f280844b0ad093593067fd8c5?pvs=4"
            target="_blank"
          >
            <Text weight={Weight.bold}>View User Interview Database</Text>
          </Link>
        </button>
      </article>
    </section>
  );
});

export default UsabilityDescription;
