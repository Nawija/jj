"use client";

import Link from "next/link";
import { SecondButton } from "../buttons/SecondButton";
import { Logo } from "@/src/ui/header/Logo"; // Import the Logo component

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
    <div className="hidden items-center justify-center space-x-4 text-sm lg:flex">
      {/* Place the Logo component in the middle */}
      {links.slice(0, Math.ceil(links.length / 2)).map((link) => (
        <li className="list-none" key={link.label}>
          <Link
            href={link.path}
            className={`rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors hover:bg-white/10 hover:text-white ${
              pathname === link.path ? "text-red-600 " : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <Logo title="Jarek Olszewski" smallTitle="fotograf" />{" "}
      {/* Logo component */}
      {links.slice(Math.ceil(links.length / 2)).map((link) => (
        <li className="list-none" key={link.label}>
          <Link
            href={link.path}
            className={`rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors hover:bg-white/10 hover:text-white ${
              pathname === link.path ? "text-red-600 " : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <Link
        href={strefaKlientaLink.path}
        className="flex items-center justify-center px-3 py-1.5 text-white"
      >
        <SecondButton className="py-2">
          {strefaKlientaLink.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="ml-1 h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
      className={`fixed left-0 top-0 flex h-screen w-72 flex-col items-center justify-center space-y-4 bg-[#0B0B0B] text-sm shadow-2xl transition-transform duration-200 lg:hidden ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {links.map((link) => (
        <li
          key={link.path}
          className={`px-4 py-3 font-semibold transition-colors hover:text-white ${
            pathname === link.path ? "text-white " : ""
          }`}
        >
          <Link className="py-2" href={link.path} onClick={handleMenu}>
            {link.label}
          </Link>
        </li>
      ))}
      <Link
        href={strefaKlientaLink.path}
        onClick={handleMenu}
        className="btn-main flex items-center justify-center px-3 py-1.5"
      >
        <SecondButton>
          {strefaKlientaLink.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="ml-1 h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
      className={`z-50 order-1 h-12 rounded-lg p-2.5 lg:order-none lg:hidden transition-transform${
        showMenu ? "" : "rotate-90"
      }`}
      onClick={handleMenu}
    >
      <div
        className={`h-0.5 rounded-lg bg-white transition-all ${
          showMenu ? "w-4 -rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-white transition-all ${
          showMenu ? "scale-0" : "m-1 w-3"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-white transition-all ${
          showMenu ? "w-4 -translate-y-1 rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
    </button>
  );
}
