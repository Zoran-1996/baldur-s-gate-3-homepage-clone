"use client";

import { racesList, racesDetails } from "@/data/races/races";
import { useState } from "react";
import Races from "./races/Races";
import RaceDescription from "./races/RaceDescription";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import RacesMobilePortraits from "./races/RacesMobilePortraits";
import Classes from "./classes/Classes";

const RacesAndClasses = ({ className }: { className?: string }) => {
  const [activeRaceIndex, setActiveRace] = useState<number>(0);
  const [activeSubraceIndex, setActiveSubrace] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const selectedRace = racesDetails[racesList[activeRaceIndex].id];
  const tabs = ["Races", "Classes"];

  return (
    <section
      className={`races-and-classes py-20 relative overflow-hidden ${className || ""}`}
    >
      <div
        style={{
          backgroundImage:
            activeTabIndex === 0
              ? "url('/images/races-classes/races-bg.webp')"
              : "url('/images/races-classes/classes-bg.webp')",
        }}
        className="races-and-classes-mask absolute h-93 w-full mask-center top-0 left-0 bg-cover bg-no-repeat -z-1 mask-cover opacity-40 mask-no-repeat bg-center max-w-352.5 lg:left-1/2 lg:mask-top lg:transform lg:-translate-x-1/2 lg:h-130 lg:mask-contain mask-[url('/images/faq/faq-background-mask.webp')]"
      ></div>

      <div className="container">
        <BaldurSubheading>Game Races and Classes</BaldurSubheading>
        <div className="flex flex-wrap gap-6.25 mt-8 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`text-4xl uppercase transition-all duration-200 ${
                activeTabIndex === index
                  ? "text-white text-baldur-gradient-lg"
                  : "text-sunrise-yellow transform lg:scale-[0.6] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTabIndex === 0 && (
          <div className="lg:mx-auto lg:w-full lg:max-w-242.5! xl:max-w-292.5! 2xl:max-w-352.5! lg:grid lg:grid-cols-[43.76%_54.53%] lg:gap-5">
            <RacesMobilePortraits
              activeRaceIndex={activeRaceIndex}
              setActiveRace={setActiveRace}
            />

            <Races
              activeRaceIndex={activeRaceIndex}
              setActiveRace={setActiveRace}
            />

            <RaceDescription
              selectedRace={selectedRace}
              setActiveSubrace={setActiveSubrace}
              activeSubraceIndex={activeSubraceIndex}
            />
          </div>
        )}

        {activeTabIndex === 1 && (
          <div className="px-[8vw] lg:px-0 lg:mx-auto lg:w-full lg:max-w-242.5! xl:max-w-292.5! 2xl:max-w-352.5!">
            <Classes />
          </div>
        )}
      </div>
    </section>
  );
};

export default RacesAndClasses;
