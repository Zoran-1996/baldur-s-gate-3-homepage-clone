import IconFeature from "@/components/icons/IconFeature";

interface RaceFeaturesProps {
  selectedRace: {
    features: {
      description: string;
      image: string;
    }[];
  };
}

const RaceFeatures = ({ selectedRace }: RaceFeaturesProps) => {
  return (
    <div className="race-feature flex relative flex-wrap gap-1.5 justify-center lg:justify-start">
      {selectedRace.features.map((feature, index) => (
        <div key={index} className="relative group">
          <div className="absolute bottom-full left-1/2 mb-2.5 -translate-y-5 text-center transform -translate-x-1/2 max-w-60 min-w-30 w-max rounded-sm py-2.5 pointer-events-none px-3.75 backdrop-blur-[10px] z-10 bg-black transition-all duration-400 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-[radial-gradient(circle_at_50%_0,#b18f6863_0%,#b18f6800_60%)]">
            <p className="leading-[1.4] text-white">{feature.description}</p>

            <div>
              <div className="bg-[url('/icons/heroes/hero-corner-top-left.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 top-0 left-0"></div>
              <div className="bg-[url('/icons/heroes/hero-corner-top-right.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 top-0 right-0"></div>
              <div className="bg-[url('/icons/heroes/hero-corner-bottom-left.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 bottom-0 left-0"></div>
              <div className="bg-[url('/icons/heroes/hero-corner-bottom-right.svg')] bg-contain bg-no-repeat absolute w-4.5 h-4.5 bottom-0 right-0"></div>

              <div className="before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-[calc(100%-32px)] before:h-0.5 before:bg-bone after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[calc(100%-32px)] after:h-0.5 after:bg-teak"></div>
              <div className="before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:h-[calc(100%-32px)] before:w-0.5 before:bg-[linear-gradient(180deg,#e1cbb7,#d4b496_50%,#be9775)] after:absolute after:right-0 after:top-1/2 after:transform after:-translate-y-1/2 after:h-[calc(100%-32px)] after:w-0.5 after:bg-[linear-gradient(180deg,#e1cbb7,#d4b496_50%,#be9775)]"></div>
            </div>
          </div>
          <IconFeature imageSrc={feature.image} />
        </div>
      ))}
    </div>
  );
};

export default RaceFeatures;
