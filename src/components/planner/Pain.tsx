export default function Pain() {
  return (
    <section className="w-screen bg-[#F5F5F5] py-[120px] flex flex-col items-center gap-y-[70px]">
      <div className="text-[30px] font-bold">Pain Points</div>
      <div className="text-[50px] font-bold w-[70%] text-center">
        We identified various pain points with the old prototype
      </div>
      <article className="flex flex-row flex-wrap w-[82vw] gap-[2vw]">
        <PainCard className="bg-[#312E81]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">No Onboarding</div>
            <div>
              Testing showed students were confused about next steps due to the
              website setup.
            </div>
          </div>
        </PainCard>
        <PainCard className="bg-[#312E81]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">Better UX Copywriting</div>
            <div>
              Interviews revealed confusion about certain function terms like
              "Template Plan."
            </div>
          </div>
        </PainCard>
        <PainCard className="bg-[#312E81]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">Transfer Credits</div>
            <div>
              Some students wanted a feature to view and understand their
              transfer credits.
            </div>
          </div>
        </PainCard>
        <PainCard className="bg-[#3730A3]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">Lack of Course Progress</div>
            <div>
              Students wanted a visual way to track major requirement progress.
            </div>
          </div>
        </PainCard>
        <PainCard className="bg-[#4338CA]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">Give Customization Option</div>
            <div>
              Students wanted more customization, like color-coding
              semesters/courses and editing semester durations.
            </div>
          </div>
        </PainCard>
        <PainCard className="bg-[#4F46E5]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">Better Plan Layout</div>
            <div>The current course layout is cluttered and inefficient</div>
          </div>
        </PainCard>
        <PainCard className="bg-[#312E81]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">No Onboarding</div>
            <div>
              Testing showed students were confused about next steps due to the
              website setup.
            </div>
          </div>
        </PainCard>
        <PainCard className="bg-[#818CF8]">
          <div className="flex flex-col items-center text-center text-[30px]">
            <div className=" font-bold">No Onboarding</div>
            <div>
              Testing showed students were confused about next steps due to the
              website setup.
            </div>
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
