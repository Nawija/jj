"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { playball } from "@/src/ui/fonts";
import { NavLinksDesctop, NavLinksMobile, BurgerMenu } from "./NavLinks";
import clsx from "clsx";
import SocialMedia from "@/src/ui/header/SocialMedia";

export function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [colorNav, setColorNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setColorNav(true);
      } else {
        setColorNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header
      className={clsx(
        `fixed left-0 top-0 z-[999] flex w-full items-center justify-between px-3 py-1 font-normal  text-white/70 lg:py-0`,
        {
          "sticky top-0 bg-black": pathname !== "/",
        },

        {
          " bg-black transition-colors duration-200": colorNav,
        },
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex-c relative z-50 pl-1 lg:py-3">
          <div className="relative">
            <p
              className={`text-2xl transition-transform lg:text-3xl ${
                playball.className
              } ${showMenu ? "animate-pulse text-white" : ""}`}
            >
              Jarek Olszewski
            </p>
          </div>
        </Link>
        <BurgerMenu showMenu={showMenu} handleMenu={handleMenu} />
        <NavLinksDesctop pathname={pathname} colorNav={colorNav} />
        <NavLinksMobile
          showMenu={showMenu}
          pathname={pathname}
          colorNav={colorNav}
          handleMenu={handleMenu}
        />
        <div className="hidden lg:flex">
          <SocialMedia colorNav={colorNav} />
        </div>
      </div>
    </header>
  );
}
