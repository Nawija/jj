"use client";

import CarouselPolaroid from "@/src/ui/hero/CarouselPolaroid";
import { EffectFadeCarousel } from "@/src/ui/hero/EffectFade";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px]">
      <section className="relative w-full -z-10">
        <div className="absolute left-1/2 top-[74%] z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className=" mb-6 text-3xl font-semibold lg:text-8xl text-white/70 mix-blend-difference">
            PRAWDZIWA FOTOGRAFIA
          </p>
          <p className="mb-12 text-sm text-white/80 mx-auto sm:w-3/4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            maiores at quis illum facilis magnam dolorum illo eius quidem autem,
            doloribus harum accusamus. Sed, illo similique. Aliquam, commodi.
            Laudantium, ut.
          </p>
        </div>
        <EffectFadeCarousel />
        <div className="absolute bottom-1 left-[49%] z-20 -translate-x-1/2 animate-bounce rounded-full p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      <section className="relative w-full bg-gray-100 pb-12">
        <div className="mx-auto flex flex-col items-center justify-center space-y-3 px-4 py-12 text-center lg:w-1/3">
          <small>Lorem ipsum dolor, sit amet consectetur</small>
          <h1 className="text-3xl font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            eligendi corrupti in maxime, quo facilis
          </h1>
          <div className="h-[1.3px] w-1/3 bg-yellow-500" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            possimus ipsam dignissimos ipsa, praesentium velit molestias, esse
            doloremque aliquid, accusamus temporibus repellendus
          </p>
        </div>
        <CarouselPolaroid />
      </section>
      <div className="h-[200vh]" />
    </div>
  );
}
