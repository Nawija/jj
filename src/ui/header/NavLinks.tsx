"use client";

import Link from "next/link";
import { SecondButton } from "../buttons/SecondButton";

const links = [
    { path: "/", label: "Start" },
    { path: "/o-mnie", label: "O Mnie" },
    { path: "/oferta", label: "Oferta" },
    { path: "/galeria", label: "Galeria" },
    { path: "/kontakt", label: "Kontakt" },
];

const strefaKlientaLink = {
    path: "/strefa-klienta",
    label: "Strefa Klienta",
};

export function NavLinksDesctop({ pathname }: { pathname: string }) {
    return (
        <div className="items-center justify-center space-x-4 text-sm hidden lg:flex">
            {links.map((link) => (
                <li className="list-none" key={link.label}>
                    <Link
                        href={link.path}
                        className={`hover:text-white hover:bg-white/10 px-3 py-2 rounded-xl transition-colors font-medium text-xs ${
                            pathname === link.path ? "text-white " : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}

            <Link
                href={strefaKlientaLink.path}
                className="flex items-center justify-center py-1.5 px-3 text-white"
            >
                <SecondButton className="py-2">
                    {strefaKlientaLink.label}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="w-3 h-3 ml-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        ></path>
                    </svg>
                </SecondButton>
            </Link>
        </div>
    );
}

export function NavLinksMobile({
    showMenu,
    pathname,
    handleMenu,
}: {
    showMenu: boolean;
    pathname: string;
    handleMenu: () => void;
}) {
    return (
        <div
            className={`items-center justify-center text-sm lg:hidden flex flex-col fixed top-0 w-72 bg-[#0B0B0B] shadow-2xl space-y-4 left-0 h-screen transition-transform duration-200 ${
                showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            {links.map((link) => (
                <li
                    key={link.path}
                    className={`hover:text-white transition-colors font-semibold px-4 py-3 ${
                        pathname === link.path ? "text-white " : ""
                    }`}
                >
                    <Link
                        className="py-2"
                        href={link.path}
                        onClick={handleMenu}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}

            <Link
                href={strefaKlientaLink.path}
                onClick={handleMenu}
                className="btn-main flex items-center justify-center py-1.5 px-3"
            >
                <SecondButton>
                    {strefaKlientaLink.label}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="w-3 h-3 ml-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        ></path>
                    </svg>
                </SecondButton>
            </Link>
        </div>
    );
}

export function BurgerMenu({
    showMenu,
    handleMenu,
}: {
    showMenu: boolean;
    handleMenu: () => void;
}) {
    return (
        <button
            aria-label="Menu"
            className={`lg:hidden p-2.5 z-50 h-12 rounded-lg order-1 lg:order-none transition-transform${
                showMenu ? "" : "rotate-90"
            }`}
            onClick={handleMenu}
        >
            <div
                className={`h-0.5 rounded-lg bg-white transition-all ${
                    showMenu ? "w-4 -rotate-45 scale-110" : "w-4 m-1"
                }`}
            />
            <div
                className={` h-0.5 rounded-lg bg-white transition-all ${
                    showMenu ? "scale-0" : "w-3 m-1"
                }`}
            />
            <div
                className={` h-0.5 rounded-lg bg-white transition-all ${
                    showMenu
                        ? "w-4 -translate-y-1 rotate-45 scale-110"
                        : "w-4 m-1"
                }`}
            />
        </button>
    );
}
