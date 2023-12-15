import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const socialClass =
  "m-1 p-1 text-3xl transition-colors duration-300 hover:text-white";
export default function SocialMedia({
  colorNav,
  pathname,
}: {
  colorNav: boolean;
  pathname: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${
        !colorNav && pathname == "/" ? "text-white/60" : "text-black/60"
      }`}
    >
      <Link
        href="https://www.facebook.com/jarek.olszewski"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <FaSquareFacebook className={socialClass} />
      </Link>
      <Link
        href="https://www.instagram.com/jarek.olszewski.fotografia/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <RiInstagramFill className={socialClass} />
      </Link>
    </div>
  );
}
