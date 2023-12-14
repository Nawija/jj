"use client";

// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

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

export async function EffectFadeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        speed={3000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {imgSwiper.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              style={{ width: "100%" }}
              height={700}
              width={1200}
              src={img.src}
              alt={img.alt}
              title={img.title}
              className="anim-scale"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-black/60" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
