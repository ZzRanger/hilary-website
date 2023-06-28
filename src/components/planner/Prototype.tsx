import Link from 'next/link';

export function Prototype() {
  return (
    <section className="flex flex-col items-center space-y-[100px] my-[10vh]">
      <div>
        <div className="text-[30px] font-bold mb-[44px]">Prototypes</div>
        <div className="text-[50px] font-bold">Usability Testing Prototype</div>
      </div>
      <div className="text-[30px]">
        After testing with users and getting their feedback, a few details were
        changed on the final prototype:
      </div>
      <iframe
        title="figma"
        style={{
          borderRadius: '30px',
          height: '100vh',
          width: '90vw',
        }}
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FnW5wBYFetauCmIdt9e5BtA%2FNebula-Lab-Planner-Landing-Website%3Ftype%3Ddesign%26node-id%3D1107%253A8867%26mode%3Ddesign%26t%3D9X7LULgr5GVJxN8u-1"
        allowFullScreen
      />
      <article className="bg-[#F5F5F5] w-[90vw] flex flex-col items-center justify-center py-[82px] rounded-[30px]">
        <ol className="list-decimal text-[30px] font-medium">
          <li>
            We added full titles of course names on each individual course
          </li>
          <li>
            Sidebars were moved to the right because of screen size limit
            ability
          </li>
          <li>
            Remove the Import option on Individual Plan (because no one was
            using it)
          </li>
          <li>Give users the ability to override their plan pre-requisites</li>
          <li>
            Added in the ability for users to see courses’ information from
            UTD’s Course Catalog
          </li>
        </ol>
      </article>
      <button
        className="w-fit px-[50px] py-[20px] rounded-[50px] border-4 border-black h-[90px] text-[30px] font-bold"
        type="button"
      >
        <Link
          href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
          target="_blank"
        >
          Click Here To View Revisions
        </Link>
      </button>
      <iframe
        style={{
          height: '100vh',
          width: '100vw',
          borderRadius: '30px',
        }}
        title="video"
        src="https://drive.google.com/file/d/1gxf8VNHe56r9FLDyEQpDW75gmQ9AfyVZ/preview"
        allow="autoplay"
      />
    </section>
  );
}
