"use client";

// TODO: refactor into separate components so we can use server components where possible
// TODO: use the better figma font rendering thingies;
import { Fragment, PropsWithChildren, useState } from "react";

import projects from "@/data/projects";
import { Footer } from "@/components/Footer";
import { PillSelector } from "@/components/PillSelector";
import Works from "@/components/Works";

export default function Home() {
  const options = ["UX/UI", "Graphics"];
  const [option, setOption] = useState(0);
  return (
    <div className="z-0 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center pb-20 pt-36 text-5xl font-extrabold leading-[1.5]">
        <h2>
          Hello, my name is{" "}
          <SpecialText className="text-7xl">Hilary</SpecialText>!
        </h2>
        <h2>
          I like to design <SpecialText>cool stuff</SpecialText>
        </h2>
      </div>
      <div className="relative mb-10 mt-16 flex flex-col">
        <Works />
        <PillSelector
          options={options}
          selected={option}
          setSelected={setOption}
        />
      </div>
      <div className="mb-36 flex max-w-screen-lg flex-col items-center gap-12 px-10">
        {projects[option].map((project, index) => (
          <Fragment key={`project-${index}`}>{project}</Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}
const SpecialText = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <span
    className={`font-ethereal font-medium underline decoration-4 underline-offset-8 ${className}`}
  >
    {children}
  </span>
);
