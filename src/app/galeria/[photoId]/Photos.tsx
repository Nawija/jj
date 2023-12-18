"use client";

import Link from "next/link";

interface Props {
  photos: Array<{
    id: string;
    url: string;
  }>;
  photoIndex: number;
}

export default function PhotoId({ photos, photoIndex }: Props) {
  const arrowBtn =
    "p-2 border font-semibold rounded-lg bg-gray-100 text-gray-900 absolute top-[80%] lg:top-1/2 hover:bg-white hover:text-red-600 transition-colors";

  return (
    <div className="mt-4 flex w-full items-start justify-center lg:mt-0">
      <div
        className={`relative left-0 top-0 mx-auto flex h-full w-full items-center justify-center p-1 text-center`}
      >
        <Link href={`/`} className={`${arrowBtn} left-0 lg:left-2`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
        <div className="relative -z-10 flex max-h-[55vh] min-h-[55vh] w-full items-center justify-center overflow-hidden object-fill lg:max-h-[83vh] lg:min-h-[83vh]">
          <img
            className="h-auto w-full object-fill lg:w-auto"
            src={photos[photoIndex].url}
            alt="photo"
          />
        </div>
        <Link href={`/`} className={`${arrowBtn} right-0 lg:right-2`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
