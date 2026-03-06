import { heroes } from "@/data/characters/heroes";
import Image from "next/image";
import { useRef } from "react";

interface CharactersPortraitsProps {
  activeAvatarIndex: number;
  setActiveAvatarIndex: (index: number) => void;
}

const CharactersPortraits = ({
  activeAvatarIndex,
  setActiveAvatarIndex,
}: CharactersPortraitsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={scrollContainerRef}
      className="characters-portraits z-9 pt-10 pl-10 pr-5 flex gap-5 overflow-x-auto lg:flex-col lg:gap-3.75 lg:pt-0 hide-scrollbar-lg"
    >
      {heroes.map((hero, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveAvatarIndex(index);

            const container = scrollContainerRef.current;
            const avatar = container?.children[index] as
              | HTMLElement
              | undefined;

            if (container && avatar) {
              const offset = 10;
              if (window.innerWidth >= 1024) {
                container.scrollTo({
                  top: avatar.offsetTop - offset,
                  behavior: "smooth",
                });
              } else {
                container.scrollTo({
                  left: avatar.offsetLeft - offset,
                  behavior: "smooth",
                });
              }
            }
          }}
          className={`character-portrait w-22.5 h-28 relative brightness-50 transition-all duration-300 ease-in-out shrink-0 lg:w-40 lg:h-50 cursor-pointer group hover:brightness-100 ${activeAvatarIndex === index ? "brightness-100" : ""}`}
        >
          <div className="relative w-20 h-25 lg:w-37.5 lg:h-47.5 top-1/2 left-1/2 transform -translate-1/2 z-10">
            <Image
              src={hero.avatar}
              alt={hero.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 1024px) 150px, 80px"
            />
          </div>
          <div>
            <div className="absolute w-20 h-25 lg:w-37.5 lg:h-47.5 top-1/2 left-1/2 transform -translate-1/2">
              <Image
                src={"/icons/heroes/avatar-bg.webp"}
                alt=""
                fill
                sizes="(min-width: 1024px) 150px, 80px"
              />
            </div>
            <div
              className={`opacity-0 absolute w-20 transition-opacity duration-300 ease-in-out h-25 lg:h-47.5 lg:w-37.5 top-1/2 left-1/2 transform -translate-1/2 group-[.active]:opacity-100 ${activeAvatarIndex === index ? "opacity-100" : ""}`}
            >
              <Image
                src={"/icons/heroes/avatar-bg-hover.webp"}
                alt=""
                fill
                sizes="(min-width: 1024px) 150px, 80px"
              />
            </div>
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

export default CharactersPortraits;
