"use client";

import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
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

function Carousel() {
  const [loaded, setLoaded] = useState(false);
  const [carouselHeight, setCarouselHeight] = useState(500);

  useEffect(() => {
    setLoaded(true);
    const handleResize = () => {
      setCarouselHeight(window.innerWidth < 1000 ? 300 : 400);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (!loaded) {
    return (
      <div
        className={`flex h-${carouselHeight} w-full items-center justify-center`}
      >
        <Loader color="white" type="dots" />
      </div>
    );
  }

  return (
    <Swiper
      effect={"coverflow"}
      freeMode={true}
      loop
      speed={1000}
      slidesPerView={3}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      pagination={{
        dynamicBullets: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 110,
        modifier: 3,
        slideShadows: false,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper anim-opacity"
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
          <div className="my-4 bg-gradient-to-tr from-gray-50 to-zinc-100 p-4 shadow-lg">
            <Image
              style={{
                width: "100%",
                height: carouselHeight,
                objectFit: "cover",
                borderRadius: "2px",
              }}
              loading="eager"
              draggable="false"
              height={300}
              width={400}
              src={slide.src}
              alt={slide.alt}
            />
            <p className="mt-2 text-center font-semibold ">{slide.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export async function Hero() {
  const res = await fetch("https://graphql.datocms.com/", {
    next: { revalidate: 600 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        reportazZChrztu {
            img {
              id
              title
              responsiveImage {
                src
                srcSet
                webpSrcSet
              }
              url
            }
          }
              }`,
    }),
  });
  console.log(res);
  return (
    <section className="opacityAnimation max-w-screen relative mx-auto mb-6 w-full max-w-screen-xl justify-center py-2 lg:mt-0">
      <Carousel />
    </section>
  );
}
