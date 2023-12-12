"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import heroImg from "@/public/images/jarek-olszewski.jpg";
import s1Img from "@/public/images/s1.jpg";
import s2Img from "@/public/images/s2.jpg";
import s3Img from "@/public/images/s3.jpg";
import s4Img from "@/public/images/s4.jpg";

const heroImgAlt = "Jarek Olszewski Fotograf";
const ImgClass = "h-full w-full object-cover image-scaleAnim";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

function Carousel() {
    return (
        <Swiper
            loop
            speed={4000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image
                    style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius:"9px"
                    }}
                    src={s1Img}
                    width={1200}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius:"9px"
                    }}
                    src={s2Img}
                    width={1200}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius:"9px"
                    }}
                    src={s3Img}
                    width={1200}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius:"9px"
                    }}
                    src={s4Img}
                    width={1200}
                    alt="..."
                />
            </SwiperSlide>
        </Swiper>
    );
}

function HeroDesctop() {
    return <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"></div>;
}
function HeroMobile() {
    return (
        <div className="flex lg:hidden flex-col space-x-2 space-y-3 md:space-x-6 w-full items-center justify-center overflow-hidden">
            <div className="w-52 mt-12 rounded-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "5s" }}
                    width={300}
                    height={500}
                    src={s1Img}
                    alt={heroImgAlt}
                />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center">
                <div className="h-40 overflow-hidden absolute -left-1 -rotate-12 -bottom-16 rounded-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "16s" }}
                        width={150}
                        height={150}
                        src={s4Img}
                        alt={heroImgAlt}
                    />
                </div>
                <div className="w-40 h-40 lg:h-48 absolute lg:static -right-1 -bottom-16 overflow-hidden rounded-xl rotate-12 lg:rotate-0">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "18s" }}
                        width={150}
                        height={150}
                        src={s2Img}
                        alt={heroImgAlt}
                    />
                </div>
            </div>
            <div className="lg:w-60 h-96 absolute top-0 lg:static -z-10 w-full lg:flex overflow-hidden rounded-tl-[7rem] lg:rounded-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "8s" }}
                    width={300}
                    height={500}
                    src={heroImg}
                    alt={heroImgAlt}
                />
            </div>
            <div className="flex flex-row lg:flex-col space-x-3 lg:space-y-6 items-center justify-center ">
                <div className="w-40 lg:w-40 h-48 hidden lg:flex  overflow-hidden rounded-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "16s" }}
                        width={300}
                        height={500}
                        src={s1Img}
                        alt={heroImgAlt}
                    />
                </div>
                <div className="w-32 lg:w-40 h-32 hidden lg:flex overflow-hidden rounded-xl ">
                    <Image
                        loading="eager"
                        className={ImgClass}
                        style={{ animationDuration: "15s" }}
                        width={300}
                        height={500}
                        src={s2Img}
                        alt={heroImgAlt}
                    />
                </div>
            </div>
            <div className="lg:w-40 w-64 h-40 hidden lg:flex  overflow-hidden rounded-xl ">
                <Image
                    loading="eager"
                    className={ImgClass}
                    style={{ animationDuration: "16s" }}
                    width={300}
                    height={500}
                    src={s3Img}
                    alt={heroImgAlt}
                />
            </div>
        </div>
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
                        {/* <HeroDesctop /> */}
                        {/* <HeroMobile /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
