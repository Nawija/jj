import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 bg-black/90 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex items-center justify-center text-3xl font-semibold text-white"
        >
          Jarek Olszewski
        </Link>
        <p className="my-6 text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque impedit deleniti ad maxime vel nobis laboriosam obcaecati ratione assumenda quasi cumque quisquam, perferendis veritatis facere est, quidem quos, rem accusamus.
        </p>
        <ul className="mb-6 flex flex-wrap items-center justify-center text-white">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Premium
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-sm text-white/60  sm:text-center">
          © 2023{" "}
          <Link href="/" className="hover:underline text-yellow-500">
            Seovileo™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
