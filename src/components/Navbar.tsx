import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/nav";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 h-fit flex flex-col items-end pt-[30px] pr-5 w-[134px] bg-transparent z-50">
      <div className="mb-5">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AAB Logo"
            width={80}
            height={80}
            className="bg-[#1a2b5f]"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-5 text-black">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold 3xl:text-[28px] text-[26px] text-right leading-none tracking-[-0.02em] hover:opacity-30"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
