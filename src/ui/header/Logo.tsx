import { comfortaa } from "@/src/ui/fonts";
import Link from "next/link";

export function Logo({
    title,
    smallTitle,
}: {
    title: string;
    smallTitle: string;
}) {
    return (
        <Link href="/" className="flex-c z-50 relative">
            <div className="relative -mt-1">
                <p className="text-white font-medium ml-1.5">{title}</p>
                <p
                    className={`absolute right-0 -bottom-2.5 text-xs ${comfortaa.className}`}
                >
                    {smallTitle}
                </p>
            </div>
        </Link>
    );
}
