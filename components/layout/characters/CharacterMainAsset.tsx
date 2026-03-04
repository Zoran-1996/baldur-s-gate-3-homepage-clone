import { HeroesProps } from "@/data/characters/heroes";

interface CharacterMainAssetProps {
  hero: HeroesProps;
}

const CharacterMainAsset = ({ hero }: CharacterMainAssetProps) => {
  return (
    <div className="character-main-asset flex justify-center relative h-full">
      <div
        className="absolute w-[120vw] bg-contain bg-no-repeat bg-center h-full lg:hidden"
        style={{
          backgroundImage: `url(${hero.heroImageMobile})`,
        }}
      />

      <div
        className="hidden bg-contain bg-no-repeat bg-center lg:block lg:absolute lg:aspect-square lg:w-[53vw] lg:max-w-180"
        style={{
          backgroundImage: `url(${hero.heroImage})`,
        }}
      />
    </div>
  );
};

export default CharacterMainAsset;
