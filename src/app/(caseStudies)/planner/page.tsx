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

export default function Planner() {
  return (
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
      <Problem />
      <Research />
      <Interview />
      <Advising />
      <Empathy />
      <Usability />
      <UsabilityDescription />
      <Pain />
      <Design />
      <Wireframes />
      <Information />
      <Prototype />
      <Final />
      <Conclusion />
      <Next />
    </main>
  );
}
