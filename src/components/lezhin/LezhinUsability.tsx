import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";

export default function UserSurvey() {
  return (
    <div
      id="usability"
      className="flex w-full items-center justify-center bg-hn-lezhin"
    >
      <section className="flex w-[80%] flex-col items-center gap-[70px] py-[60px] text-left  text-white">
        <Text weight={Weight.bold}>Usability Test</Text>
        <H2 className="text-center">
          I conducted usability testing with 5 participants, assessing task
          completion time and interaction difficulties to understand the
          app&apos;s impact on user usage.
        </H2>
        <button
          className="h-[90px] w-fit rounded-[50px] border-4 border-white px-[48px] py-[20px]"
          type="button"
        >
          <Link
            href="https://www.notion.so/xodaydream/a243681ff68b4dd9a8c52be8342417e5?v=65aa8257649c47af8d442743b2dbc8cf"
            target="_blank"
          >
            <Text weight={Weight.bold}>
              View Users&apos; Interview/Empathy Map
            </Text>
          </Link>
        </button>
        <article className="mt-10 flex h-fit items-center justify-center rounded-[30px] bg-[#F5F5F5] py-[62px] text-black">
          <div className="flex w-[80%] flex-col text-left">
            <ol className="list-disc gap-y-10 space-y-10 leading-[50px]">
              <H2 className="ml-[-40px]">💡 Test Key Insight</H2>
              <Text weight={Weight.medium}>
                <li>
                  3 out of 4 users took a long time trying to find a specific
                  genre on the app due to the built of the app&apos;s search
                  engine
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

        <article className="flex flex-col gap-y-10 text-left">
          <Text weight={Weight.bold}>
            Key findings from the usability testing and interviews:
          </Text>

          <Text weight={Weight.medium}>
            <ol className="ml-[40px] list-decimal space-y-10">
              <li>
                <span className="font-bold">
                  Users rarely use the &apos;My Library&apos; feature
                </span>{" "}
                due to its lack of functionality and sorting options.
              </li>
              <li>
                Most participants
                <span className="font-bold">
                  utilize both the app and browser site, despite the app&apos;s
                  poor quality.
                </span>{" "}
                The app offers webtoons not available on other platforms, but
                users switch to the desktop site for mature content.
              </li>
              <li>
                All participants expressed a{" "}
                <span className="font-bold">
                  preference for community features in the app.{" "}
                </span>{" "}
                They have used other webtoon apps with commenting features,
                which Lezhin lacks.
              </li>
              <li>
                Users{" "}
                <span className="font-bold">
                  primarily discover new webtoons through banners and the
                  Explore section,
                </span>
                focusing on the top trending webtoons.
              </li>
              <li>
                The{" "}
                <span className="font-bold">
                  ability to sort by genres is crucial to users,{" "}
                </span>{" "}
                and participants are frustrated by the lack of separation
                between BL/GL genres within the section.
              </li>
            </ol>
          </Text>
        </article>
        <button
          className="h-[90px] w-fit rounded-[50px] border-4 border-white px-[48px] py-[20px]"
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
