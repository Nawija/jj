import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface CardHomeInfoProps {
  title: string;
  href: string;
  linkTitle: string;
  desc: string;
}

export function CardHomeInfo({
  title,
  href,
  linkTitle,
  desc,
}: CardHomeInfoProps) {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="relative h-full overflow-hidden rounded-lg border border-white/20 bg-stone-600/80 px-8 pb-12 pt-16 text-center">
        <p className="mb-1 text-xs  font-medium uppercase tracking-widest text-gray-200">
          Kategoria
        </p>
        <h2 className=" mb-3 text-xl font-normal text-white/80 sm:text-2xl">
          {title}
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-white/60">{desc}</p>
        <Link
          href={href}
          className="inline-flex items-center text-xs text-white"
        >
          {linkTitle}
          <FaArrowRight className="ml-2" />
        </Link>
        {/* <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-200 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                    </span>
                    <span className="text-gray-200 inline-flex items-center leading-none text-sm">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                    </span>
                </div> */}
      </div>
    </div>
  );
}
