import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';

export default function Advising() {
  return (
    <section className="h-[300vh] w-screen flex flex-col items-center text-center bg-black text-white justify-evenly">
      <div>
        <Text weight={Weight.bold} className="mb-[10vh]">
          Meeting College Staff
        </Text>
        {/* Change to inter */}
        <h2 className="font-bold text-[45px] leading-[74px] w-[88vw]">
          These results prompt us to wonder how we can improve the facilitation
          between students and the advising office.
        </h2>
      </div>

      <article
        className="bg-cover  bg-center w-[80vw] h-screen flex flex-col items-center text-center justify-evenly"
        style={{ backgroundImage: 'url("/planner/advising.png")' }}
      >
        <Text
          weight={Weight.bold}
          className=" w-[55%] mt-[10vh] leading-[50px]"
        >
          We decided to meet with the advising staff at the Engineering school
          to understand their pain points, their workflow, and how we can help
          them.
        </Text>
        <button
          className="w-[420px] rounded-[50px] border-4 border-white h-[90px]"
          type="button"
        >
          <Link
            href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
            target="_blank"
          >
            <Text weight={Weight.bold}>View Interview Notes</Text>
          </Link>
        </button>
      </article>
      <article className="text-left flex flex-col gap-y-10 w-[72vw]">
        <ol className="list-decimal gap-y-10 space-y-10">
          <H2 className="ml-[-40px]">💡Interview Insight</H2>
          <Text weight={Weight.medium}>
            <li>
              The advising office is
              <span className="font-bold"> understaffed</span> &
              <span className="font-bold"> uses manual workflow</span>, manually
              reviewing & copying degree plans for each student.
            </li>
          </Text>
          <Text weight={Weight.medium}>
            <li>
              Because the process is
              <span className="font-bold"> not automated</span>, it is
              <span className="font-bold"> time-consuming</span> and hard to
              keep individual students’ degree documents up to date and accurate
            </li>
          </Text>
        </ol>
      </article>
    </section>
  );
}
