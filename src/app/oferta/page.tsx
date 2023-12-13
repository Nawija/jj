"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImg from "@/public/images/jarek-olszewski.jpg";
import Link from "next/link";
import { MainButton } from "@/src/ui/buttons/MainButton";

export default function OfertaPage() {
  const initialValues = Array(10).fill(null);
  const [values, setValues] = useState(initialValues);

  const totalValue = values.reduce((acc, cur) => acc + (cur || 0), 0);

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryIndex: number,
  ) => {
    const { value } = event.target;
    setValues((prevValues) => [
      ...prevValues.slice(0, categoryIndex),
      parseInt(value),
      ...prevValues.slice(categoryIndex + 1),
    ]);
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryIndex: number,
  ) => {
    const { value, checked } = event.target;
    setValues((prevValues) => [
      ...prevValues.slice(0, categoryIndex),
      checked ? parseInt(value) : null,
      ...prevValues.slice(categoryIndex + 1),
    ]);
  };

  return (
    <div className="anim-opacity opacityAnimation relative mx-auto mb-20 mt-[45vh] flex max-w-screen-2xl flex-wrap items-start justify-center md:mt-[60vh]">
      <div className="fixed left-[45%] top-[45%] z-10 -translate-x-1/2 -translate-y-1/2 animate-bounce rounded-full p-2 lg:left-1/2 lg:top-[60%]">
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
      <div className="fixed left-0 top-0 h-[30vh] w-full lg:top-[4rem] ">
        <div className="lg:-z-10">
          <Image
            src={HeroImg}
            alt="fotograf siedlce"
          />
        </div>
        <div className="absolute left-1/2 top-[100%] -translate-x-1/2 -translate-y-1/2 text-center text-lg font-semibold tracking-wide lg:left-[60%] lg:text-start lg:text-4xl lg:font-semibold">
          <p>Wypełnij Formularz</p>
          <p className="-my-1 lg:my-0">lub</p>
          <p className="mb-3">Zadzwoń</p>
          <div className="flex items-center justify-start">
            <Link
              href="tel:570750307"
              className="z-10 flex w-max items-center justify-center rounded-2xl bg-gradient-to-bl from-emerald-600 to-emerald-800 px-4 py-2.5 text-sm font-medium shadow-xl shadow-emerald-400/20 lg:py-2 lg:text-base lg:text-white"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mr-3 h-5 w-5 fill-green-500 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
              (+48) 570 750 307
            </Link>
          </div>
        </div>
      </div>
      <form
        className="z-20 rounded-lg border bg-white p-6 text-black shadow-xl"
        action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
        method="post"
        accept-charset="UTF-8"
      >
        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Jakiej usługi potrzebujesz?</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="radio"
                name="PageType"
                value="2400"
                checked={values[0] === 2400}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Fotograf ślubny
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="PageType"
                value="900"
                checked={values[0] === 900}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Reportaz Chrztu
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="PageType"
                value="500"
                checked={values[0] === 500}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Sesja indywidualna
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="PageType"
                value="700"
                checked={values[0] === 700}
                onChange={(e) => handleRadioChange(e, 0)}
              />
              Studniówka
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start px-1 py-3">
          <label className="mb-1 font-semibold" htmlFor="t1">
            Opisz swoją wizję
          </label>
          <textarea
            className="mr-2 h-24 w-full rounded-lg border px-4 py-3"
            id="t1"
            name="OpisFirmy"
          />
        </div>
        <div className="flex flex-col items-start justify-start px-1 py-3">
          <label className="mb-1 font-semibold" htmlFor="t4">
            Posiadasz identyfikację wizualną firmy?
          </label>
          <textarea
            className="mr-2 h-24 w-full rounded-lg border px-4 py-3"
            id="t4"
            name="IdentyfikacjaFirmy"
          />
          <p className="mt-1 px-1 text-sm text-gray-700 md:w-[80%]">
            Opisz czy posiadasz kolory firmowe, logo lub wykonane grafiki jak
            wizytówki czy grafiki socialmedia. Będzie to miało wpływ na
            ujednolicenie strony z Twoją marką.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start px-1 py-3">
          <label className="mb-1 font-semibold" htmlFor="t5">
            Wygląd strony - Inspirację
          </label>
          <textarea
            className="mr-2 h-24 w-full rounded-lg border px-4 py-3"
            id="t5"
            placeholder="Pomoze okreslic wyglad strony internetowej"
            name="Inspiracja"
          />
          <p className="mt-1 px-1 text-sm text-gray-700 md:w-[80%]">
            Jeżeli istnieją strony, które Ci się podobają to załącz powyżej
            linki do nich lub skorzystaj z takich źródeł inspiracji jak{" "}
          </p>
        </div>

        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Wydrukowanie Zdjęć?</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="radio"
                name="Domena"
                value="70"
                checked={values[1] === 70}
                onChange={(e) => handleRadioChange(e, 1)}
              />
              Tak
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="Domena"
                value="0"
                checked={values[1] === 0}
                onChange={(e) => handleRadioChange(e, 1)}
              />
              Nie
            </label>
          </div>
        </div>

        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Album z zdjęciami?</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="radio"
                name="Hosting"
                value="200"
                checked={values[2] === 200}
                onChange={(e) => handleRadioChange(e, 2)}
              />
              Tak
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="radio"
                name="Hosting"
                value="0"
                checked={values[2] === 0}
                onChange={(e) => handleRadioChange(e, 2)}
              />
              Nie
            </label>
          </div>
        </div>

        <div className="mb-2 mt-2">
          <p className="mb-1 font-semibold">Opcje dodatkowe:</p>
          <div className="ml-2 flex flex-col py-2">
            <label>
              <input
                className="mr-2 scale-110 cursor-pointer"
                type="checkbox"
                name="Sekcja Blog"
                value="100"
                checked={values[4] === 100}
                onChange={(e) => handleCheckboxChange(e, 4)}
              />
              Prezent niespodzianka
            </label>

            <label>
              <input
                className="mr-2 scale-110"
                type="checkbox"
                name="Sekcja News"
                value="100"
                checked={values[5] === 100}
                onChange={(e) => handleCheckboxChange(e, 5)}
              />
              Dodatkowye ujęcia
            </label>
            <label>
              <input
                className="mr-2 scale-110"
                type="checkbox"
                name="Formularz Kontaktowy"
                value="50"
                checked={values[6] === 50}
                onChange={(e) => handleCheckboxChange(e, 6)}
              />
              Zdjęcia w wersji B&W i kolorowej
            </label>
            <label>
              <input
                className="mr-2 scale-110"
                type="checkbox"
                name="Mapa Google 2D/3D"
                value="50"
                checked={values[7] === 50}
                onChange={(e) => handleCheckboxChange(e, 7)}
              />
              Licencja na wykorzystanie zdjęć w celu komercyjnym
            </label>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between px-1 md:mt-16">
          <p className="w-max font-semibold text-green-700">
            Cena: {totalValue}
          </p>
          <MainButton className="btn-main px-4 py-2">
            Wyślij Formularz
          </MainButton>
        </div>
      </form>
    </div>
  );
}
