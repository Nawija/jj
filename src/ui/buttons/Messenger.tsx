"use client";

import { useEffect, useState } from "react";
import { RiMessengerFill } from "react-icons/ri";

export default function Messenger() {
  const [showMessenger, setShowMessenger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowMessenger(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-10 right-3 transition-transform duration-500 ${
        showMessenger ? "translate-x-0" : "translate-x-[50vw]"
      }`}
    >
      <RiMessengerFill className="text-5xl" />
      <div className="w-full h-full rounded-full bg-black/10 absolute top-0 left-0 -z-20 animate-ping" />
      <div className="w-full h-full rounded-full bg-white border absolute top-0 left-0 -z-10 animate-ping" />
    </div>
  );
}
