"use client";

import BaldurBorder from "@/components/common/BaldurBorder";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import TextDivider from "@/components/common/TextDivider";
import { RaceDetail } from "@/data/races/races";
import { useEffect } from "react";
import RaceFeatures from "./RaceFeatures";
import RaceSubraces from "./RaceSubraces";
import RaceSubraceDetails from "./RaceSubraceDetails";

interface RaceDescriptionProps {
  selectedRace: RaceDetail;
  activeSubraceIndex: number;
  setActiveSubrace: (index: number) => void;
}

const RaceDescription = ({
  selectedRace,
  activeSubraceIndex,
  setActiveSubrace,
}: RaceDescriptionProps) => {
  useEffect(() => {
    setActiveSubrace(0);
  }, [selectedRace.id, setActiveSubrace]);

  return (
    <div className="race-description mt-10 lg:mt-0">
      <div className="container lg:h-full">
        <div className="bg-[#00000059] bg-linear-to-b from-[#0000005c] to-[#000000a6] px-8 py-20 relative lg:h-full lg:px-15 lg:py-10 before:absolute before:inset-0 before:[mask:radial-gradient(16px_at_16px_16px,transparent_98%,#000)_-16px_-16px] before:pointer-events-none">
          <div className="lg:flex gap-15 relative z-10">
            <div>
              <h3 className="text-4xl uppercase text-baldur-gradient text-center lg:text-left">
                {selectedRace.name}
              </h3>
              <TextDivider className="my-5 mx-auto w-30 lg:mr-auto lg:ml-[initial]" />
              <p>{selectedRace.description}</p>
            </div>
            <div className="mt-5 lg:mt-0 lg:w-32.5 lg:shrink-0">
              <span className="text-sm uppercase block text-center tracking-widest text-sunrise-yellow mb-2.5 lg:text-left lg:max-w-30">
                Race Features:
              </span>
              <RaceFeatures selectedRace={selectedRace} />
            </div>
          </div>

          <BaldurBorder className="my-7.5" />

          {selectedRace.subraces && selectedRace.subraces.length > 0 ? (
            <>
              <BaldurSubheading className="mb-5">Subraces</BaldurSubheading>

              <div className="flex flex-col items-center relative w-full">
                <div className="relative w-full">
                  <RaceSubraces
                    subraces={selectedRace.subraces}
                    activeSubraceIndex={activeSubraceIndex}
                    setActiveSubrace={setActiveSubrace}
                  />
                </div>

                <RaceSubraceDetails
                  subraces={selectedRace.subraces}
                  activeSubraceIndex={activeSubraceIndex}
                />
              </div>
            </>
          ) : null}

          <div>
            <div className="before:inline-block before:h-27 before:w-27 before:absolute before:top-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/card-corner.svg')] before:left-0 before:bg-position-[-8px_-8px] after:inline-block after:h-27 after:w-27 after:absolute after:top-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/card-corner.svg')] after:right-0 after:transform after:rotate-90 after:bg-position-[-8px_-8px]"></div>
            <div className="before:inline-block before:h-27 before:w-27 before:absolute before:bottom-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/card-corner.svg')] before:left-0 before:transform before:-rotate-90 before:bg-position-[-8px_-8px] after:inline-block after:h-27 after:w-27 after:absolute after:bottom-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/card-corner.svg')] after:right-0 after:transform after:rotate-180 after:bg-position-[-8px_-8px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceDescription;
