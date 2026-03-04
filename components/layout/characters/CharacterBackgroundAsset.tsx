import { HeroesProps } from "@/data/characters/heroes";

interface CharacterBackgroundAssetProps {
  hero: HeroesProps;
}

const CharacterBackgroundAsset = ({ hero }: CharacterBackgroundAssetProps) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${hero.heroBgImageMobile})`,
        }}
        className="absolute bg-center bg-size-[initial] bg-no-repeat w-full h-full lg:hidden"
      ></div>
      <div
        style={{
          backgroundImage: `url(${hero.heroBgImage})`,
        }}
        className="hidden lg:block absolute bg-no-repeat w-full h-full bg-[url('/images/heroes/astarion/bg-hero-astarion.webp')] bg-contain bg-top"
      ></div>
    </>
  );
};

export default CharacterBackgroundAsset;
