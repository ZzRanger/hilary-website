import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';

export default function Pain() {
  return (
    <section className="w-screen bg-[#F5F5F5] py-[120px] flex flex-col items-center gap-y-[70px]">
      <Text weight={Weight.bold}>Pain Points</Text>
      <H2 className=" w-[70%] text-center">
        We identified various pain points with the old prototype
      </H2>
      <article className="flex flex-row flex-wrap w-[82vw] gap-[2vw]">
        <PainCard className="bg-[#312E81]">
          <div className="flex flex-col items-center text-center">
            <Text weight={Weight.bold}>No Onboarding</Text>
            <Text>
              Testing showed students were confused about next steps due to the
              website setup.
            </Text>
          </div>
        </PainCard>
        <PainCard className="bg-[#3730A3]">
          <div className="flex flex-col items-center text-center">
            <Text weight={Weight.bold}>Better UX Copywriting</Text>
            <Text>
              Interviews revealed confusion about certain function terms like
              "Template Plan."
            </Text>
          </div>
        </PainCard>
        <PainCard className="bg-[#4338CA]">
          <div className="flex flex-col items-center text-center">
            <Text weight={Weight.bold}>Transfer Credits</Text>
            <Text>
              Some students wanted a feature to view and understand their
              transfer credits.
            </Text>
          </div>
        </PainCard>
        <PainCard className="bg-[#4F46E5]">
          <div className="flex flex-col items-center text-center">
            <Text weight={Weight.bold}>Lack of Course Progress</Text>
            <Text>
              Students wanted a visual way to track major requirement progress.
            </Text>
          </div>
        </PainCard>
        <PainCard className="bg-[#6366f1]">
          <div className="flex flex-col items-center text-center">
            <Text weight={Weight.bold}>Give Customization Option</Text>
            <Text>
              Students wanted more customization, like color-coding
              semesters/courses and editing semester durations.
            </Text>
          </div>
        </PainCard>
        <PainCard className="bg-[#818cf8]">
          <div className="flex flex-col items-center text-center">
            <Text weight={Weight.bold}>Better Plan Layout</Text>
            <Text>The current course layout is cluttered and inefficient</Text>
          </div>
        </PainCard>
      </article>
    </section>
  );
}

const PainCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`w-[40vw] h-[50vh] rounded-[20px] text-white flex justify-center items-center text-[25px] font-medium p-4  ${
      className ?? ''
    }`}
  >
    {children}
  </div>
);
