"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/src/ui/hero/Reviews";

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

export const dynamic = true;

export default function Review() {
  return (
    <Swiper
      effect={"coverflow"}
      freeMode={true}
      pagination={true}
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
      modules={[Autoplay, EffectCoverflow, Pagination]}
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
          <div className="mx-auto flex w-[90%] max-w-lg flex-col rounded-xl border bg-white p-8 text-left">
            <p className="mx-auto text-base leading-relaxed text-black/80">
              {slide.desc}
            </p>
            <div className="flex items-center justify-start">
              <Image
                alt="testimonial"
                className="mr-3 mt-8 inline-block h-12 w-12 rounded-full object-cover object-center"
                src={slide.src}
                loading="lazy"
                height={40}
                width={40}
              />
              <div className="flex flex-col items-center justify-center">
                <h2 className="mt-4 text-sm font-semibold capitalize text-black">
                  {slide.title}
                </h2>

                <div className="flex items-center justify-start">
                  {" "}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="h-5 w-5 fill-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  ))}
                  <small className="ml-2 text-black/80">5/5</small>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
