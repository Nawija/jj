import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import clsx from "clsx";

const socialClass = "m-1 p-1 text-3xl transition-colors duration-300";
export default function SocialMedia({ colorNav }: { colorNav: boolean }) {
  return (
    <div className={`text-white/6 flex items-center justify-center`}>
      <Link
        href="https://www.facebook.com/jarek.olszewski"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <FaSquareFacebook
          className={clsx(socialClass, {
            "hover:text-white": colorNav,
          })}
        />
      </Link>
      <Link
        href="https://www.instagram.com/jarek.olszewski.fotografia/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <RiInstagramFill
          className={clsx(socialClass, {
            "hover:text-white": colorNav,
          })}
        />
      </Link>
    </div>
  );
}
