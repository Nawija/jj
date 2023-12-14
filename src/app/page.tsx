"use client";

import { Hero } from "@/src/ui/hero/Hero";
import { EffectFadeCarousel } from "@/src/ui/hero/EffectFade";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px]">
      <div className="relative w-full">
        <div className="absolute left-1/2 top-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 text-center text-white md:w-1/3">
          <p className=" mb-6 text-2xl lg:text-3xl">Serdecznie Zapraszam</p>
          <p className="text-sm mb-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            maiores at quis illum facilis magnam dolorum illo eius quidem autem,
            doloribus harum accusamus. Sed, illo similique. Aliquam, commodi.
            Laudantium, ut.
          </p>
        </div>
        <EffectFadeCarousel />
      </div>

      <div className="mx-auto flex flex-col items-center justify-center space-y-3  px-4 py-12 text-center lg:w-1/3">
        <small>Lorem ipsum dolor, sit amet consectetur</small>
        <h1 className="text-3xl font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          eligendi corrupti in maxime, quo facilis
        </h1>
        <div className="h-[1.3px] w-1/3 bg-red-600" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          possimus ipsam dignissimos ipsa, praesentium velit molestias, esse
          doloremque aliquid, accusamus temporibus repellendus
        </p>
      </div>
      <Hero />
      <div className="h-[200vh]" />
    </div>
  );
}
