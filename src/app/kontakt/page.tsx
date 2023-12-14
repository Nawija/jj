import { SecondButton } from "@/src/ui/buttons/SecondButton";
import Link from "next/link";

export default function Kontakt() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="mb-12 text-5xl">Strona w budowie</h1>
      <Link href="/">
        <SecondButton>Strona Główna</SecondButton>
      </Link>
    </div>
  );
}
