import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface CardHomeInfoProps {
  title: string;
  href: string;
  linkTitle: string;
  desc: string;
}

export function CardHomeInfo({
  title,
  href,
  linkTitle,
  desc,
}: CardHomeInfoProps) {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="relative h-full overflow-hidden rounded-lg border border-white/20 bg-gradient-to-b from-black/40 to-zinc-500/40 px-8 pb-12 pt-16 text-center backdrop-blur-sm hover:border-white/40 transition-colors">
        <p className="mb-1 text-xs  font-medium uppercase tracking-widest text-gray-200">
          Kategoria
        </p>
        <h2 className=" mb-3 text-xl font-normal text-white/80 sm:text-2xl">
          {title}
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-white/60">{desc}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm text-white hover:text-white/80 group"
        >
          {linkTitle}
          <FaArrowRight className="ml-4 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
