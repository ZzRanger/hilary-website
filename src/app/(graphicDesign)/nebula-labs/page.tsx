import PlannerOverview from "@/components/planner/Overview";
import PlannerHero from "@/components/planner/Hero";
import IPadGraphic from "@/components/planner/IPadGraphic";
import Problem from "@/components/planner/Problem";
import Research from "@/components/planner/Research";
import Interview from "@/components/planner/Interview";
import Advising from "@/components/planner/Advising";
import Empathy from "@/components/planner/Empathy";
import Usability from "@/components/planner/Usability";
import UsabilityDescription from "@/components/planner/UsabilityDescription";
import Pain from "@/components/planner/Pain";
import Design from "@/components/planner/Design";
import Wireframes from "@/components/planner/Wireframes";
import Information from "@/components/planner/Information";
import { Prototype } from "@/components/planner/Prototype";
import Final from "@/components/planner/Final";
import Conclusion from "@/components/planner/Conclusion";
import Next from "@/components/planner/Next";
import ScrollLink from "@/components/ScrollLink";
import Text, { Weight } from "@/components/typography/Text";

export default function Planner() {
  return (
    <main className="flex w-screen flex-col items-center bg-white">
      <article className="fixed bottom-8 left-8 z-[60] box-border flex  h-16 w-16 cursor-pointer flex-col items-center overflow-hidden rounded-full bg-gray-100 shadow-xl duration-300 hover:h-96">
        <ScrollLink
          href="#planner-overview"
          className="flex h-16 w-16 shrink-0 items-center justify-center"
        >
          <Text weight={Weight.medium}>📓</Text>
        </ScrollLink>
        <ScrollLink
          href="#planner-problem"
          className="flex h-16 w-16 items-center justify-center"
        >
          <Text weight={Weight.medium}>‼️</Text>
        </ScrollLink>
        <ScrollLink
          href="#planner-research"
          className="flex h-16 w-16 items-center justify-center"
        >
          <Text weight={Weight.medium}>📝</Text>
        </ScrollLink>
        <ScrollLink
          href="#planner-usability"
          className="flex h-16 w-16 items-center justify-center"
        >
          <Text weight={Weight.medium}>💻</Text>
        </ScrollLink>
        <ScrollLink
          href="#planner-design"
          className="flex h-16 w-16 items-center justify-center"
        >
          <Text weight={Weight.medium}>🎨</Text>
        </ScrollLink>
        <ScrollLink
          href="#planner-conclusion"
          className="flex h-16 w-16 items-center justify-center"
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
