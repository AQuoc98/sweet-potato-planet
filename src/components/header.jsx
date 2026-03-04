"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PAGE_ROUTES, PAGE_URL } from "@/utils/constant";
import { cn } from "@/utils/fns";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header>
      {/* Top bar */}
      <section className="bg-orange-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="hidden md:block md:w-1/2">
              <ul className="flex flex-row flex-nowrap gap-8">
                <li>
                  <a
                    href="https://www.instagram.com/sweetpotato_planet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <Instagram size={16} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Sweetpotato.Handmade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <Facebook size={16} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-right">
                <span className="text-white font-semibold">
                  Welcome | My darling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation */}
      <nav className="bg-white py-4">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative flex flex-nowrap items-center justify-between">
            {/* Logo */}
            <div>
              <Link href={PAGE_URL.HOME}>
                <Image
                  className="h-12 md:h-16 w-auto"
                  src="/logo.jpg"
                  alt="Sweet Potato Planet"
                  width={64}
                  height={64}
                  priority
                />
              </Link>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
              <ul className="flex justify-end items-center gap-8">
                {PAGE_ROUTES.map((route) => (
                  <li key={route.url} className="">
                    <Link
                      href={route.url}
                      className={cn(
                        "font-medium capitalize",
                        pathname === route.url
                          ? "text-pink-600 font-bold"
                          : "hover:text-pink-400",
                      )}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile toggle */}
            <div className="md:hidden">
              <Button
                onClick={toggleMenu}
                className="relative w-10 h-9 border border-gray-200 cursor-pointer bg-white hover:bg-white"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={cn(
                      "w-6 h-0.75 rounded-2xl bg-black transition-all duration-350",
                      menuOpen && "rotate-45 translate-y-1.75",
                    )}
                  />
                  <div
                    className={cn(
                      "w-6 h-0.75 rounded-2xl bg-black transition-all duration-350",
                      menuOpen && "opacity-0",
                    )}
                  />
                  <div
                    className={cn(
                      "w-6 h-0.75 rounded-2xl bg-black transition-all duration-350",
                      menuOpen && "-rotate-45 -translate-y-1.75",
                    )}
                  />
                </div>
              </Button>
            </div>
            {/* Mobile menu */}
            <ul
              className={cn(
                "absolute left-0 top-14 z-100 w-full bg-white overflow-hidden transition-all duration-500 md:hidden",
                menuOpen ? "max-h-62" : "max-h-0",
              )}
            >
              {PAGE_ROUTES.map((route) => (
                <li
                  key={route.url}
                  className="py-4 px-2 border-t border-gray-200"
                >
                  <Link
                    href={route.url}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "font-medium capitalize",
                      pathname === route.url && "text-pink-600 font-bold",
                    )}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
