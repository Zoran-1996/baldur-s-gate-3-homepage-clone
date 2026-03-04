import Image from "next/image";
import BaldurBorder from "@/components/common/BaldurBorder";
import CharacterDescriptionBoxDecos from "./CharacterDescriptionBoxDecos";
import { HeroesProps } from "@/data/characters/heroes";

type CharacterDescriptionBoxProps = {
  hero: HeroesProps;
};

const CharacterDescriptionBox = ({ hero }: CharacterDescriptionBoxProps) => {
  const hasContent =
    (hero.classIcon && hero.classTitle) ||
    (hero.raceIcon && hero.raceTitle) ||
    (hero.subRaceIcon && hero.subRaceTitle) ||
    hero.skillProficiencies?.length ||
    hero.languages?.length ||
    hero.background?.length;

  if (!hasContent) return null;

  return (
    <div className="character-description-box bg-[#0000004d] backdrop-blur-lg relative py-7.5 px-8.5 mt-5 lg:mt-auto">
      <div>
        <div className="grid gap-2 lg:gap-8 lg:grid-cols-3">
          {hero.classIcon && hero.classTitle && (
            <div className="flex items-center gap-6.5 lg:gap-2">
              <div className="relative w-25 h-25 flex justify-center items-center shrink-0">
                <Image
                  src={hero.classIcon}
                  alt=""
                  fill
                  sizes="100px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="inline-block uppercase text-sunrise-yellow text-sm tracking-widest">
                  Class:
                </h3>
                <span className="text-3xl text-baldur-gradient uppercase md:text-xl">
                  {hero.classTitle}
                </span>
              </div>
            </div>
          )}

          {hero.raceIcon && hero.raceTitle && (
            <div className="flex items-center gap-6.5 lg:gap-2">
              <div className="relative w-25 h-25 flex justify-center items-center shrink-0">
                <div className="relative h-20 w-20">
                  <Image
                    src={hero.raceIcon}
                    alt=""
                    fill
                    sizes="80px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="inline-block uppercase text-sunrise-yellow text-sm tracking-widest">
                  Race:
                </h3>
                <span className="text-3xl text-baldur-gradient uppercase md:text-xl">
                  {hero.raceTitle}
                </span>
              </div>
            </div>
          )}

          {hero.subRaceIcon && hero.subRaceTitle && (
            <div className="flex items-center gap-6.5 lg:gap-2">
              <div className="w-25 h-25 flex items-center justify-center">
                <div className="rounded-full border border-sunrise-yellow w-20 h-20 flex items-center justify-center">
                  <Image
                    src={hero.subRaceIcon}
                    alt=""
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="inline-block uppercase text-sunrise-yellow text-sm tracking-widest">
                  Subrace:
                </h3>
                <span className="text-3xl text-baldur-gradient uppercase md:text-xl">
                  {hero.subRaceTitle}
                </span>
              </div>
            </div>
          )}
        </div>

        <BaldurBorder className="my-5" />

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">
          {hero.skillProficiencies?.length && (
            <div>
              <h3 className="text-sunrise-yellow uppercase text-sm tracking-widest mb-1.5">
                Skill Proficiencies:
              </h3>
              <p>{hero.skillProficiencies.join(", ")}</p>
            </div>
          )}

          {hero.languages?.length && (
            <div>
              <h3 className="text-sunrise-yellow uppercase text-sm tracking-widest mb-1.5">
                Languages:
              </h3>
              <p>{hero.languages.join(", ")}</p>
            </div>
          )}

          {hero.background?.length && (
            <div>
              <h3 className="text-sunrise-yellow uppercase text-sm tracking-widest mb-1.5">
                Background:
              </h3>
              <p>{hero.background.join(", ")}</p>
            </div>
          )}
        </div>
      </div>

      <CharacterDescriptionBoxDecos />
    </div>
  );
};

export default CharacterDescriptionBox;
