'use client';

import PlannerOverview from '@/components/planner/Overview';
import PlannerHero from '@/components/planner/Hero';
import IPadGraphic from '@/components/planner/IPadGraphic';
import Problem from '@/components/planner/Problem';
import Research from '@/components/planner/Research';
import Interview from '@/components/planner/Interview';
import Advising from '@/components/planner/Advising';
import Empathy from '@/components/planner/Empathy';
import Usability from '@/components/planner/Usability';
import UsabilityDescription from '@/components/planner/UsabilityDescription';
import Pain from '@/components/planner/Pain';
import Design from '@/components/planner/Design';
import Wireframes from '@/components/planner/Wireframes';
import Information from '@/components/planner/Information';
import { Prototype } from '@/components/planner/Prototype';
import Final from '@/components/planner/Final';
import Conclusion from '@/components/planner/Conclusion';
import Next from '@/components/planner/Next';
import ScrollLink from '@/components/ScrollLink';
import Text, { Weight } from '@/components/typography/Text';
import ProjectNavBar from '@/components/navigation/ProjectNavBar';
import { ComponentType, FunctionComponent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import throttle from 'lodash.throttle';

const NavbarWrapper = ({
  setDark,
  component: Component,
  color,
}: {
  setDark: (isDark: boolean) => void;
  component: FunctionComponent<any>;
  color: string;
}) => {
  const { ref, inView, entry } = useInView({
    rootMargin: '-60px',
  });

  useEffect(() => {
    if (entry?.boundingClientRect.y! > 0 && color === 'black') {
      setDark(inView ? true : false);
    } else if (entry?.boundingClientRect.y! > 0 && color === 'white') {
      setDark(inView ? false : true);
    }
  }, [inView]);
  return <Component ref={ref} />;
};

export default function Planner() {
  const [isDark, setIsDark] = useState(false);

  const handleSetDark = throttle((isDark: boolean) => {
    setIsDark(isDark);
  }, 1000);

  return (
    <>
      <main className="flex flex-col items-center bg-white w-screen">
        <article className="fixed bottom-8 w-16 h-16 z-[60] left-8  items-center flex flex-col bg-gray-100 shadow-xl overflow-hidden box-border rounded-full cursor-pointer hover:h-96 duration-300">
          <ScrollLink
            href="#planner-overview"
            className="h-16 w-16 flex items-center justify-center shrink-0"
          >
            <Text weight={Weight.medium}>📓</Text>
          </ScrollLink>
          <ScrollLink
            href="#planner-problem"
            className="h-16 w-16 flex items-center justify-center"
          >
            <Text weight={Weight.medium}>‼️</Text>
          </ScrollLink>
          <ScrollLink
            href="#planner-research"
            className="h-16 w-16 flex items-center justify-center"
          >
            <Text weight={Weight.medium}>📝</Text>
          </ScrollLink>
          <ScrollLink
            href="#planner-usability"
            className="h-16 w-16 flex items-center justify-center"
          >
            <Text weight={Weight.medium}>💻</Text>
          </ScrollLink>
          <ScrollLink
            href="#planner-design"
            className="h-16 w-16 flex items-center justify-center"
          >
            <Text weight={Weight.medium}>🎨</Text>
          </ScrollLink>
          <ScrollLink
            href="#planner-conclusion"
            className="h-16 w-16 flex items-center justify-center"
          >
            <Text weight={Weight.medium}>🌟</Text>
          </ScrollLink>
        </article>
        <PlannerHero />
        <PlannerOverview />
        <IPadGraphic />
        <NavbarWrapper
          component={Problem}
          setDark={handleSetDark}
          color="black"
        />
        <NavbarWrapper
          component={Research}
          setDark={handleSetDark}
          color="white"
        />
        <Interview />
        <NavbarWrapper
          component={Advising}
          setDark={handleSetDark}
          color="black"
        />
        <NavbarWrapper
          component={Empathy}
          setDark={handleSetDark}
          color="white"
        />
        <NavbarWrapper
          component={Usability}
          setDark={handleSetDark}
          color="black"
        />
        <NavbarWrapper
          component={UsabilityDescription}
          setDark={handleSetDark}
          color="white"
        />
        <Pain />
        <Design />
        <NavbarWrapper
          component={Wireframes}
          setDark={handleSetDark}
          color="black"
        />
        <NavbarWrapper
          component={Information}
          setDark={handleSetDark}
          color="white"
        />
        <Prototype />
        <Final />
        <Conclusion />
        <Next />
        <div className="fixed bottom-10 z-50">
          <ProjectNavBar isDark={isDark} />
        </div>
      </main>
    </>
  );
}
