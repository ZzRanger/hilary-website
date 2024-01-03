import ScrollLink from "@/components/ScrollLink";
import Text, { Weight } from "@/components/typography/Text";

export default function PlannerOverview() {
  return (
    <section
      id="planner-overview"
      className="mt-[25vh] flex w-screen flex-col items-center text-center"
    >
      <h1 className="mb-[30px] text-4xl font-extrabold text-black">Overview</h1>
      <Text className="mb-[90px] w-[845px]">
        “Nebula Planner is a software created to help students plan their
        college experience at a high level. Planner was born out of a need to
        replace Google Docs and hastily-crafted spreadsheets when planning
        degree plan.”
      </Text>
      <article className="mb-[90px] flex w-[900px] flex-row justify-between text-left">
        <OverviewDescription title="Role" body="UI/UX Designer, Research" />
        <OverviewDescription
          title="Tools"
          body="Figma, Jira, Confluence, Notions"
        />
        <OverviewDescription
          title="Team"
          body="Team of 8 Engineers and 2 Designers"
        />
        <OverviewDescription title="Duration" body="3 months" />
      </article>
      <button
        type="button"
        className="flex items-center justify-center rounded-[200px] bg-[#6266F9] px-6 py-[10px] shadow-md"
      >
        <Text className="leading-[44px] text-white" weight={Weight.medium}>
          <ScrollLink href="#planner-final">Check Out Final Product</ScrollLink>
        </Text>
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
  <div className="flex max-w-[210px] flex-col">
    <h3 className="text-[28px] font-bold leading-[44px] text-[#687280]">
      {title}
    </h3>
    <p className="text-xl leading-7 text-[#525252]">{body}</p>
  </div>
);
