import { racesList } from "@/data/races/races";
import Image from "next/image";

interface RacesMobilePortraitsProps {
  activeRaceIndex: number;
  setActiveRace: (index: number) => void;
}

const RacesMobilePortraits = ({
  activeRaceIndex,
  setActiveRace,
}: RacesMobilePortraitsProps) => {
  return (
    <div className="races-mobile-portraits z-9 pt-10 pl-10 pr-5 flex gap-5 overflow-x-auto lg:hidden">
      {racesList.map((race, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveRace(index);
          }}
          className={`race-portrait w-22.5 h-28 relative brightness-50 transition-all duration-300 ease-in-out shrink-0 lg:w-40 lg:h-50 cursor-pointer group hover:brightness-100 ${activeRaceIndex === index ? "brightness-100 bg-[radial-gradient(circle_at_50%_44%,transparent_0%,transparent_24%,#000_118%),radial-gradient(circle_at_50%_27%,hsla(28,34%,57%,.5)_0%,hsla(28,34%,57%,0)_62%)]" : ""}`}
        >
          <div className="relative w-17 h-17 top-1/2 left-1/2 transform -translate-1/2 z-10 lg:w-21.75 lg:h-21.75">
            <Image
              src={race.image}
              alt={race.name}
              fill
              sizes="(min-width: 1024px) 87px, 68px"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <div className="bg-[url('/icons/heroes/hero-corner-top-left.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 top-0 left-0"></div>
            <div className="bg-[url('/icons/heroes/hero-corner-top-right.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 top-0 right-0"></div>
            <div className="bg-[url('/icons/heroes/hero-corner-bottom-left.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 bottom-0 left-0"></div>
            <div className="bg-[url('/icons/heroes/hero-corner-bottom-right.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 bottom-0 right-0"></div>

            <div className="before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-[calc(100%-32px)] before:h-0.5 before:bg-bone after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[calc(100%-32px)] after:h-0.5 after:bg-teak"></div>
            <div className="before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:h-[calc(100%-32px)] before:w-0.5 before:bg-[linear-gradient(180deg,#e1cbb7,#d4b496_50%,#be9775)] after:absolute after:right-0 after:top-1/2 after:transform after:-translate-y-1/2 after:h-[calc(100%-32px)] after:w-0.5 after:bg-[linear-gradient(180deg,#e1cbb7,#d4b496_50%,#be9775)]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RacesMobilePortraits;
