import Image from "next/image";
import { RaceDetail } from "@/data/races/races";

interface RaceSubracesProps {
  subraces: RaceDetail["subraces"];
  activeSubraceIndex: number;
  setActiveSubrace: (index: number) => void;
}

const RaceSubraces = ({
  subraces,
  activeSubraceIndex,
  setActiveSubrace,
}: RaceSubracesProps) => {
  if (!subraces || subraces.length === 0) return null;

  return (
    <div className="flex justify-center flex-wrap gap-2.5 transition-transform duration-300 ease-in-out">
      {subraces.map((subrace, index) => {
        const isActive = activeSubraceIndex === index;

        return (
          <div
            key={subrace.id}
            onClick={() => setActiveSubrace(index)}
            className={`
              race-subraces
              shrink-0
              w-21 h-21
              bg-creole
              border
              rounded-full
              flex items-center justify-center
              cursor-pointer
              transition-all
              hover:opacity-100
              hover:border-sapling
              hover:bg-[radial-gradient(circle_at_50%_50%,#b78f6c80_0,#b78f6c00_50%)]
              ${
                isActive
                  ? "opacity-100 border-sapling bg-[radial-gradient(circle_at_50%_50%,#b78f6c80_0,#b78f6c00_50%)]"
                  : "opacity-50"
              }
            `}
          >
            <Image
              src={subrace.image}
              alt={subrace.title}
              width={55}
              height={55}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RaceSubraces;
