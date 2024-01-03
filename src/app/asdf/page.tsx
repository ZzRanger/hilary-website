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
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Planner() {
  // const { ref, inView, entry } = useInView({
  //   root: navbarRef.current,
  // });

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observe = new IntersectionObserver((a) => console.log(a), {
      root: document.querySelector('main'),
      threshold: 0,
    });

    let target = document.querySelector('#observe');
    observe.observe(target);
  }, []);

  return (
    <>
      <main className="flex flex-col w-screen h-screen overflow-y-scroll">
        <article
          id="query"
          className="fixed w-full border-blue-500 border-2 h-20"
        >
          Hi
        </article>
        <div>
          <div className="h-[120vh] flex-shrink-0 bg-green-500 w-full">a</div>
          <div
            className="h-[120vh] flex-shrink-0 bg-red-500 w-full"
            id="observe"
          >
            b
          </div>
          <div className="h-[120vh] flex-shrink-0 bg-black w-full">c</div>
        </div>
      </main>
    </>
  );
}
