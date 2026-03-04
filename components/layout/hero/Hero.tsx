"use client";

import BaldurDivider from "@/components/common/BaldurDivider";
import Button from "@/components/common/Button";
import IconPlayVideo from "@/components/icons/hero/IconPlayVideo";
import HeroVideoModal from "./HeroVideoModal";
import HeroSocialMedias from "./HeroSocialMedias";
import HeroScrollDown from "./HeroScrollDown";
import HeroPlatforms from "./HeroPlatforms";
import HeroVideo from "./HeroVideo";
import { useState } from "react";

const Hero = () => {
  const [activeVideoModal, setActiveVideoModal] = useState(false);

  return (
    <section className="hero relative">
      <div className="mb-10 justify-end items-center min-h-190 lg:h-[95svh] relative flex flex-col">
        <button
          aria-label="Play Baldur's Gate 3 trailer video"
          onClick={() => setActiveVideoModal((prevState) => !prevState)}
          className="hidden w-34.25 h-34.25 group absolute left-1/2 top-[45%] transform -translate-y-1/2 -translate-x-1/2 z-10 before:absolute before:top-1/2 before:left-1/2 before:w-[85%] before:transform before:-translate-y-1/2 before:-translate-x-1/2 before:h-[85%] before:rounded-full before:bg-black/40 before:backdrop-blur-[10px] before:-z-1 lg:block"
        >
          <IconPlayVideo aria-hidden="true" />
        </button>

        <div className="relative z-10">
          <div className="container flex flex-col items-center">
            <button
              aria-label="Play Baldur's Gate 3 trailer video"
              onClick={() => setActiveVideoModal((prevState) => !prevState)}
              className="w-34.25 h-34.25 group relative before:absolute before:top-1/2 before:left-1/2 before:w-[85%] before:transform before:-translate-y-1/2 before:-translate-x-1/2 before:h-[85%] before:rounded-full before:bg-black/40 before:backdrop-blur-[10px] before:-z-1 lg:hidden"
            >
              <IconPlayVideo aria-hidden="true" />
            </button>

            <h1 className="uppercase text-4xl text-baldur-gradient mt-2.5 mb-6 md:mt-9 lg:text-5xl">
              It's party time!
            </h1>
            <Button className="min-w-58.5 mb-5" variant="secondary" href={"#"}>
              Get it now
            </Button>
            <span className="uppercase text-sunrise-yellow tracking-widest mt-4 inline-block text-sm">
              Available now
            </span>

            <div className="mt-6">
              <HeroPlatforms />
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <BaldurDivider />
      </div>

      <div className="hero-video-wrapper absolute pointer-events-none top-0 left-0 w-full h-full">
        <HeroVideo />
      </div>

      {activeVideoModal && (
        <HeroVideoModal setActiveVideoModal={setActiveVideoModal} />
      )}

      <HeroSocialMedias />
      <HeroScrollDown />
    </section>
  );
};

export default Hero;
