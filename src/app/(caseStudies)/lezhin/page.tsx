"use client";
import Competitive from "@/components/lezhin/Competitive";
import LezhinHero from "@/components/lezhin/LezhinHero";
import LezhinOverview from "@/components/lezhin/LezhinOverview";
import LezhinProblem from "@/components/lezhin/LezhinProblem";
import LezhinResearch from "@/components/lezhin/LezhinResearch";
import LezhinUsability from "@/components/lezhin/LezhinUsability";
import Texting from "@/components/lezhin/Texting";
import UserSurvey from "@/components/lezhin/UserSurvey";
import IPhonesGraphic from "@/components/lezhin/iPhonesGraphic";
import Design from "@/components/lezhin/Design";
import Personas from "@/components/lezhin/Personas";
import InitialFlows from "@/components/lezhin/InitialFlows";
import MidFi from "@/components/lezhin/MidFi";
import LezhinFinal from "@/components/lezhin/LezhinFinal";
import Redesign from "@/components/lezhin/Redesign";
import LezhinConclusion from "@/components/lezhin/LezhinConclusion";
import ProjectNavbar from "@/components/navigation/ProjectNavbar";
import NavbarWrapper from "@/components/navigation/NavbarWrapper";
import useDebouncedState from "@/utils/useDebouncedState";
import { useEffect } from "react";

export default function Lezhin() {
  const [isDark, setIsDark] = useDebouncedState(false, 100);

  useEffect(() => {
    console.log(isDark);
  }, [isDark]);
  return (
    <main className="flex w-screen flex-col items-center bg-white">
      <LezhinHero />
      <LezhinOverview />
      <IPhonesGraphic />
      <Texting />
      <LezhinProblem />
      <LezhinResearch />
      <NavbarWrapper
        component={Competitive}
        setDark={setIsDark}
        color="black"
      />
      <NavbarWrapper component={UserSurvey} setDark={setIsDark} color="white" />
      <LezhinUsability />
      <NavbarWrapper component={Design} setDark={setIsDark} color="black" />
      <NavbarWrapper component={Personas} setDark={setIsDark} color="white" />
      <InitialFlows />
      <NavbarWrapper component={MidFi} setDark={setIsDark} color="black" />
      <NavbarWrapper
        component={LezhinFinal}
        setDark={setIsDark}
        color="white"
      />
      <Redesign />
      <LezhinConclusion />
      <div className="fixed bottom-10 z-50">
        <ProjectNavbar isDark={isDark} />
      </div>
    </main>
  );
}
