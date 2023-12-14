"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "@/src/ui/hero/CarouselPolaroid.css";

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

export default async function CarouselPolaroid() {
  const [carouselHeight, setCarouselHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setCarouselHeight(window.innerWidth < 1000 ? 300 : 400);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      effect={"coverflow"}
      freeMode={true}
      navigation={true}
      loop
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={100}
      pagination={{
        dynamicBullets: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 5,
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
          <div className="my-4 bg-white p-4 shadow-lg">
            <Image
              style={{
                width: "100%",
                height: carouselHeight,
                objectFit: "cover",
                borderRadius: "2px",
              }}
              loading="lazy"
              draggable="false"
              height={300}
              width={400}
              src={slide.src}
              alt={slide.alt}
              sizes="(min-width: 1668px) 80vw, (max-width: 786px) 50vw, 33vw"
            />
            <p className="mt-2 text-center font-semibold ">{slide.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
