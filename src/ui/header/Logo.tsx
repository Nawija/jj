import { comfortaa } from "@/src/ui/fonts";
import Link from "next/link";

export function Logo({
  title,
  smallTitle,
  hidden = false,
}: {
  title: string;
  smallTitle: string;
  hidden?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`flex-c relative z-50 lg:px-12 lg:py-3 ${
        hidden ? "lg:hidden" : ""
      }`}
    >
      <div className="relative -mt-1">
        <p className="ml-1.5 font-semibold lg:text-3xl">{title}</p>
        <p
          className={`absolute -bottom-2.5 right-0 text-xs lg:-bottom-3.5 lg:text-sm lg:font-semibold ${comfortaa.className}`}
        >
          {smallTitle}
        </p>
      </div>
    </Link>
  );
}
