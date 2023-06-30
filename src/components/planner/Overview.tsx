import Text from '@/components/typography/Text';

export default function PlannerOverview() {
  return (
    <section className="flex flex-col text-center items-center h-[110vh] w-screen">
      <h1 className="text-4xl font-extrabold mb-[30px] text-black">Overview</h1>
      <Text className="w-[845px] mb-[90px]">
        “Nebula Planner is a software created to help students plan their
        college experience at a high level. Planner was born out of a need to
        replace Google Docs and hastily-crafted spreadsheets when planning
        degree plan.”{' '}
      </Text>
      <article className="w-[900px] flex flex-row justify-between text-left mb-[90px]">
        <OverviewDescription
          title="Role"
          body="Figma, Jira, Confluence, Notions"
        />
        <OverviewDescription title="Tools" body="UI/UX Designer, Research" />
        <OverviewDescription
          title="Team"
          body="Team of 8 Engineers and 2 Designers"
        />
        <OverviewDescription title="Duration" body="3 months" />
      </article>
      <button
        type="button"
        className=" text-3xl text-white rounded-[200px] bg-[#6266F9] p-4 flex justify-center items-center font-medium"
      >
        Check Out Final Product
      </button>
    </section>
  );
}

const OverviewDescription = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => (
  <div className="flex flex-col max-w-[210px]">
    <h3 className="text-[28px] font-bold text-[#687280] leading-[44px]">
      {title}
    </h3>
    <p className="text-xl leading-7 text-[#525252]">{body}</p>
  </div>
);
