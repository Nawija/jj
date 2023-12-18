"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { GiBranchArrow } from "react-icons/gi";

import heroImg from "@/public/images/jarek-olszewski.jpg";
import s1Img from "@/public/images/s1.jpg";
import s2Img from "@/public/images/s2.jpg";
import s3Img from "@/public/images/s3.jpg";
import s4Img from "@/public/images/s4.jpg";

const imgSwiper = [
  {
    src: s1Img,
    alt: "s1",
    title: "Ania & Tomek",
  },
  {
    src: s2Img,
    alt: "s2",
    title: "Ania & Tomek",
  },
  {
    src: s3Img,
    alt: "s3",
    title: "Ania & Tomek",
  },
  {
    src: s4Img,
    alt: "s4",
    title: "Ania & Tomek",
  },
  {
    src: s3Img,
    alt: "s3",
    title: "Ania & Tomek",
  },
  {
    src: heroImg,
    alt: "heroImg",
    title: "Jarosław",
  },
];

export const dynamic = true;

export default function CarouselPolaroid() {
  return (
    <Swiper
      effect={"coverflow"}
      freeMode={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop
      speed={500}
      autoplay={{
        delay: 2600,
        disableOnInteraction: false,
      }}
      spaceBetween={90}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 20,
        modifier: 3,
        slideShadows: false,
      }}
      modules={[Autoplay, EffectCoverflow, Navigation]}
      className="mySwiper mx-auto max-w-screen-xl"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },

        580: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
    >
      {imgSwiper.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mx-2 my-4 bg-white p-4 shadow-lg">
            <Image
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
              loading="lazy"
              height={400}
              width={200}
              src={slide.src}
              alt={slide.alt}
              sizes="(min-width: 1668px) 80vw, (max-width: 786px) 50vw, 33vw"
            />
            <p className="mt-2 text-center font-semibold ">{slide.title}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-center space-x-12 mt-3">
        <div className="swiper-button-prev cursor-pointer">
          <GiBranchArrow className="text-5xl rotate-[133deg]"/>
        </div>
        <div className="swiper-button-next cursor-pointer">
          <GiBranchArrow className="text-5xl rotate-[-47deg]"/>
        </div>
      </div>
    </Swiper>
  );
}
