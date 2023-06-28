import Link from 'next/link';

export default function Interview() {
  return (
    <section className="h-[200vh] flex flex-col items-center text-center justify-between py-20">
      <h1 className="text-[64px] font-extrabold leading-[72px]">Interviews</h1>
      <p className="text-[30px] font-medium w-[80%]">
        We surveyed and interviewed students to understand their degree planning
        habits and perceptions of advising quality. The survey gathered{' '}
        <span className="font-bold"> 141 responses</span>
      </p>
      <article className="h-screen bg-blue-500 w-[90%]">
        Make carousel component later
      </article>
      <button
        className="w-[420px] rounded-[50px] border-4 border-black h-[90px] text-[30px] font-bold"
        type="button"
      >
        <Link
          target="_blank"
          href="https://utdallas.yul1.qualtrics.com/reports/public/dXRkYWxsYXMtNjQ4ZTZkNTA2YmQxOTcwMDA4OGMwZDEzLVVSX2JIbkZQZVgxVFhUQW5NcQ=="
        >
          View Survey Results
        </Link>
      </button>
    </section>
  );
}
