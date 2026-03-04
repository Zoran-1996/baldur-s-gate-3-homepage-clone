"use client";

import { SwiperSlide } from "swiper/react";

export interface CTACardProps {
  subheading?: string;
  heading: string;
  asset: string;
  slideLinkHref: string;
  slideLinkLabel: string;
}

const CTACard = ({
  subheading,
  heading,
  asset,
  slideLinkHref,
  slideLinkLabel,
}: CTACardProps) => {
  return (
    <SwiperSlide className="CTA-card">
      <a
        href={slideLinkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex relative p-2.5"
        aria-label={slideLinkLabel}
      >
        <div className="bg-black/35 pt-10 text-center flex flex-col w-full [mask:radial-gradient(16px_at_16px_16px,transparent_98%,#000)_-16px_-16px] lg:text-left lg:relative">
          <div className="px-7.5 text-center lg:px-9">
            <span className="inline-block uppercase mb-5 text-sunrise-yellow tracking-widest text-sm lg:mb-5">
              {subheading}
            </span>
            <h2 className="text-baldur-gradient text-2xl uppercase mb-9 group-has-[.cta-text]:mb-4 lg:text-2xl">
              {heading}
            </h2>
          </div>

          <div className="baldur-frame-asset mt-auto">
            <div
              className="block w-full bg-center h-85 md:h-60 bg-no-repeat bg-cover lg:h-85"
              style={{ backgroundImage: `url('${asset}')` }}
            ></div>
          </div>
        </div>

        <div className="baldur-frame-decos">
          <div className="before:inline-block before:h-[calc(100%-34px)] before:bg-teak before:w-px before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:left-0 after:inline-block after:h-[calc(100%-34px)] after:bg-teak after:w-px after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:right-0"></div>
          <div className="before:inline-block before:h-px before:bg-teak before:w-[calc(100%-34px)] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:top-0 after:inline-block after:h-px after:bg-teak after:w-[calc(100%-34px)] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0"></div>
          <div className="before:inline-block before:h-4.5 before:w-4.5 before:absolute before:top-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] before:left-0 after:inline-block after:h-4.5 after:w-4.5 after:absolute after:top-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] after:right-0 after:transform after:rotate-90"></div>
          <div className="before:inline-block before:h-4.5 before:w-4.5 before:absolute before:bottom-0 before:bg-contain before:bg-no-repeat before:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] before:left-0 before:transform before:-rotate-90 after:inline-block after:h-4.5 after:w-4.5 after:absolute after:bottom-0 after:bg-contain after:bg-no-repeat after:bg-[url('/icons/baldur-frame/baldur-frame-corner-deco.svg')] after:right-0 after:transform after:rotate-180"></div>
        </div>
      </a>
    </SwiperSlide>
  );
};

export default CTACard;
