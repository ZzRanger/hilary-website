import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";
import CompetitiveAnalysis from "@public/lezhin/competitive.png";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

const Competitive = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  {
    Competitive.displayName = "Competitive";
    return (
      <section
        ref={ref}
        className="flex h-fit w-screen flex-col items-center rounded-[20px] bg-black py-[30vh] text-center text-white"
      >
        <div className="flex flex-col items-center gap-y-[100px]">
          <Text weight={Weight.bold} className="]">
            Competitor Analysis
          </Text>
          {/* Change to inter */}
          <h2 className="w-[88vw] text-[45px] font-bold leading-[74px]">
            A Competitive Analysis was performed to examine Lezhin&apos;s
            competitors to understand why Lezhin&apos;s app is performing poorly
            in the market.
          </h2>

          <Image src={CompetitiveAnalysis} alt="analysis" className="w-[90%]" />

          <button
            className="h-[90px] w-[420px] rounded-[50px] border-4 border-white"
            type="button"
          >
            <Link
              href="https://www.notion.so/xodaydream/d7f905692b284d7ba9dcbb6d98659fc8?v=05e59872fdd649219ca272d5135a7095&pvs=4"
              target="_blank"
            >
              <Text weight={Weight.bold}>View Competitive Analysis</Text>
            </Link>
          </button>
        </div>
        <article className="flex w-[72vw] flex-col gap-y-10 text-left">
          <ol className="mt-[20vh] list-decimal gap-y-10 space-y-10">
            <H2 className="ml-[-40px]">💡Analysis Insight</H2>

            <Text weight={Weight.medium}>
              <li>
                The competing apps stood out with their rich interactive
                features, such as
                <span className="font-bold">
                  comment sections and a wide selection of both free and paid
                  content, setting them apart from Lezhin
                </span>
                and its offerings.
              </li>
            </Text>
            <Text weight={Weight.medium}>
              <li>
                Furthermore, these companies place{" "}
                <span className="font-bold">
                  {" "}
                  great emphasis on enhancing the user experience
                </span>
                , as reflected in their consistently high ratings
              </li>
            </Text>
          </ol>
        </article>
      </section>
    );
  }
});
export default Competitive;
