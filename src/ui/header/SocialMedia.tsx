import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const socialClass =
  "m-1 p-1 text-3xl text-white/60 transition-colors hover:text-white";
export default function SocialMedia() {
  return (
    <>
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
    </>
  );
}
