"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ss from "@/public/images/s2.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

export default function Home() {
    return (
        <div>
            <div>
                <h1>Fotograf</h1>
            </div>
            <Swiper
                loop
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
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
                            height: "700px",
                            width: "100%",
                            objectFit: "cover",
                        }}
                        src={ss}
                        width={1200}
                        alt="..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        style={{
                            height: "700px",
                            width: "100%",
                            objectFit: "cover",
                        }}
                        src={ss}
                        width={1200}
                        alt="..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        style={{
                            height: "700px",
                            width: "100%",
                            objectFit: "cover",
                        }}
                        src={ss}
                        width={1200}
                        alt="..."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        style={{
                            height: "700px",
                            width: "100%",
                            objectFit: "cover",
                        }}
                        src={ss}
                        width={1200}
                        alt="..."
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
