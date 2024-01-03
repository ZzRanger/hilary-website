import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";
import { ForwardedRef, forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Advising = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  {
    return (
      <section
        ref={ref}
        className="flex h-[300vh] w-screen flex-col items-center justify-evenly bg-black text-center text-white"
      >
        <div>
          <Text weight={Weight.bold} className="mb-[10vh]">
            Meeting College Staff
          </Text>
          {/* Change to inter */}
          <h2 className="w-[88vw] text-[45px] font-bold leading-[74px]">
            These results prompt us to wonder how we can improve the
            facilitation between students and the advising office.
          </h2>
        </div>

        <article
          className="flex  h-screen w-[80vw] flex-col items-center justify-evenly bg-cover bg-center text-center"
          style={{ backgroundImage: 'url("/planner/advising.png")' }}
        >
          <Text
            weight={Weight.bold}
            className=" mt-[10vh] w-[55%] leading-[50px]"
          >
            We decided to meet with the advising staff at the Engineering school
            to understand their pain points, their workflow, and how we can help
            them.
          </Text>
          <button
            className="h-[90px] w-[420px] rounded-[50px] border-4 border-white"
            type="button"
          >
            <Link
              href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
              target="_blank"
            >
              <Text weight={Weight.bold}>View Interview Notes</Text>
            </Link>
          </button>
        </article>
        <article className="flex w-[72vw] flex-col gap-y-10 text-left">
          <ol className="list-decimal gap-y-10 space-y-10">
            <H2 className="ml-[-40px]">💡Interview Insight</H2>
            <Text weight={Weight.medium}>
              <li>
                The advising office is
                <span className="font-bold"> understaffed</span> &
                <span className="font-bold"> uses manual workflow</span>,
                manually reviewing & copying degree plans for each student.
              </li>
            </Text>
            <Text weight={Weight.medium}>
              <li>
                Because the process is
                <span className="font-bold"> not automated</span>, it is
                <span className="font-bold"> time-consuming</span> and hard to
                keep individual students’ degree documents up to date and
                accurate
              </li>
            </Text>
          </ol>
        </article>
      </section>
    );
  }
});

export default Advising;
