import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';

export function Prototype() {
  return (
    <section className="flex flex-col items-center space-y-[100px] my-[10vh]">
      <div>
        <Text weight={Weight.bold} className="mb-[44px]">
          Prototypes
        </Text>
        <H2>Usability Testing Prototype</H2>
      </div>
      <Text>
        After testing with users and getting their feedback, a few details were
        changed on the final prototype:
      </Text>
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
        <ol className="list-decimal">
          <li>
            <Text weight={Weight.medium}>
              We added full titles of course names on each individual course
            </Text>
          </li>
          <li>
            <Text weight={Weight.medium}>
              Sidebars were moved to the right because of screen size limit
              ability
            </Text>
          </li>
          <li>
            <Text weight={Weight.medium}>
              Remove the Import option on Individual Plan (because no one was
              using it)
            </Text>
          </li>
          <li>
            {' '}
            <Text weight={Weight.medium}>
              Give users the ability to override their plan pre-requisites
            </Text>
          </li>
          <li>
            <Text weight={Weight.medium}>
              Added in the ability for users to see courses’ information from
              UTD’s Course Catalog
            </Text>
          </li>
        </ol>
      </article>
      <button
        className="w-fit px-[50px] py-[20px] rounded-[50px] border-4 border-black h-[90px]"
        type="button"
      >
        <Link
          href="https://docs.google.com/document/d/1bjMusoKa8bbX2PaH81dSBQn4X0nfozgehsEzNn90Pds/edit"
          target="_blank"
        >
          <Text weight={Weight.bold}>Click Here To View Revisions</Text>
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
