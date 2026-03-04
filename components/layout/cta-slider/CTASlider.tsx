"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CTACard, { CTACardProps } from "./CTACard";

const CTASlider = ({ slides }: { slides: CTACardProps[] }) => {
  return (
    <Swiper
      className="CTA-slider"
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <CTACard {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CTASlider;
