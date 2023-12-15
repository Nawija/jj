"use client";

import Link from "next/link";
import SocialMedia from "@/src/ui/header/SocialMedia";

const links = [
  { path: "/", label: "Start" },
  { path: "/o-mnie", label: "O Mnie" },
  { path: "/oferta", label: "Oferta" },
  { path: "/galeria", label: "Galeria" },
  { path: "/blog", label: "Blog" },
  { path: "/kontakt", label: "Kontakt" },
];

export function NavLinksDesctop({ pathname }: { pathname: string }) {
  return (
    <ul className="hidden items-center justify-center space-x-4 text-sm lg:flex">
      {links.map((link) => (
        <li className="list-none" key={link.label}>
          <Link
            href={link.path}
            className={`mx-3 px-2 py-2 text-[14px] font-medium transition-colors hover:text-amber-400   ${
              pathname === link.path ? "text-amber-400" : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
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

      <ul
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col items-center justify-center space-y-4 bg-black/80 backdrop-blur-sm text-sm text-white/80 shadow-2xl transition-transform duration-200 lg:hidden ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.path}
            className={`px-4 py-3 font-semibold transition-colors hover:text-white ${
              pathname === link.path ? "font-medium text-yellow-500 " : ""
            }`}
          >
            <Link className="py-2" href={link.path} onClick={handleMenu}>
              {link.label}
            </Link>
          </li>
        ))}
        <li className="flex lg:hidden">
          <SocialMedia />
        </li>
      </ul>

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
        className={`h-0.5 rounded-lg bg-yellow-500 transition-all ${
          showMenu ? "w-4 -rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-yellow-500 transition-all ${
          showMenu ? "scale-0" : "m-1 w-3"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-yellow-500 transition-all ${
          showMenu ? "w-4 -translate-y-1 rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
    </button>
  );
}
