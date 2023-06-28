import Link from 'next/link';

export default function UsabilityDescription() {
  return (
    <section className="flex flex-col text-center items-center gap-[65px] py-[60px]">
      <div className="font-bold text-[30px] w-[80%]">Usability Test</div>
      <div className="text-[50px] font-bold w-[80%]">
        Goal: Redesign Planner to be user-friendly and simplified degree
        requirements. How?
      </div>
      <div className="font-medium text-[30px] w-[80%]">
        We understood that our project needed to be more helpful for students.
        So, we started to test how easy it was to use the old model and listened
        to the problems students were facing.
      </div>
      <div className="h-[120vh] bg-slate-200 w-screen">Add video here</div>
      <div className="font-medium text-[30px] w-[80%]">
        Nebula Planner Old Version
      </div>
      <button
        className="w-[420px] rounded-[50px] border-4 border-black h-[90px] text-[30px] font-bold"
        type="button"
      >
        <Link
          href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
          target="_blank"
        >
          View Old Prototype
        </Link>
      </button>
      <article className="text-left w-[90%] py-[80px] px-[40px] bg-[#F5F5F5] flex flex-col text-[30px] font-bold leading-[50px] rounded-[30px]">
        <div className="text-[50px] mb-[50px]">💡 Testing Key Insight</div>
        <div>
          1. Users were confused about the general UI and the purpose of Planner
        </div>
        <div>
          2. Users expressed the need to be able to customize their plans better
        </div>
        <div>
          3. Users have different references on how courses should be searched
          and display
        </div>
      </article>
      <article className="h-[50vh] flex justify-center items-center">
        <button
          className="w-fit px-[50px] py-[20px] rounded-[50px] border-4 border-black h-[90px] text-[30px] font-bold"
          type="button"
        >
          <Link
            href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
            target="_blank"
          >
            View User Interview Database
          </Link>
        </button>
      </article>
    </section>
  );
}
