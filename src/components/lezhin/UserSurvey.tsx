import H2 from "@/components/typography/H2";
import Text, { Weight } from "@/components/typography/Text";
import Link from "next/link";
import { ForwardedRef, forwardRef } from "react";

const UserSurvey = forwardRef((_, ref: ForwardedRef<HTMLElement>) => {
  UserSurvey.displayName = "UserSurvey";
  return (
    <section
      ref={ref}
      className="flex w-[80%] flex-col items-center gap-[70px] py-[60px] text-left"
    >
      <Text weight={Weight.bold}>Users Survey</Text>
      <H2 className="text-center">
        I decided to conduct an online public survey to identified unique issues
        to Lezhin that users are currently facing
      </H2>
      <Text weight={Weight.medium} className="leading-[50px]">
        <article className="flex w-full flex-col gap-y-[40px]">
          <div>
            After analyzing 22 survey responses, I discovered two main reasons
            that prevent users from using Lezhin:
          </div>
          <div>
            <span className="text-[32px] font-bold tabular-nums">
              1. Poor App Experience
            </span>
            <br />
            Users experience various problems with the app. Compared to its
            competitors’ apps packed with features such as personalized
            recommendations and customized user profiles, Lezhin’s app is far
            inferior and lacks those features.
          </div>
          <div>
            <span className="text-[32px] font-bold">
              2. Expensive Coin Models
            </span>
            <br />
            Lezhin does not offer longer free chapter periods, and users feel
            they are paying way too much for an inferior app.
          </div>
        </article>
      </Text>

      <article className="mt-10 flex h-fit items-center justify-center rounded-[30px] bg-[#F5F5F5] py-[62px]">
        <div className="flex w-[80%] flex-col text-left">
          <ol className="list-disc gap-y-10 space-y-10 leading-[50px]">
            <H2 className="ml-[-40px]">💡 Surveyed Key Insight</H2>
            <Text weight={Weight.bold}>
              <li>
                31.8% of the users surveyed said it is very important for Lezhin
                to have a community-oriented interface
              </li>
            </Text>
            <Text weight={Weight.bold}>
              <li>
                Students&apos; confusion caused by varying college systems and
                degree requirements leads to advisors spending more time
                answering questions, resulting in delayed responses as they try
                to catch up with degree validation work.
              </li>
            </Text>
          </ol>
        </div>
      </article>
      <button
        className="h-[90px] w-[420px] rounded-[50px] border-4 border-black"
        type="button"
      >
        <Link
          href="https://docs.google.com/spreadsheets/d/1pNkEoLDDGo7_RZvN3Ej3vu7wa7aZhSreXreNRs-zs0s/edit?usp=sharing"
          target="_blank"
        >
          <Text weight={Weight.bold}>View Full Survey Results</Text>
        </Link>
      </button>
      <Text weight={Weight.medium}>
        To better understand users, I categorized the participant’s pain points
        to identify their needs and common pain points on FigJam:
      </Text>
      <iframe
        style={{
          borderRadius: "30px",
          height: "100vh",
          width: "90vw",
        }}
        title="User survey figjam"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyzPjZfXxUSSA0OkwbMM59D%2FLezhin-Users-Paint-Points%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DTko6FnNzplg5UvkU-1"
        allowFullScreen
      />
    </section>
  );
});

export default UserSurvey;
