import IconClose from "@/components/icons/IconClose";
import Image from "next/image";
import HeaderMenuOverlaySocials from "./HeaderMenuOverlaySocials";
import { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import CTASlider from "../cta-slider/CTASlider";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import FooterCompanies from "../footer/FooterCompanies";
import HeaderMainMenu from "./HeaderMainMenu";

interface HeaderMenuOverlayProps {
  setActiveMenuOverlay: (value: boolean) => void;
}

const HeaderMenuOverlay = ({
  setActiveMenuOverlay,
}: HeaderMenuOverlayProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="header-menu-overlay fixed top-0 left-0 w-full h-full backdrop-blur-[10px] z-100 bg-black/60">
      <div className="fixed z-10 w-[90%] left-1/2 transform -translate-x-1/2 top-6">
        <div className="flex items-center justify-between">
          <div>
            <HeaderLogo />
          </div>

          <button
            onClick={() => {
              setActiveMenuOverlay(false);
              setActiveImage(0);
            }}
          >
            <span className="sr-only">Close Menu</span>
            <IconClose className="text-muddy-waters w-7 h-auto" />
          </button>
        </div>
      </div>

      <div className="flex h-full flex-col relative overflow-auto lg:gap-5 lg:pt-42">
        <div className="h-100 absolute opacity-70 -z-1 bg-amber-300/10 top-0 left-0 w-full mask-cover mask-no-repeat mask-[center_bottom] md:h-120 lg:mask-[left_center] lg:w-[50vw] mask-[url('/icons/masks/mask-menu.svg')] lg:h-svh lg:mask-cover lg:right-0 lg:top-0 lg:left-[initial]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={`/images/header/menu-${index + 1}.webp`}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={index === 0}
              className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${activeImage === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

        <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:px-10 lg:gap-18">
          <div className="flex flex-col items-center my-auto pt-40 pb-10 px-[8vw] md:pt-60 lg:p-0 lg:items-start">
            <BaldurSubheading className="mb-3.75 lg:mb-5">
              Sitemap
            </BaldurSubheading>
            <div className="grid gap-7 text-center lg:grid-cols-[300px_300px] lg:text-left">
              <HeaderMainMenu setActiveImage={setActiveImage} />
            </div>
          </div>

          <div className="pb-10 w-80 mx-auto lg:p-0 lg:m-0">
            <CTASlider
              slides={[
                {
                  subheading: "Larian Merch",
                  heading: "Discover in merch",
                  asset: "/images/CTA/merch-mobile.webp",
                  slideLinkHref: "https://eu.merch.larian.com",
                  slideLinkLabel:
                    "Discover Baldur's Gate 3 Merch on Larian Merch website",
                },
                {
                  subheading: "Play The Game",
                  heading: "Blood in Baldur's Gate",
                  asset: "/images/CTA/menu-banner-2.webp",
                  slideLinkHref: "https://bloodinbaldursgate.larian.com/",
                  slideLinkLabel: "Discover Baldur's Gate 3 on Steam",
                },
              ]}
            />
          </div>
        </div>

        <div className="lg:flex lg:justify-between lg:p-10 lg:mt-auto">
          <div className="mb-15 lg:mb-0">
            <div className="container">
              <HeaderMenuOverlaySocials />
            </div>
          </div>

          <div className="mb-12.5 lg:mb-0">
            <div className="container">
              <ul className="flex items-center gap-5">
                <FooterCompanies />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute h-50 w-105 pointer-events-none -top-6 -left-[calc((100vw-90%)/2)] bg-[url('/icons/header/cloud-left.webp')] bg-contain -z-1 bg-no-repeat"></div>

      <div className="absolute pointer-events-none -top-6 -right-[calc((100vw-90%)/2)] w-screen h-52.5 bg-[url('/icons/header/cloud-right.webp')] bg-contain bg-no-repeat bg-top lg:bg-top-right -z-1" />
    </div>
  );
};

export default HeaderMenuOverlay;
