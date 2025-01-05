"use client";

import { PAGE_ROUTES, PAGE_URL } from "@/utils/constant";
import { cn } from "@/utils/fns";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <header>
      <section className="py-4 bg-clOrange">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center md:justify-between">
            <ul className="hidden md:flex gap-6">
              <li>
                <Link
                  href="https://quocnguyen.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  className="text-white"
                >
                  <i className="fas fa-globe" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/quoc-nguyen-k3398/"
                  target="_blank"
                  rel="noopener"
                  className="text-white"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/QuocNguyen3398"
                  target="_blank"
                  rel="noopener"
                  className="text-white"
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/anhquoc.nguyen.3398/"
                  target="_blank"
                  rel="noopener"
                  className="text-white"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
            </ul>
            <p className="text-white font-bold">Welcome | My darling</p>
          </div>
        </div>
      </section>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between md:justify-around relative">
            <Link href={PAGE_URL.HOME} className="hover:opacity-80">
              <Image
                priority
                src="/logo.jpg"
                width={64}
                height={64}
                alt="logo"
              />
            </Link>
            <ul className="hidden md:flex items-center gap-10">
              {PAGE_ROUTES.map((route, index) => (
                <li
                  key={index}
                  className={cn(
                    "font-medium text-base hover:opacity-80 hover:text-clPink",
                    pathname === route.url && "text-clPink font-bold",
                  )}
                >
                  <Link href={route.url} className="capitalize">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="md:hidden"
              onClick={() => setOpenSubMenu(!openSubMenu)}
            >
              <div className="relative w-10 h-10 border-solid border-2 border-gray-100 flex flex-col items-center justify-center gap-1">
                <i
                  className={cn(
                    "fas fa-bars text-xl transition-all scale-100 rotate-0 absolute",
                    openSubMenu && "rotate-90 scale-0",
                  )}
                />
                <i
                  className={cn(
                    "fas fa-times absolute text-xl transition-all scale-0 rotate-90",
                    openSubMenu && "rotate-0 scale-100",
                  )}
                />
              </div>
            </div>
            <ul
              className={cn(
                "absolute left-0 top-20 z-50 w-full max-h-0 transition-all duration-500 bg-white overflow-hidden",
                openSubMenu && "max-h-24",
              )}
            >
              {PAGE_ROUTES.map((route, index) => (
                <li
                  key={index}
                  className={cn(
                    "font-medium text-base p-4 border-t border-gray-200",
                    pathname === route.url && "text-clPink font-bold",
                  )}
                  onClick={() => setOpenSubMenu(false)}
                >
                  <Link href={route.url} className="block capitalize w-full">
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

export default Navbar;
