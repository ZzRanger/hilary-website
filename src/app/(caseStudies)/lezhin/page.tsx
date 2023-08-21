import Competitive from '@/components/lezhin/Competitive';
import LezhinHero from '@/components/lezhin/LezhinHero';
import LezhinOverview from '@/components/lezhin/LezhinOverview';
import LezhinProblem from '@/components/lezhin/LezhinProblem';
import LezhinResearch from '@/components/lezhin/LezhinResearch';
import LezhinUsability from '@/components/lezhin/LezhinUsability';
import Texting from '@/components/lezhin/Texting';
import UserSurvey from '@/components/lezhin/UserSurvey';
import IPhonesGraphic from '@/components/lezhin/iPhonesGraphic';
import Design from '@/components/lezhin/Design';
import Personas from '@/components/lezhin/Personas';
import InitialFlows from '@/components/lezhin/InitialFlows';
import MidFi from '@/components/lezhin/MidFi';

import LezhinFinal from '@/components/lezhin/LezhinFinal';
import Redesign from '@/components/lezhin/Redesign';
import LezhinConclusion from '@/components/lezhin/LezhinConclusion';
import ScrollLink from '@/components/ScrollLink';
import Text, { Weight } from '@/components/typography/Text';

export default function Planner() {
  return (
    <main className="flex flex-col items-center bg-white w-screen">
      <article className="fixed bottom-8 w-16 h-16 z-[60] left-8  items-center flex flex-col bg-gray-100 shadow-xl overflow-hidden box-border rounded-full cursor-pointer hover:h-96 duration-300">
        <ScrollLink
          href="#lezhin-overview"
          className="h-16 w-16 flex items-center justify-center shrink-0"
        >
          <Text weight={Weight.medium}>📓</Text>
        </ScrollLink>
        <ScrollLink
          href="#lezhin-problem"
          className="h-16 w-16 flex items-center justify-center"
        >
          <Text weight={Weight.medium}>‼️</Text>
        </ScrollLink>
        <ScrollLink
          href="#lezhin-research"
          className="h-16 w-16 flex items-center justify-center"
        >
          <Text weight={Weight.medium}>📝</Text>
        </ScrollLink>
        <ScrollLink
          href="#lezhin-usability"
          className="h-16 w-16 flex items-center justify-center"
        >
          <Text weight={Weight.medium}>💻</Text>
        </ScrollLink>
        <ScrollLink
          href="#lezhin-design"
          className="h-16 w-16 flex items-center justify-center"
        >
          <Text weight={Weight.medium}>🎨</Text>
        </ScrollLink>
        <ScrollLink
          href="#lezhin-conclusion"
          className="h-16 w-16 flex items-center justify-center"
        >
          <Text weight={Weight.medium}>🌟</Text>
        </ScrollLink>
      </article>
      <LezhinHero />
      <LezhinOverview />
      <IPhonesGraphic />
      <Texting />
      <LezhinProblem />
      <LezhinResearch />
      <Competitive />
      <UserSurvey />
      <LezhinUsability />
      <Design />
      <Personas />
      <InitialFlows />
      <MidFi />
      <LezhinFinal />
      <Redesign />
      <LezhinConclusion />
    </main>
  );
}
