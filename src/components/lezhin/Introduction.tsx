"use client";

import Image, { StaticImageData } from "next/image";
import H2 from "@/components/typography/H2";

import Line from "@/components/planner/Line";
import Text, { Weight } from "@/components/typography/Text";
import Person1 from "../../../public/planner/person1.png";
import Person2 from "../../../public/planner/person2.png";
import Person3 from "../../../public/planner/person3.png";

export default function Introduction() {
  return (
    <section className="flex w-screen flex-col items-center rounded-[20px] bg-black py-[120px] text-center text-white">
      <Text weight={Weight.semibold} className="mb-[40px]">
        The Problem
      </Text>
      <H2 className="mb-[72px] w-[1100px]">
        UT Dallas enrollment surge creates demand for degree planning resources
      </H2>
      <Line />
      <Text className="mt-[10vh] w-[80%]">
        UTD's enrollment skyrockets over the past few years, prompting the need
        for additional resources to assist students in navigating the degree
        planning process.
      </Text>
      <div className="mt-[20vh] flex w-[90vw] flex-row justify-around">
        <ProblemTile
          image={Person1}
          title="Complex Degree Planning"
          body="New UTD students struggle with degree planning, resulting in longer college stays and higher student debt."
        />
        <ProblemTile
          image={Person2}
          title="Overcrowded Advising Office"
          body="UTD's advising office is overcrowded and has limited availability, causing long wait times and backlogs."
        />
        <ProblemTile
          image={Person3}
          title="Inefficient Degree Planning Tools"
          body="There are not specialized planning tool for degree planning. Many students use Excel but it has a long learning curve. "
        />
      </div>
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
  body,
}: {
  image: StaticImageData;
  title: string;
  body: string;
}) => (
  <article className="animate-intro relative flex h-[70vh] w-[380px] flex-col items-center justify-evenly rounded-3xl border-2 border-white">
    <Image
      src={image}
      alt="image"
      className=" absolute top-[-64px] h-32 w-32"
    />
    {/* <div className="w-32 h-32 bg-[#6166f0] opacity-55 animate-ping rounded-full absolute top-[-64px]" /> */}
    <Text weight={Weight.bold} className="w-[80%] leading-[44px]">
      {title}
    </Text>
    <p className="px-10  text-xl">{body}</p>
  </article>
);
