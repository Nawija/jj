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
    <Link href="/" className={`flex-c relative z-50 ${hidden ? "hidden" : ""}`}>
      <div className="relative -mt-1">
        <p className="ml-1.5 text-xl font-semibold">{title}</p>
        <p
          className={`absolute -bottom-2.5 right-0 text-xs ${comfortaa.className}`}
        >
          {smallTitle}
        </p>
      </div>
    </Link>
  );
}
