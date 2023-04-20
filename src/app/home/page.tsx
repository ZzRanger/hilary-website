'use client';

// TODO: refactor into separate components so we can use server components where possible
// TODO: use the better figma font rendering thingies;
import { Fragment, PropsWithChildren, useState } from 'react';

import { NavBar } from '../components/NavBar';
import { PillSelector } from '../components/PillSelector';
import projects from '../data/projects';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Footer } from '../components/Footer';
import Works from '../components/Works';

export default function Home() {
  const options = ['UX/UI', 'Graphics'];
  const [option, setOption] = useState(0);
  return (
    <div className="flex flex-col items-center gap-6 bg-blobs">
      <NavBar />
      <div className="flex flex-col items-center text-5xl leading-[1.5] font-extrabold pt-36 pb-20">
        <h2>
          Hello, my name is{' '}
          <SpecialText className="text-7xl">Hilary</SpecialText>!
        </h2>
        <h2>
          I like to design <SpecialText>cool stuff</SpecialText>
        </h2>
      </div>
      <div className="flex flex-col relative mt-16 mb-10">
        <Works />
        <PillSelector
          options={options}
          selected={option}
          setSelected={setOption}
        />
      </div>
      <ThemeSwitcher />
      <div className="flex flex-col gap-12 mb-36 items-center px-10 max-w-screen-lg">
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
  className = '',
}: PropsWithChildren<{ className?: string }>) => (
  <span
    className={`font-ethereal font-medium underline decoration-4 underline-offset-8 ${className}`}
  >
    {children}
  </span>
);
