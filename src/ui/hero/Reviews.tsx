"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import heroImg from "@/public/images/jarek-olszewski.jpg";
import s1Img from "@/public/images/s1.jpg";
import s2Img from "@/public/images/s2.jpg";
import s3Img from "@/public/images/s3.jpg";
import s4Img from "@/public/images/s4.jpg";

const reviewSwiper = [
  {
    desc: "lorem ipsum rem, consectetur adolor sit amet lorem, consectetur adipiscing elit",
    src: s1Img,
    alt: "s1",
    title: "Tomek",
  },
  {
    desc: "lorem ipsum dolor sit amet lorem, lor sit ame consectetur adipiscing elit",
    src: s2Img,
    alt: "s2",
    title: "Ania",
  },
  {
    desc: "lorem ipsum dolor sit amet lorem, consecons econse consectetur adipiscing elit",
    src: s3Img,
    alt: "s3",
    title: "Bartek",
  },
  {
    desc: "lorem ipsum dolor sit amet lorem,nsectetur adipiscing consectetur adipiscing elit",
    src: s4Img,
    alt: "s4",
    title: "Jurek",
  },
  {
    desc: "lorem ipsum dnsectetur adipiscingolor sit amet lorem, consectetur adipiscing elit",
    src: s3Img,
    alt: "s3",
    title: "Grzesiek",
  },
  {
    desc: "lorem ipsum dolor sit amet lorem, consectetur adipiscing nsectetur adipiscing elit",
    src: heroImg,
    alt: "heroImg",
    title: "Jarosław",
  },
];

export default function Review() {
  return (
    <Swiper
      effect={"coverflow"}
      freeMode={true}
      navigation={true}
      loop
      speed={500}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 3,
        stretch: 0,
        depth: 0,
        modifier: 2,
        slideShadows: false,
      }}
      modules={[Autoplay, EffectCoverflow]}
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
      {reviewSwiper.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex w-full max-w-lg flex-col rounded-xl p-8 text-left lg:mx-auto bg-white">
            <p className="mx-auto text-base leading-relaxed text-black/80">
              {slide.desc}
            </p>
            <div className="flex items-center justify-start">
              <Image
                alt="testimonial"
                className="mr-3 mt-8 inline-block h-12 w-12 rounded-full object-cover object-center"
                src={slide.src}
                loading="lazy"
                draggable="false"
                height={40}
                width={40}
              />
              <h2 className="mt-4 text-sm font-semibold capitalize text-black">
                {slide.title}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
