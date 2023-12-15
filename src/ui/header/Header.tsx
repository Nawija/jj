"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { playball } from "../fonts";
import { NavLinksDesctop, NavLinksMobile, BurgerMenu } from "./NavLinks";
import clsx from "clsx";
import SocialMedia from "@/src/ui/header/SocialMedia";

export function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header
      className={clsx(
        "lg:absolute fixed left-0 top-0 z-[999] flex w-full items-center justify-between px-3 py-1 font-normal  lg:py-0 ",
        {
          "sticky left-0 top-0 bg-white text-black shadow-lg": pathname !== "/",
        },
        { "text-white": pathname === "/" },
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex-c relative z-50  lg:py-3">
          <div className="relative">
            <p
              className={`text-2xl transition-transform lg:text-3xl ${
                playball.className
              } ${showMenu ? "text-white animate-pulse" : ""}`}
            >
              Jarek Olszewski
            </p>
          </div>
        </Link>
        <BurgerMenu showMenu={showMenu} handleMenu={handleMenu} />
        <NavLinksDesctop pathname={pathname} />
        <NavLinksMobile
          showMenu={showMenu}
          pathname={pathname}
          handleMenu={handleMenu}
        />
        <div className="hidden lg:flex">
          <SocialMedia />
        </div>
      </div>
    </header>
  );
}
