'use client';

import Image, { StaticImageData } from 'next/image';
import H2 from '@/components/typography/H2';

import Text, { Weight } from '@/components/typography/Text';
import Doggo from '@public/lezhin/doggo.png';
import ThumbsDown from '@public/lezhin/thumbsDown.png';
import Charts from '@public/lezhin/charts.png';
import X from '@public/lezhin/x.png';

export default function LezhinProblem() {
  return (
    <section
      id="lezhin-problem"
      className="mt-[45vh] bg-hn-lezhin flex flex-col text-white items-center w-screen rounded-[20px]"
    >
      <div className="w-[3px] h-[20vh] mt-[calc(-20vh+1px)] bg-black" />
      <div className="w-[3px] h-[20vh] bg-white" />
      <article className="flex flex-col items-center gap-y-[46px]">
        <Image src={Doggo} alt="doggo" className="w-[160px] mt-[-30px]" />
        <H2>Who is Lezhin</H2>
        <Text className="w-[1000px] mb-[100px]">
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
      <div className="flex flex-row w-[90%] justify-between mt-[20vh]">
        <ProblemTile image={ThumbsDown} title="Low User Ratings">
          <ul className="text-left list-disc text-xl mx-10 leading-[30px]">
            <li>
              Lezhin's app receives a low rating of only two and a half stars
              based on over 2000 user reviews.
            </li>
            <li>
              Users express dissatisfaction with the app's performance,
              features, or overall experience
            </li>
          </ul>
        </ProblemTile>
        <ProblemTile image={Charts} title="User Retention Challenges">
          <ul className="text-left list-disc text-xl mx-10 leading-[30px]">
            <li>Lezhin struggles with retaining users on its platform.</li>
            <li>
              Users are not staying engaged or returning to use the app
              consistently.
            </li>
          </ul>
        </ProblemTile>
        <ProblemTile image={X} title="Lagging Behind Competitors">
          <ul className="text-left list-disc text-xl mx-16 leading-[30px]">
            <li>
              Lezhin's app performance and user satisfaction fall behind
              competing platforms like Webtoon, Bilibili, and Manta.
            </li>
          </ul>
        </ProblemTile>
      </div>
      <article className=" mt-[100px] mb-[150px] rounded-[20px] items-center text-center gap-y-[54px] border-[3px] border-white w-[90%] flex flex-col h-[80vh] pt-[90px]">
        <Text weight={Weight.semibold}>The Problem</Text>
        <H2 className="w-[78%] leading-[65px]">
          Why are users not staying engaged and satisfied with Lezhin's app
          experience?
        </H2>
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
  <article className="text-center animate-intro relative h-[70vh] w-[380px] rounded-3xl border-white border-2 flex flex-col justify-evenly items-center">
    <Image
      src={image}
      alt="image"
      className=" h-32 w-32 top-[-64px] absolute"
    />
    {/* <div className="w-32 h-32 bg-[#6166f0] opacity-55 animate-ping rounded-full absolute top-[-64px]" /> */}
    <Text weight={Weight.bold} className="leading-[44px] w-[80%]">
      {title}
    </Text>
    {children}
  </article>
);
