"use client";

import BaldurFrame from "@/components/common/BaldurFrame";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import IconSliderArrow from "@/components/icons/slider/IconSliderArrow";
import { awards } from "@/data/awards/awards";
import BaldurSubheading from "@/components/common/BaldurSubheading";
import BaldurHeading from "@/components/common/BaldurHeading";

const Awards = () => {
  return (
    <section className="awards my-10">
      <BaldurFrame
        fullScreenMobileAsset={true}
        assetMobile="/images/awards/awards-bg.webp"
        assetDesktop="/images/awards/awards-bg.webp"
      >
        <div>
          <BaldurSubheading className="mb-1 lg:mb-0">
            Baldur's Gate 3
          </BaldurSubheading>
          <BaldurHeading className="mb-9 group-has-[.cta-text]:mb-4">
            Awards
          </BaldurHeading>
        </div>
        <Swiper
          className="awards-slider cursor-grab"
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".awards-slider-button-next",
            prevEl: ".awards-slider-button-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index} className="flex! justify-center">
              <div className="relative w-40 h-23.75 flex items-center justify-center">
                <Image
                  alt={award.label}
                  src={award.imgSrc}
                  fill
                  sizes="160px"
                  style={{
                    objectFit: "contain",
                  }}
                />
                <Image
                  className="opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-100"
                  alt={award.label}
                  src={award.imgSrcHovered}
                  fill
                  sizes="160px"
                  style={{
                    objectFit: "contain",
                    willChange: "opacity",
                    backfaceVisibility: "hidden",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation flex justify-center gap-6 mt-5 -mb-20 lg:absolute lg:bottom-5 lg:left-10 lg:m-0">
          <button
            aria-label="Previous slide"
            className="swiper-button-prev awards-slider-button-prev custom-swiper-button scale-[0.8]"
          >
            <IconSliderArrow aria-hidden="true" />
          </button>
          <button
            aria-label="Next slide"
            className="swiper-button-next awards-slider-button-next custom-swiper-button scale-[0.8]"
          >
            <IconSliderArrow aria-hidden="true" />
          </button>
        </div>
      </BaldurFrame>
    </section>
  );
};

export default Awards;
