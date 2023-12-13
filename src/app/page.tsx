"use client";

// import Link from "next/link";
import { Hero } from "@/src/ui/hero/Hero";
// import { CardHomeInfo } from "@/src/ui/cards/CardHomeInfo";

export default function Home() {
    return (
        <div className="anim-opacity">
            <Hero />
            {/* <div className="flex flex-wrap -m-4 container px-5 lg:px-12 pb-24 -mt-24 z-10 mx-auto">
                <CardHomeInfo
                    href="/"
                    title="Fotografia Ślubna"
                    desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                    linkTitle="Go somewhere"
                />
                <CardHomeInfo
                    href="/"
                    title="Sesje Zdjęciowe"
                    desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                    linkTitle="Go somewhere"
                />
                <CardHomeInfo
                    href="/"
                    title="Reportaż z Chrztu"
                    desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century"
                    linkTitle="Go somewhere"
                />
            </div>

            <section className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-white/80 md:mb-8 lg:text-3xl xl:mb-12">
                        Pick your plan
                    </h2>
                    <div className="mb-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col gap-4 rounded-lg border p-4 pt-6">
                                <h3 className="text-center text-2xl font-semibold text-white/80">
                                    Free
                                </h3>
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-white/80">
                                        $0
                                    </span>
                                    <span className="text-gray-600">
                                        / month
                                    </span>
                                </div>
                                <div className="mb-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                                    14-day money backguarantee
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <a className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-600 outline-none ring-red-400 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                    Select Free
                                </a>
                            </div>
                            <div className="flex-1 space-y-3 rounded-lg bg-gray-100 px-4 py-6">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        1.000 MB file storage
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        2.000 MB bandwidth per month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        200 tasks per month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Comunity support
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="relative flex flex-col gap-4 rounded-lg border border-red-600 p-4 pt-6">
                                <div className="absolute inset-x-0 -top-3 flex justify-center">
                                    <span className="flex h-6 items-center justify-center rounded-full bg-red-700 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
                                        POPULARNE
                                    </span>
                                </div>
                                <h3 className="text-center text-2xl font-semibold text-white/80">
                                    Team
                                </h3>
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-white/80">
                                        $19
                                    </span>
                                    <span className="text-gray-600">
                                        / month
                                    </span>
                                </div>
                                <div className="mb-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                                    14-day money backguarantee
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <Link
                                    href="/"
                                    className="block rounded-lg bg-red-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-600 transition duration-100 hover:bg-red-600 focus-visible:ring active:bg-red-600 md:text-base"
                                >
                                    Select Team
                                </Link>
                            </div>
                            <div className="flex-1 space-y-3 rounded-lg bg-gray-100 px-4 py-6">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Unlimited file storage
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        10 GB bandwidth per month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        10.000 tasks per month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Email support
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        100 Webhooks
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col gap-4 rounded-lg border p-4 pt-6">
                                <h3 className="text-center text-2xl font-semibold text-white/80">
                                    Enterprise
                                </h3>
                                <div className="flex items-end justify-center gap-1">
                                    <span className="text-4xl font-bold text-white/80">
                                        $49
                                    </span>
                                    <span className="text-gray-600">
                                        / month
                                    </span>
                                </div>
                                <div className="mb-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                                    14-day money backguarantee
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <a className="block rounded-lg bg-white/80 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-600 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                                    Select Enterprise
                                </a>
                            </div>
                            <div className="flex-1 space-y-3 rounded-lg bg-gray-100 px-4 py-6">
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Unlimited file storage
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Unlimited bandwidth per month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        1.000.000 tasks per month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Email and phone support
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 shrink-0 text-white text-xs"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-gray-600">
                                        Unlimited Webhooks
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
