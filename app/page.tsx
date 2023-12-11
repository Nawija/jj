"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

function Component() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <div className="max-w-5xl mx-auto w-full text-center flex items-center justify-center">
            <Carousel
                withIndicators
                height={200}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <Carousel.Slide>
                    <img
                        src="https://cdn.pixabay.com/photo/2023/04/21/17/47/plum-blossoms-7942343_1280.jpg"
                        className="w-full h-full mx-auto text-center"
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src="https://cdn.pixabay.com/photo/2023/04/21/17/47/plum-blossoms-7942343_1280.jpg" />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src="https://cdn.pixabay.com/photo/2023/04/21/17/47/plum-blossoms-7942343_1280.jpg" />
                </Carousel.Slide>
            </Carousel>
        </div>
    );
}

export default function Home() {
    return (
        <div className="max-w-5xl mx-auto w-full text-center flex items-center justify-center">
            <Component />
        </div>
    );
}
