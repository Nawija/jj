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
            <div className="h-full backdrop-blur-md bg-zinc-600/40 border border-white/20 bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
                <p className="tracking-widest text-xs  font-medium text-gray-200 mb-1 uppercase">
                    Kategoria
                </p>
                <h2 className=" sm:text-2xl text-xl font-normal text-white/80 mb-3">
                    {title}
                </h2>
                <p className="leading-relaxed mb-3 text-white/60 text-sm">
                    {desc}
                </p>
                <Link
                    href={href}
                    className="text-white text-xs inline-flex items-center"
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
