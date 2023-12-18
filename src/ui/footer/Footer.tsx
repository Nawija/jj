import Link from "next/link";
import { playball } from "@/src/ui/fonts";

export function Footer() {
  return (
    <footer className="z-40 bg-black p-4 md:p-8 lg:p-10 rounded-t-3xl md:rounded-none px-12">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className={`flex items-center justify-center py-6 text-3xl text-white ${playball.className}`}
        >
          Jarek Olszewski
        </Link>
        <p className="mb-10 mt-4 text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          impedit deleniti ad maxime vel nobis laboriosam obcaecati ratione
          assumenda quasi cumque quisquam, perferendis veritatis facere est,
          quidem quos, rem accusamus.
        </p>

        <ul className="mb-6 flex flex-wrap items-center justify-center border-y border-dashed border-gray-500 py-3 text-white">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Start
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              O Mnie
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Oferta
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Galeria
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Kontakt
            </Link>
          </li>
        </ul>

        <span className="text-sm text-white/60  sm:text-center">
          © 2023{" "}
          <Link href="/" className="text-yellow-500 hover:underline">
            Seovileo™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
