import { NavBar } from '@/components/NavBar';
import PlannerOverview from '@/components/planner/Overview';
import PlannerHero from '@/components/planner/Hero';
import IPadGraphic from '@/components/planner/IPadGraphic';
import Problem from '@/components/planner/Problem';
import Resaerch from '@/components/planner/Research';
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

export default function Planner() {
  return (
    <main className="flex flex-col pb-80">
      <NavBar />
      <PlannerHero />
      <PlannerOverview />
      <IPadGraphic />
      <Problem />
      <Resaerch />
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
