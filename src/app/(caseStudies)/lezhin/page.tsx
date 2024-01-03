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
