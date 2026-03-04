import { SubRace } from "@/data/races/races";

interface RaceSubraceDetailsProps {
  subraces?: SubRace[];
  activeSubraceIndex: number;
}

const RaceSubraceDetails = ({
  subraces,
  activeSubraceIndex,
}: RaceSubraceDetailsProps) => {
  if (!subraces || subraces.length === 0) return null;

  const safeIndex = Math.min(activeSubraceIndex, subraces.length - 1);

  const activeSubrace = subraces[safeIndex];

  return (
    <div className="race-subrace-details mt-5 text-center p-4 rounded w-full">
      <h4 className="text-2xl text-baldur-gradient mb-2.5">
        {activeSubrace.title}
      </h4>
      <p>{activeSubrace.description}</p>
    </div>
  );
};

export default RaceSubraceDetails;
