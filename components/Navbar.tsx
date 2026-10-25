"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-3 md:flex-row md:justify-between">
        <Link href="/" className="font-display text-base font-black tracking-wide">
          ✦ CHROME CLOSET
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition ${
                  isActive(link.href)
                    ? "bg-black text-white"
                    : "text-black hover:bg-zinc-200"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}