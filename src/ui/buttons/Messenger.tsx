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
      <div className="absolute left-0 top-0 -z-20 h-full w-full animate-ping rounded-full bg-black/10" />
      <div className="absolute left-0 top-0 -z-10 h-full w-full animate-ping rounded-full border bg-white" />
    </div>
  );
}
