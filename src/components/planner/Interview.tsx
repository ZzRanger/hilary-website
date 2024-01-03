import Link from "next/link";
import H1 from "@/components/typography/H1";
import Text, { Weight } from "@/components/typography/Text";
import Button from "@/components/Button";

import PieSurvey1 from "@/components/planner/PieSurvey1";
import PieSurvey2 from "@/components/planner/PieSurvey2";
import PieSurvey3 from "@/components/planner/PieSurvey3";
import Carousel from "@/components/Carousel";
import { IndicatorType } from "@/app/(profile)/about/page";

type GraphType = {
  description: string;
  element: JSX.Element;
};
export default function Interview() {
  const graphs: GraphType[] = [
    {
      description:
        "42% of students meet advisors only when they have questions or concerns, despite the university's recommendation of meeting once per semester",
      element: <PieSurvey1 />,
    },
    {
      description:
        "69% of students feel neutral or dissatisfied with the availability of the advisors",
      element: <PieSurvey2 />,
    },
    {
      description:
        "42% of students feel the quality of advising support is moderately effective",
      element: <PieSurvey3 />,
    },
  ];
  return (
    <>
      {/* Included wrapper div w/ black background so that top & bottom border looks rounded & meshes cleanly */}
      <div className="h-[200vh] w-screen bg-gradient-to-b from-white to-black">
        <section className="relative z-10 flex h-[200vh] flex-col items-center justify-between rounded-[50px] bg-[#F5F5F5] py-20 text-center">
          <H1>Interviews</H1>
          <Text weight={Weight.medium} className="w-[80%]">
            We surveyed and interviewed students to understand their degree
            planning habits and perceptions of advising quality. The survey
            gathered
            <span className="font-bold"> 141 responses</span>
          </Text>
          <Carousel indicators={IndicatorType.outside} className="w-[60vw]">
            {graphs.map((graphElm) => (
              <div className="flex w-[60vw] flex-shrink-0 flex-col items-center justify-center gap-y-20 pb-10">
                <div className="w-[50vw]">{graphElm.element}</div>
                <Text weight={Weight.medium}>{graphElm.description}</Text>
              </div>
            ))}
          </Carousel>
          <Button className="hover:opacity-50">
            <Link
              target="_blank"
              href="https://utdallas.yul1.qualtrics.com/reports/public/dXRkYWxsYXMtNjQ4ZTZkNTA2YmQxOTcwMDA4OGMwZDEzLVVSX2JIbkZQZVgxVFhUQW5NcQ=="
            >
              <Text weight={Weight.bold}>View Survey Results</Text>
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
