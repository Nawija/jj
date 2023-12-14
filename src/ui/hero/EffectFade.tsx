"use client";

// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

import heroImg from "@/public/images/jarek-olszewski.jpg";
import s1Img from "@/public/images/s1.jpg";
import s2Img from "@/public/images/s2.jpg";
import s3Img from "@/public/images/s3.jpg";
import s4Img from "@/public/images/s4.jpg";
import ShadowBg from "../ShadowBg";

const imgSwiper = [
  {
    src: s1Img,
    alt: "s1",
    title: "Ania & Tomek",
    position: "40%",
  },
  {
    src: s2Img,
    alt: "s2",
    title: "Ania & Tomek",
    position: "40%",
  },
  {
    src: s3Img,
    alt: "s3",
    title: "Ania & Tomek",
    position: "30%",
  },
  {
    src: s4Img,
    alt: "s4",
    title: "Ania & Tomek",
    position: "50%",
  },
  {
    src: s3Img,
    alt: "s3",
    title: "Ania & Tomek",
    position: "30%",
  },
  {
    src: heroImg,
    alt: "heroImg",
    title: "Jarosław",
    position: "20%",
  },
];

export async function EffectFadeCarousel() {
  return (
    <>
      <Swiper
        effect={"fade"}
        navigation={false}
        speed={3000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper relative -z-20 h-[600px]"
      >
        {imgSwiper.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                objectPosition: `50% ${img.position}`,
              }}
              height={1200}
              width={1400}
              src={img.src}
              alt={img.alt}
              title={img.title}
              loading={img.src === s1Img ? "eager" : "lazy"}
              placeholder="blur"
              sizes="(min-width: 1668px) 100vw, (max-width: 786px) 50vw, 33vw"
              className="anim-scale"
            />
            <ShadowBg z={30} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
