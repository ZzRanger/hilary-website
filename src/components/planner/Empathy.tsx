import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import { ForwardedRef, forwardRef } from 'react';

const Empathy = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section
      ref={ref}
      className="flex flex-col items-center text-center my-[20vh] gap-y-[82px]"
    >
      <H2>👥 Empathy Map</H2>
      <Text
        weight={Weight.medium}
        className="text-left w-[86vw] text-[#6E6E73]"
      >
        We created an empathy map to prioritize key problems and behaviors to
        determine the next design step
      </Text>
      <article className="grid grid-cols-[2fr_3fr_3fr_3fr] gap-8">
        <EmpathySquareLabel label="Says" />
        <EmpathySquare className="bg-[#2916C5]">
          I'm finding it difficult to understand all these degree requirements.
        </EmpathySquare>

        <EmpathySquare className="bg-[#2916C5]">
          The lack of available academic counseling is really bothering me.
        </EmpathySquare>
        <EmpathySquare className="bg-[#2916C5]">
          It feels like I'm wasting time and money due to poor planning.
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
          I'm scared I might make a mistake that could impact my future career.
        </EmpathySquare>
        <EmpathySquare className="bg-[#6166F0]">
          I'm frustrated because there's not enough support or guidance from my
          school.
        </EmpathySquare>
        <EmpathySquare className="bg-[#6166F0]">
          I'm anxious and stressed about figuring out these complex degree
          requirements.
        </EmpathySquare>
        <EmpathySquareLabel label="Does" />
        <EmpathySquare className="bg-[#C2C9FB]">
          I'm spending hours trying to research degree requirements online.
        </EmpathySquare>

        <EmpathySquare className="bg-[#C2C9FB]">
          I'm attempting to contact counselors who seem to be always busy or
          unavailable.
        </EmpathySquare>
        <EmpathySquare className="bg-[#C2C9FB]">
          I'm juggling between different plans, unsure of the best path to take.
        </EmpathySquare>
      </article>
      <article className="h-fit rounded-[30px] bg-[#F5F5F5] w-[90vw] flex justify-center items-center mt-10 py-[62px]">
        <div className="text-left flex flex-col w-[80%]">
          <ol className="list-decimal gap-y-10 space-y-10">
            <H2 className="ml-[-40px]">💡 Research Takeaway</H2>

            <li className="text-[30px] font-bold">
              Lack of Automation:{' '}
              <Text className="text-[#6E6E73] inline">
                There's no automation process in the planning. Both students and
                advising staff use Excel sheet and the university's course
                catalog to transfer and collect course information
              </Text>
            </li>
            <li className="text-[30px] font-bold">
              Students don't understand their degree requirements:{' '}
              <Text className="text-[#6E6E73] inline">
                Students' confusion caused by varying college systems and degree
                requirements leads to advisors spending more time answering
                questions, resulting in delayed responses as they try to catch
                up with degree validation work.
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
    className={`w-72 h-72 rounded-[20px] text-white flex justify-center items-center text-[25px] font-medium p-4  ${
      className ?? ''
    }`}
  >
    {children}
  </div>
);

const EmpathySquareLabel = ({ label }: { label: string }) => (
  <div className="h-72 flex items-center justify-center text-[40px] font-medium">
    {label}
  </div>
);

export default Empathy;
