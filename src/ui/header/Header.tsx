"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
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
      className={`sticky left-0 top-0 z-[999] w-full px-3 py-1 transition-colors duration-300 ${
        !isScrolled ? "" : "bg-[#ffffffbe] shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="justify- mx-auto flex max-w-screen-2xl items-center lg:justify-center">
        <Logo title="Jarek Olszewski" smallTitle="fotograf" hidden={true} />
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
