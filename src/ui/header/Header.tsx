"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { playball } from "../fonts";
import { NavLinksDesctop, NavLinksMobile, BurgerMenu } from "./NavLinks";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        `z-[999] flex w-full items-center justify-between px-3 py-1 lg:py-0 font-normal`,
        {
          "sticky left-0 top-0 bg-white text-black shadow-lg": isScrolled,
        },
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className={`flex-c relative z-50 lg:px-20 lg:py-3`}>
          <div className="relative">
            <p
              className={`text-2xl transition-transform lg:text-3xl ${
                playball.className
              } ${showMenu ? "text-yellow-500" : ""}`}
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
      </div>
    </header>
  );
}
