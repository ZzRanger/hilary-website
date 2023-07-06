'use client';

import Image, { StaticImageData } from 'next/image';
import H2 from '@/components/typography/H2';

import Line from '@/components/planner/Line';
import Text, { Weight } from '@/components/typography/Text';
import Person1 from '../../../public/planner/person1.png';
import Person2 from '../../../public/planner/person2.png';
import Person3 from '../../../public/planner/person3.png';

export default function Problem() {
  return (
    <section
      id="planner-problem"
      className="py-[120px] bg-black flex flex-col text-white items-center text-center w-screen rounded-[20px]"
    >
      <Text weight={Weight.semibold} className="mb-[40px]">
        The Problem
      </Text>
      <H2 className="w-[1100px] mb-[72px]">
        UT Dallas enrollment surge creates demand for degree planning resources
      </H2>
      <Line />
      <Text className="w-[80%] mt-[10vh]">
        UTD's enrollment skyrockets over the past few years, prompting the need
        for additional resources to assist students in navigating the degree
        planning process.
      </Text>
      <div className="flex flex-row w-[90vw] justify-around mt-[20vh]">
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
  <article className="animate-intro relative h-[70vh] w-[380px] rounded-3xl border-white border-2 flex flex-col justify-evenly items-center">
    <Image
      src={image}
      alt="image"
      className=" h-32 w-32 top-[-64px] absolute"
    />
    {/* <div className="w-32 h-32 bg-[#6166f0] opacity-55 animate-ping rounded-full absolute top-[-64px]" /> */}
    <Text weight={Weight.bold} className="leading-[44px] w-[80%]">
      {title}
    </Text>
    <p className="text-xl  px-10">{body}</p>
  </article>
);
