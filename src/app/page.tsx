"use client";

import { Hero } from "@/src/ui/hero/Hero";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px]">
      <div className="relative h-[600px] w-full">
        <img
          src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/60" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 md:w-1/3 w-3/4 text-center -translate-y-1/2 text-white">
          <p className=" text-3xl mb-6">Serdecznie Zapraszam</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores at quis illum facilis magnam dolorum illo eius quidem autem, doloribus harum accusamus. Sed, illo similique. Aliquam, commodi. Laudantium, ut.</p>
        </div>
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
