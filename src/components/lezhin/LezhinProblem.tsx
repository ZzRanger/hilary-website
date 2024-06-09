"use client";

import Image, { StaticImageData } from "next/image";
import H2 from "@/components/typography/H2";

import Text, { Weight } from "@/components/typography/Text";
import Doggo from "@public/lezhin/doggo.png";
import ThumbsDown from "@public/lezhin/thumbsDown.png";
import Charts from "@public/lezhin/charts.png";
import X from "@public/lezhin/x.png";

export default function LezhinProblem() {
  return (
    <section
      id="problem"
      className="mt-[45vh] flex w-screen flex-col items-center rounded-[20px] bg-hn-lezhin text-white"
    >
      <div className="mt-[calc(-20vh+1px)] h-[20vh] w-[3px] bg-black" />
      <div className="h-[20vh] w-[3px] bg-white" />
      <article className="flex flex-col items-center gap-y-[46px]">
        <Image src={Doggo} alt="doggo" className="mt-[-30px] w-[160px]" />
        <H2>Who is Lezhin</H2>
        <Text className="mb-[100px] w-[1000px]">
          Lezhin is a South Korean company hosting over 400 online webtoons and
          Korean, Japanese, and English cartoons.
          <br /> <br /> Its model allows artists to monetize their work with a
          revenue-sharing model.
          <br /> <br /> Users who want access to reading the webtoon are
          required to buy coins to unlock the chapters.
        </Text>
      </article>

      <div className="w-[900px] text-center text-[40px] font-medium">
        However despite its success, the company faces these challenges
      </div>
      <div className="mt-[20vh] flex w-[90%] flex-row justify-between">
        <ProblemTile image={ThumbsDown} title="Low User Ratings">
          <ul className="mx-10 list-disc text-left text-xl leading-[30px]">
            <li>
              Lezhin&apos;s app receives a low rating of only two and a half
              stars based on over 2000 user reviews.
            </li>
            <li>
              Users express dissatisfaction with the app&apos;s performance,
              features, or overall experience
            </li>
          </ul>
        </ProblemTile>
        <ProblemTile image={Charts} title="User Retention Challenges">
          <ul className="mx-10 list-disc text-left text-xl leading-[30px]">
            <li>Lezhin struggles with retaining users on its platform.</li>
            <li>
              Users are not staying engaged or returning to use the app
              consistently.
            </li>
          </ul>
        </ProblemTile>
        <ProblemTile image={X} title="Lagging Behind Competitors">
          <ul className="mx-16 list-disc text-left text-xl leading-[30px]">
            <li>
              Lezhin&apos;s app performance and user satisfaction fall behind
              competing platforms like Webtoon, Bilibili, and Manta.
            </li>
          </ul>
        </ProblemTile>
      </div>
      <article className=" mb-[150px] mt-[100px] flex h-[80vh] w-[90%] items-center justify-center rounded-[20px] border-[3px] border-white">
        <div className="mt-[-10px] flex flex-col items-center justify-center gap-y-[40px]">
          <Text weight={Weight.semibold}>The Problem</Text>
          <H2 className="w-[78%] leading-[65px]">
            Why are users not staying engaged and satisfied with Lezhin&apos;s
            app experience?
          </H2>
        </div>
      </article>
    </section>
  );
}

/**
 * TODO: Implement glass effect & animation on scroll
 * https://www.asmallstudio.com/
 */
const ProblemTile = ({
  image,
  title,
  children,
}: {
  image: StaticImageData;
  title: string;
  children: React.ReactElement | React.ReactElement[];
}) => (
  <article className="animate-intro relative flex h-[70vh] w-[380px] flex-col items-center justify-evenly rounded-3xl border-2 border-white text-center">
    <Image
      src={image}
      alt="image"
      className=" absolute top-[-64px] h-32 w-32"
    />
    {/* <div className="w-32 h-32 bg-[#6166f0] opacity-55 animate-ping rounded-full absolute top-[-64px]" /> */}
    <Text weight={Weight.bold} className="w-[80%] leading-[44px]">
      {title}
    </Text>
    {children}
  </article>
);
