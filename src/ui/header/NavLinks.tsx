"use client";

import Link from "next/link";
import { Logo } from "@/src/ui/header/Logo"; // Import the Logo component

const links = [
  { path: "/", label: "Start" },
  { path: "/o-mnie", label: "O Mnie" },
  { path: "/oferta", label: "Oferta" },
  { path: "/galeria", label: "Galeria" },
  { path: "/blog", label: "Blog" },
  { path: "/kontakt", label: "Kontakt" },
];

export function NavLinksDesctop({
  pathname,
  showMenu,
}: {
  pathname: string;
  showMenu?: boolean;
}) {
  return (
    <div className="hidden items-center justify-center space-x-4 text-sm lg:flex">
      {/* Place the Logo component in the middle */}
      {links.slice(0, Math.ceil(links.length / 2)).map((link) => (
        <li className="list-none" key={link.label}>
          <Link
            href={link.path}
            className={`px-3 py-2 text-[14px] font-semibold transition-colors hover:bg-white/10 hover:text-red-700 ${
              pathname === link.path ? "text-red-600 " : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <Logo showMenu={showMenu} title="Jarek Olszewski" smallTitle="fotograf" />
      {links.slice(Math.ceil(links.length / 2)).map((link) => (
        <li className="list-none" key={link.label}>
          <Link
            href={link.path}
            className={`rounded-xl px-3 py-2 text-[14px] font-semibold transition-colors hover:bg-white/10 hover:text-red-700 ${
              pathname === link.path ? "text-red-600 " : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
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
      className={`fixed left-0 top-0 flex h-screen w-72 flex-col items-center justify-center space-y-4 bg-white/90 text-sm shadow-2xl backdrop-blur-sm transition-transform duration-200 lg:hidden ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {links.map((link) => (
        <li
          key={link.path}
          className={`px-4 py-3 font-semibold transition-colors hover:text-white ${
            pathname === link.path ? "text-red-600 " : ""
          }`}
        >
          <Link className="py-2" href={link.path} onClick={handleMenu}>
            {link.label}
          </Link>
        </li>
      ))}
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
        className={`h-0.5 rounded-lg bg-red-600 transition-all ${
          showMenu ? "w-4 -rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-red-600 transition-all ${
          showMenu ? "scale-0" : "m-1 w-3"
        }`}
      />
      <div
        className={` h-0.5 rounded-lg bg-red-600 transition-all ${
          showMenu ? "w-4 -translate-y-1 rotate-45 scale-110" : "m-1 w-4"
        }`}
      />
    </button>
  );
}
