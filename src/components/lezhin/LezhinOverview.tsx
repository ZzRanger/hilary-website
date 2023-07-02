import Text, { Weight } from '@/components/typography/Text';

export default function LezhinOverview() {
  return (
    <section className="flex flex-col text-center items-center w-screen mt-[32vh]">
      <h1 className="text-4xl font-extrabold mb-[30px] text-black">Overview</h1>
      <Text className="w-[845px] mb-[90px]">
        ““Lezhin, a webtoon reading app, faced sales struggles and competition
        due to dismal reviews and rival sites. This app redesign project aims to
        improve Lezhin's user experience and address its issues through UX
        enhancements.”
      </Text>
      <article className="w-[900px] flex flex-row justify-between text-left mb-[90px]">
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
        className="rounded-[200px] bg-hn-lezhin px-6 py-[10px] flex justify-center items-center shadow-md"
      >
        <Text className="leading-[44px] text-white" weight={Weight.medium}>
          Check Out Final Product
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
  <div className="flex flex-col max-w-[210px]">
    <h3 className="text-[28px] font-bold text-[#687280] leading-[44px]">
      {title}
    </h3>
    <p className="text-xl leading-7 text-[#525252]">{body}</p>
  </div>
);
