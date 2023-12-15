import CarouselPolaroid from "@/src/ui/hero/CarouselPolaroid";
import { EffectFadeCarousel } from "@/src/ui/hero/EffectFade";
import Link from "next/link";
import { SecondButton } from "../ui/buttons/SecondButton";
import Image from "next/image";
import ShadowBg from "../ui/ShadowBg";
import Review from "../ui/hero/Reviews";

import s1 from "@/public/images/s1.jpg";
import s2 from "@/public/images/s2.jpg";
import s3 from "@/public/images/s3.jpg";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px]">
      <section className="relative -z-10 w-full">
        <div className="absolute left-1/2 top-[74%] z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className=" mb-6 text-3xl font-semibold text-white/80 mix-blend-difference lg:text-8xl">
            PRAWDZIWA FOTOGRAFIA
          </p>
          <p className="mx-auto mb-12 text-sm text-white/80 sm:w-3/4 lg:w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            maiores at quis illum facilis magnam dolorum illo eius quidem autem,
            doloribus harum accusamus. Sed, illo similique. Aliquam, commodi.
            Laudantium, ut.
          </p>
        </div>
        <EffectFadeCarousel />
        <div className="absolute bottom-1 left-1/2 z-20 -translate-x-1/2 animate-bounce rounded-full p-2 text-white">
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
        <div className="mx-auto flex max-w-screen-sm flex-col items-center justify-center space-y-3 px-4 py-12 text-center">
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
        <div className="mx-auto mt-6 flex max-w-screen-lg items-center justify-between px-4 sm:items-center">
          <p className="max-w-screen-sm text-sm text-black/80 lg:text-base">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>

          <Link href="/galeria">
            <SecondButton>Więcej</SecondButton>
          </Link>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24">
        <div className="mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="p-6">
            <Image
              className="mb-4 w-full object-cover object-center md:h-36 lg:h-48"
              src={s1}
              alt="blog"
              width={180}
              height={180}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />

            <h1 className="mb-4 text-xl font-semibold leading-none tracking-tighter text-black">
              Short headline.
            </h1>

            <p className="mx-auto text-base font-medium leading-relaxed text-black/80">
              Free and Premium themes, UI Kis, templates and landing pages built
              with Tailwind CSS, HTML Next.js.
            </p>
          </div>
          <div className="p-6">
            <Image
              className="mb-4 w-full object-cover object-center md:h-36 lg:h-96"
              src={s2}
              alt="blog"
              width={180}
              height={180}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />

            <h1 className="mb-4 text-xl font-semibold leading-none tracking-tighter text-black">
              Short headline.
            </h1>

            <p className="mx-auto text-base font-medium leading-relaxed text-black/80">
              Free and Premium themes, UI Kis, templates and landing pages built
              with Tailwind CSS, HTML Next.js.
            </p>
          </div>
          <div className="p-6">
            <Image
              className="mb-4 w-full object-cover object-center md:h-36 lg:h-48"
              src={s3}
              alt="blog"
              placeholder="blur"
              width={180}
              height={180}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />

            <h1 className="mb-4 text-xl font-semibold leading-none tracking-tighter text-black">
              Short headline.
            </h1>

            <p className="mx-auto text-base font-medium leading-relaxed text-black/80">
              Free and Premium themes, templates and landing pages built with
              Tailwind CSS, HTML Next.js.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[700px] w-full md:h-[600px]">
        <div className="absolute left-1/2 top-1/2 z-50 w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 text-white/80">
          <div className="container z-40 mx-auto flex flex-wrap items-center px-5 py-24">
            <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
              <h1 className="text-3xl font-medium text-white">
                Slow-carb next level shoindcgoitch ethical authentic, poko
                scenester
              </h1>
              <p className="mt-4 leading-relaxed">
                Poke slow-carb mixtape knausgaard, typewriter street art
                gentrify hammock starladder roathse. Craies vegan tousled etsy
                austin.
              </p>
            </div>
            <div className="mt-10 flex w-full flex-col rounded-lg bg-gray-100 p-8 text-black md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
              <h2 className="title-font mb-4 text-lg font-medium">
                Wyslij formularz, poznaj oferte
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="text-sm leading-7 text-black/70"
                >
                  Imie
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="text-black-80 w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-black/50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-black/70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-black-80 w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:border-black/50 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <button className="rounded border-0 bg-yellow-500 px-8 py-2 text-lg text-white transition-colors hover:bg-yellow-600 focus:outline-none">
                Button
              </button>
              <p className="mt-3 text-xs text-black/70">
                Literally you probably havent heard of them jean shorts.
              </p>
            </div>
          </div>
        </div>

        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          src={s3}
          alt="......."
          width={380}
          height={380}
          sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
        />
        <ShadowBg z={30} />
      </section>
      <section className=" bg-gray-100 py-12">
        <div className="mx-auto max-w-screen-xl text-center">
          <h3 className="mb-6 text-2xl">Opinie Google</h3>
          <Review />
        </div>
      </section>
    </div>
  );
}
