"use client";

import { Hero } from "@/src/ui/hero/Hero";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px]">
      <img
        src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-[500px] w-full object-cover object-center"
      />

      <div className="mx-auto flex lg:w-1/3 flex-col items-center justify-center  space-y-3 px-4 py-12 text-center">
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
