"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { NavLinksDesctop, NavLinksMobile, BurgerMenu } from "./NavLinks";

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
      className={`z-[999] w-full px-3 py-1 transition-all ${
        !isScrolled
          ? "text-white/80"
          : "bg-[#ffffffe0] font-semibold text-gray-800 shadow-lg"
      }
      ${pathname === "/" ? "fixed left-0 top-0" : "text-gray-800"}`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className={`flex-c relative z-50 lg:px-20 lg:py-3`}>
          <div className="relative -mt-1">
            <p className={`lg:text-3xl transition-transform ${isScrolled ? "scale-75" : ""}`}>
              Jarek Olszewski
            </p>
          </div>
        </Link>
        <BurgerMenu showMenu={showMenu} handleMenu={handleMenu} />
        <div className="sticky top-0">
          <NavLinksDesctop showMenu={showMenu} pathname={pathname} />
        </div>
        <NavLinksMobile
          showMenu={showMenu}
          pathname={pathname}
          handleMenu={handleMenu}
        />
      </div>
    </header>
  );
}
