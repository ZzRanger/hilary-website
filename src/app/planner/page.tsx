import { NavBar } from '@/components/NavBar';
import PlannerOverview from '@/components/planner/Overview';
import PlannerHero from '@/components/planner/Hero';
import IPadGraphic from '@/components/planner/IPadGraphic';
import Problem from '@/components/planner/Problem';

export default function Planner() {
  return (
    <main className="flex flex-col py-80">
      <NavBar />
      <PlannerHero />
      <PlannerOverview />
      <IPadGraphic />
      <Problem />
    </main>
  );
}
