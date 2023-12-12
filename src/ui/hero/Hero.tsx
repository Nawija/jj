"use client";

import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import heroImg from "@/public/images/jarek-olszewski.jpg";
import s1Img from "@/public/images/s1.jpg";
import s2Img from "@/public/images/s2.jpg";
import s3Img from "@/public/images/s3.jpg";
import s4Img from "@/public/images/s4.jpg";

const imgSwiper = [
  {
    src: s1Img,
    alt: "s1",
  },
  {
    src: s2Img,
    alt: "s2",
  },
  {
    src: s3Img,
    alt: "s3",
  },
  {
    src: s4Img,
    alt: "s4",
  },
  {
    src: heroImg,
    alt: "heroImg",
  },
];

const carouselHeight = 500;

function Carousel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div
        className={`flex h-[500px] w-full items-center justify-center  rounded-lg bg-gradient-to-tr from-zinc-800 to-zinc-500`}
      >
        <Loader color="white" type="dots" />
      </div>
    );
  }

  return (
    <Swiper
      loop
      speed={4000}
      slidesPerView={3}
      autoplay={{
        delay: 100,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay]}
      className="mySwiper anim-opacity"
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        580: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {imgSwiper.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "9px",
            }}
            height={400}
            width={600}
            src={slide.src}
            alt={slide.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function Hero() {
  return (
    <section className="opacityAnimation relative mx-auto mb-6 mt-6 w-full max-w-screen-2xl justify-center py-2 lg:mt-0 lg:flex lg:py-6 lg:pb-24">
      <div className="flex justify-center  ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center space-y-3 lg:justify-start ">
            <h1 className="relative mb-4 w-max bg-gradient-to-br from-white to-zinc-500 bg-clip-text p-6 text-center text-3xl font-bold text-transparent md:text-6xl lg:mb-6 lg:text-start lg:text-7xl">
              Odkryj Sztukę Fotografii
              <br /> Fotograf Siedlce
            </h1>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
  );
}
