import H2 from '@/components/typography/H2';
import Text, { Weight } from '@/components/typography/Text';
import Link from 'next/link';

export default function UserSurvey() {
  return (
    <div
      id="lezhin-usability"
      className="bg-hn-lezhin w-full flex items-center justify-center"
    >
      <section className="flex flex-col text-left items-center gap-[70px] py-[60px] w-[80%]  text-white">
        <Text weight={Weight.bold}>Usability Test</Text>
        <H2 className="text-center">
          I conducted usability testing with 5 participants, assessing task
          completion time and interaction difficulties to understand the app's
          impact on user usage.
        </H2>
        <button
          className="w-fit px-[48px] py-[20px] rounded-[50px] border-4 border-white h-[90px]"
          type="button"
        >
          <Link
            href="https://www.notion.so/xodaydream/a243681ff68b4dd9a8c52be8342417e5?v=65aa8257649c47af8d442743b2dbc8cf"
            target="_blank"
          >
            <Text weight={Weight.bold}>View Users' Interview/Empathy Map</Text>
          </Link>
        </button>
        <article className="h-fit rounded-[30px] bg-[#F5F5F5] flex justify-center items-center mt-10 py-[62px] text-black">
          <div className="text-left flex flex-col w-[80%]">
            <ol className="list-disc gap-y-10 space-y-10 leading-[50px]">
              <H2 className="ml-[-40px]">💡 Test Key Insight</H2>
              <Text weight={Weight.medium}>
                <li>
                  3 out of 4 users took a long time trying to find a specific
                  genre on the app due to the built of the app's search engine
                </li>
              </Text>
              <Text weight={Weight.medium}>
                <li>
                  Task 1 (finding genre on the app search engine) and Task 6
                  (Finding the day of the week the comic is updated) took the
                  longest for all of the participants
                </li>
              </Text>
            </ol>
          </div>
        </article>

        <article className="text-left flex flex-col gap-y-10">
          <Text weight={Weight.bold}>
            Key findings from the usability testing and interviews:
          </Text>

          <Text weight={Weight.medium}>
            <ol className="list-decimal space-y-10 ml-[40px]">
              <li>
                <span className="font-bold">
                  Users rarely use the "My Library" feature
                </span>{' '}
                due to its lack of functionality and sorting options.
              </li>
              <li>
                Most participants
                <span className="font-bold">
                  utilize both the app and browser site, despite the app's poor
                  quality.
                </span>{' '}
                The app offers webtoons not available on other platforms, but
                users switch to the desktop site for mature content.
              </li>
              <li>
                All participants expressed a{' '}
                <span className="font-bold">
                  preference for community features in the app.{' '}
                </span>{' '}
                They have used other webtoon apps with commenting features,
                which Lezhin lacks.
              </li>
              <li>
                Users{' '}
                <span className="font-bold">
                  primarily discover new webtoons through banners and the
                  Explore section,
                </span>
                focusing on the top trending webtoons.
              </li>
              <li>
                The{' '}
                <span className="font-bold">
                  ability to sort by genres is crucial to users,{' '}
                </span>{' '}
                and participants are frustrated by the lack of separation
                between BL/GL genres within the section.
              </li>
            </ol>
          </Text>
        </article>
        <button
          className="w-fit px-[48px] py-[20px] rounded-[50px] border-4 border-white h-[90px]"
          type="button"
        >
          <Link
            href="https://www.notion.so/xodaydream/a243681ff68b4dd9a8c52be8342417e5?v=65aa8257649c47af8d442743b2dbc8cf"
            target="_blank"
          >
            <Text weight={Weight.bold}>View Usability Tests Result</Text>
          </Link>
        </button>
      </section>
    </div>
  );
}
