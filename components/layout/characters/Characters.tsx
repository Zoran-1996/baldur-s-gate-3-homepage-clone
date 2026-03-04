"use client";

import TextDivider from "@/components/common/TextDivider";
import { useState } from "react";
import BaldurDivider from "@/components/common/BaldurDivider";
import { motion, AnimatePresence } from "motion/react";
import { heroes } from "@/data/characters/heroes";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import BaldurHeading from "@/components/common/BaldurHeading";
import CharactersPortraits from "./CharactersPortraits";
import CharacterDescriptionBox from "./CharacterDescriptionBox";
import CharacterBackgroundAsset from "./CharacterBackgroundAsset";
import CharacterMainAsset from "./CharacterMainAsset";

const Characters = () => {
  const [activeAvatarIndex, setActiveAvatarIndex] = useState<number>(0);

  return (
    <section className="characters overflow-hidden lg:mt-15">
      <div className="lg:relative lg:mx-auto lg:w-full lg:max-w-242.5 lg:flex lg:flex-row-reverse lg:h-250 lg:justify-between xl:max-w-292.5 2xl:max-w-352.5">
        <div className="relative flex justify-center">
          <CharactersPortraits
            activeAvatarIndex={activeAvatarIndex}
            setActiveAvatarIndex={setActiveAvatarIndex}
          />
        </div>
        <AnimatePresence mode="wait">
          {heroes.map(
            (hero, index) =>
              activeAvatarIndex === index && (
                <motion.div
                  key={hero.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="characters-main pt-8 lg:pt-0 lg:basis-[75%]"
                >
                  <div className="relative h-125 lg:absolute lg:w-[120%] lg:h-[120%] lg:left-1/2 lg:-translate-x-1/2 lg:-z-1">
                    <CharacterBackgroundAsset hero={hero} />
                    <CharacterMainAsset hero={hero} />
                  </div>
                  <div className="container lg:h-full lg:flex lg:flex-col lg:pb-15">
                    <div className="lg:max-w-105 lg:w-full lg:my-auto 2xl:max-w-120">
                      <div className="text-center lg:text-left">
                        <BaldurSubheading className="mb-3">
                          {hero.title}
                        </BaldurSubheading>
                        <BaldurHeading className="lg:text-5xl 2xl:text-6xl">
                          {hero.name}
                        </BaldurHeading>
                        <TextDivider className="my-5 mx-auto lg:mr-auto lg:ml-[initial]" />
                      </div>
                      <div className="grid gap-6">
                        <p>{hero.textMain}</p>
                        {hero.textSecondary && <p>{hero.textSecondary}</p>}
                      </div>
                    </div>
                    <CharacterDescriptionBox hero={hero} />
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
        <div className="lg:bg-[url('/icons/heroes/dark-mask-avatar.webp')] lg:bg-no-repeat lg:bg-contain lg:absolute lg:w-101.5 lg:h-23.75 lg:bottom-0 lg:-right-30 lg:z-10 lg:pointer-events-none"></div>
      </div>
      <div className="container mt-15 lg:mt-0 relative z-10">
        <BaldurDivider />
      </div>
    </section>
  );
};

export default Characters;
