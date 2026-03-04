import TextDivider from "@/components/common/TextDivider";
import { racesList } from "@/data/races/races";
import Image from "next/image";

interface RacesProps {
  activeRaceIndex: number;
  setActiveRace: (index: number) => void;
}

const Races = ({ activeRaceIndex, setActiveRace }: RacesProps) => {
  return (
    <div className="races hidden z mt-10 lg:mt-0 lg:block">
      <div className="container">
        <div className="bg-[#00000059] bg-linear-to-b from-[#0000005c] to-[#000000a6] px-8 py-20 relative lg:py-10">
          <h3 className="text-4xl uppercase text-baldur-gradient text-left">
            Races
          </h3>

          <TextDivider className="my-5 w-30" />

          <div className="grid grid-cols-3 gap-2.5">
            {racesList.map((race, index) => {
              const isActive = activeRaceIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveRace(index)}
                  className="relative group flex flex-col justify-center items-center text-center aspect-square races-race-btn overflow-hidden transition-transform duration-300 ease-out"
                >
                  <div
                    className={`
                      absolute inset-0
                      bg-[radial-gradient(circle_at_50%_44%,transparent_0,transparent_24%,#000_118%),radial-gradient(circle_at_50%_27%,#b78f6c80_0,#b78f6c00_62%)]
                      backdrop-blur-[15px]
                      opacity-0
                      transition-all duration-300 ease-out
                      ${isActive ? "opacity-100" : ""}
                      group-hover:opacity-100
                    `}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative lg:w-15 lg:h-15 xl:w-18 xl:h-18 2xl:w-21.75 2xl:h-21.75">
                      <Image
                        src={race.image}
                        alt={race.name}
                        fill
                        sizes="(min-width: 1536px) 87px, (min-width: 1280px) 72px, (min-width: 1024px) 60px, 100vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <span className="text-sunrise-yellow text-lg mt-2">
                      {race.name}
                    </span>
                  </div>

                  <div
                    className={`
                      absolute inset-0 pointer-events-none
                      opacity-0
                      transition-opacity duration-300 ease-out
                      ${isActive ? "opacity-100" : ""}
                      group-hover:opacity-100
                    `}
                  >
                    <div className="bg-[url('/icons/heroes/hero-corner-top-left.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 top-0 left-0"></div>
                    <div className="bg-[url('/icons/heroes/hero-corner-top-right.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 top-0 right-0"></div>
                    <div className="bg-[url('/icons/heroes/hero-corner-bottom-left.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 bottom-0 left-0"></div>
                    <div className="bg-[url('/icons/heroes/hero-corner-bottom-right.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 bottom-0 right-0"></div>

                    <div className="before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%-32px)] before:h-0.5 before:bg-bone after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-32px)] after:h-0.5 after:bg-teak"></div>

                    <div className="before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[calc(100%-32px)] before:w-0.5 before:bg-[linear-gradient(180deg,#e1cbb7,#d4b496_50%,#be9775)] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[calc(100%-32px)] after:w-0.5 after:bg-[linear-gradient(180deg,#e1cbb7,#d4b496_50%,#be9775)]"></div>
                  </div>
                </button>
              );
            })}
          </div>

          <div>
            <div className="before:inline-block before:h-27 before:w-27 before:absolute before:top-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/card-corner.svg')] before:left-0 before:bg-position-[-8px_-8px] after:inline-block after:h-27 after:w-27 after:absolute after:top-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/card-corner.svg')] after:right-0 after:rotate-90 after:bg-position-[-8px_-8px]"></div>

            <div className="before:inline-block before:h-27 before:w-27 before:absolute before:bottom-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/card-corner.svg')] before:left-0 before:-rotate-90 before:bg-position-[-8px_-8px] after:inline-block after:h-27 after:w-27 after:absolute after:bottom-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/card-corner.svg')] after:right-0 after:rotate-180 after:bg-position-[-8px_-8px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Races;
