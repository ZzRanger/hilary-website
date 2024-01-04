import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import { ForwardedRef, forwardRef } from "react";

const Empathy = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  Empathy.displayName = "Empathy";

  return (
    <section
      ref={ref}
      className="my-[20vh] flex flex-col items-center gap-y-[82px] text-center"
    >
      <H2>👥 Empathy Map</H2>
      <Text
        weight={Weight.medium}
        className="w-[86vw] text-left text-[#6E6E73]"
      >
        We created an empathy map to prioritize key problems and behaviors to
        determine the next design step
      </Text>
      <article className="grid grid-cols-[2fr_3fr_3fr_3fr] gap-8">
        <EmpathySquareLabel label="Says" />
        <EmpathySquare className="bg-[#2916C5]">
          I&apos;m finding it difficult to understand all these degree
          requirements.
        </EmpathySquare>

        <EmpathySquare className="bg-[#2916C5]">
          The lack of available academic counseling is really bothering me.
        </EmpathySquare>
        <EmpathySquare className="bg-[#2916C5]">
          It feels like I&apos;m wasting time and money due to poor planning.
        </EmpathySquare>
        <EmpathySquareLabel label="Thinks" />
        <EmpathySquare className="bg-[#523EF5]">
          Am I understanding these prerequisites correctly?
        </EmpathySquare>
        <EmpathySquare className="bg-[#523EF5]">
          What if I waste time or money by taking the wrong classes?
        </EmpathySquare>
        <EmpathySquare className="bg-[#523EF5]">
          Why are so many requirements?
        </EmpathySquare>
        <EmpathySquareLabel label="Feels" />
        <EmpathySquare className="bg-[#6166F0]">
          I&apos;m scared I might make a mistake that could impact my future
          career.
        </EmpathySquare>
        <EmpathySquare className="bg-[#6166F0]">
          I&apos;m frustrated because there&apos;s not enough support or
          guidance from my school.
        </EmpathySquare>
        <EmpathySquare className="bg-[#6166F0]">
          I&apos;m anxious and stressed about figuring out these complex degree
          requirements.
        </EmpathySquare>
        <EmpathySquareLabel label="Does" />
        <EmpathySquare className="bg-[#C2C9FB]">
          I&apos;m spending hours trying to research degree requirements online.
        </EmpathySquare>

        <EmpathySquare className="bg-[#C2C9FB]">
          I&apos;m attempting to contact counselors who seem to be always busy
          or unavailable.
        </EmpathySquare>
        <EmpathySquare className="bg-[#C2C9FB]">
          I&apos;m juggling between different plans, unsure of the best path to
          take.
        </EmpathySquare>
      </article>
      <article className="mt-10 flex h-fit w-[90vw] items-center justify-center rounded-[30px] bg-[#F5F5F5] py-[62px]">
        <div className="flex w-[80%] flex-col text-left">
          <ol className="list-decimal gap-y-10 space-y-10">
            <H2 className="ml-[-40px]">💡 Research Takeaway</H2>

            <li className="text-[30px] font-bold">
              Lack of Automation:{" "}
              <Text className="inline text-[#6E6E73]">
                There&apos;s no automation process in the planning. Both
                students and advising staff use Excel sheet and the
                university&apos;s course catalog to transfer and collect course
                information
              </Text>
            </li>
            <li className="text-[30px] font-bold">
              Students don&apos;t understand their degree requirements:{" "}
              <Text className="inline text-[#6E6E73]">
                Students&apos; confusion caused by varying college systems and
                degree requirements leads to advisors spending more time
                answering questions, resulting in delayed responses as they try
                to catch up with degree validation work.
              </Text>
            </li>
          </ol>
        </div>
      </article>
    </section>
  );
});

const EmpathySquare = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`flex h-72 w-72 items-center justify-center rounded-[20px] p-4 text-[25px] font-medium text-white  ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const EmpathySquareLabel = ({ label }: { label: string }) => (
  <div className="flex h-72 items-center justify-center text-[40px] font-medium">
    {label}
  </div>
);

export default Empathy;
