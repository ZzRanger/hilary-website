"use client";

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

import React from "react";
import ProjectNavbar from "@/components/navigation/ProjectNavbara";
import useDebouncedState from "@/utils/useDebouncedState";
import NavbarWrapper from "@/components/navigation/NavbarWrapper";

export default function Planner() {
  const [isDark, setIsDark] = useDebouncedState(false, 100);

  const handleSetDark = setIsDark;

  return (
    <>
      <main className="flex w-screen flex-col items-center bg-white">
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
          <ProjectNavbar isDark={isDark} />
        </div>
      </main>
    </>
  );
}
