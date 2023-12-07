"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.scss";
import { EffectCards } from "swiper/modules";

const swiper_slides = [
  { src: "/portfolio/portfolio-2.jpg", alt: "Title", id: 2 },
  { src: "/portfolio/portfolio-3.jpg", alt: "Title", id: 3 },
  { src: "/portfolio/portfolio-4.jpg", alt: "Title", id: 4 },
  { src: "/portfolio/portfolio-7.jpg", alt: "Title", id: 7 },
  { src: "/portfolio/portfolio-9.jpg", alt: "Title", id: 9 },
  { src: "/portfolio/portfolio-10.jpg", alt: "Title", id: 10 },
  { src: "/portfolio/portfolio-11.jpg", alt: "Title", id: 11 },
  { src: "/portfolio/portfolio-12.jpg", alt: "Title", id: 12 },
  { src: "/portfolio/portfolio-6.jpg", alt: "STitle", id: 13 },
  { src: "/portfolio/portfolio-8.jpg", alt: "Title", id: 8 },
  { src: "/portfolio/portfolio-1.jpg", alt: "Title", id: 1 },
  { src: "/portfolio/portfolio-5.jpg", alt: "Title", id: 5 },
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
