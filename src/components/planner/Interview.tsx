import Link from 'next/link';
import H1 from '@/components/typography/H1';
import Text, { Weight } from '@/components/typography/Text';
import Button from '@/components/Button';

export default function Interview() {
  return (
    <>
      {/* Included wrapper div w/ black background so that top & bottom border looks rounded & meshes cleanly */}
      <div className="bg-gradient-to-b from-white to-black h-[200vh] w-screen">
        <section className="relative z-10 h-[200vh] flex flex-col items-center text-center justify-between py-20 bg-[#F5F5F5] rounded-[50px]">
          <H1>Interviews</H1>
          <Text weight={Weight.medium} className="w-[80%]">
            We surveyed and interviewed students to understand their degree
            planning habits and perceptions of advising quality. The survey
            gathered
            <span className="font-bold"> 141 responses</span>
          </Text>
          <article className="h-screen bg-blue-500 w-[90%]">
            Make carousel component later
          </article>
          <Button>
            <Link
              target="_blank"
              href="https://utdallas.yul1.qualtrics.com/reports/public/dXRkYWxsYXMtNjQ4ZTZkNTA2YmQxOTcwMDA4OGMwZDEzLVVSX2JIbkZQZVgxVFhUQW5NcQ=="
            >
              <Text weight={Weight.bold}>View Survey Results</Text>
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
