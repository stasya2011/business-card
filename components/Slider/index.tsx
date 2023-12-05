"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.scss";
import { EffectCards } from "swiper/modules";

const swiper_slides = [
  { src: "/ks-1.jpg", alt: "Title", id: 1 },
  { src: "/ks-1.jpg", alt: "Title", id: 2 },
  { src: "/ks-1.jpg", alt: "Title", id: 3 },
  { src: "/ks-1.jpg", alt: "Title", id: 4 },
];

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {swiper_slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className={"card-2"}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={250}
                  height={290}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
