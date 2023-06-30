import Link from 'next/link';
import H1 from '@/components/typography/H1';
import Text, { Weight } from '@/components/typography/Text';

export default function Interview() {
  return (
    <section className="h-[200vh] flex flex-col items-center text-center justify-between py-20">
      <H1>Interviews</H1>
      <Text weight={Weight.medium} className="w-[80%]">
        We surveyed and interviewed students to understand their degree planning
        habits and perceptions of advising quality. The survey gathered
        <span className="font-bold"> 141 responses</span>
      </Text>
      <article className="h-screen bg-blue-500 w-[90%]">
        Make carousel component later
      </article>
      <button
        className="w-[420px] rounded-[50px] border-4 border-black h-[90px]"
        type="button"
      >
        <Link
          target="_blank"
          href="https://utdallas.yul1.qualtrics.com/reports/public/dXRkYWxsYXMtNjQ4ZTZkNTA2YmQxOTcwMDA4OGMwZDEzLVVSX2JIbkZQZVgxVFhUQW5NcQ=="
        >
          <Text weight={Weight.bold}>View Survey Results</Text>
        </Link>
      </button>
    </section>
  );
}
