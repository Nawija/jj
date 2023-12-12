"use client";

import { Suspense } from "react";
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

function Carousel() {
    return (
        <Swiper
            loop
            speed={4000}
            slidesPerView={3}
            autoplay={{
                delay: 0,
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
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
        >
            {imgSwiper.map((slide, index) => (
                <SwiperSlide key={index}>
                    <Suspense fallback={<div className="h-full w-full bg-red-200">Loading...</div>}>
                        <Image
                            style={{
                                height: "300px",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "9px",
                            }}
                            width={1200}
                            height={300}
                            src={slide.src}
                            alt={slide.alt}
                        />
                    </Suspense>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export function Hero() {
    return (
        <section className="flex justify-center lg:py-16 lg:pb-32 py-2 opacityAnimation relative mb-6 mt-6 lg:mt-0 w-full">
            <div className="flex justify-center  ">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3 w-full ">
                        <div className="flex flex-col md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <h1 className="text-3xl w-max md:text-7xl font-bold relative mb-4 lg:mb-6 bg-gradient-to-br from-white to-zinc-500 text-transparent bg-clip-text p-2">
                                Odkryj Sztukę Fotografii
                                <br /> Fotograf Siedlce
                                <span className="text-base md:text-xl absolute w-max -bottom-6 right-6 font-light">
                                    Jarek Olszewski
                                </span>
                            </h1>
                        </div>
                        <div className="w-full h-96 absolute top-[70%] left-0 -z-10">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
