import ScrollLink from "@/components/ScrollLink";
import Text, { Weight } from "@/components/typography/Text";

export default function LezhinOverview() {
  return (
    <section
      id="lezhin-overview"
      className="mt-[32vh] flex w-screen flex-col items-center text-center"
    >
      <h1 className="mb-[30px] text-4xl font-extrabold text-black">Overview</h1>
      <Text className="mb-[90px] w-[845px]">
        ““Lezhin, a webtoon reading app, faced sales struggles and competition
        due to dismal reviews and rival sites. This app redesign project aims to
        improve Lezhin's user experience and address its issues through UX
        enhancements.”
      </Text>
      <article className="mb-[90px] flex w-[900px] flex-row justify-between text-left">
        <OverviewDescription title="Role" body="UI/UX Designer, Research" />
        <OverviewDescription title="Tools" body="Figma, Jira, Notion" />
        <OverviewDescription
          title="Responsibilities"
          body="Users Research, Usability Testing, Visual Design"
        />
        <OverviewDescription title="Duration" body="1 month" />
      </article>
      <button
        type="button"
        className="flex items-center justify-center rounded-[200px] bg-hn-lezhin px-6 py-[10px] shadow-md"
      >
        <Text className="leading-[44px] text-white" weight={Weight.medium}>
          <ScrollLink href="#lezhin-final">Check Out Final Product</ScrollLink>
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
