"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/20/solid";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Technologies",
    href: "/technologies",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Close the menu when clicking outside
      }
    };

    const handleScroll = () => {
      setMenuOpen(false); // Close the menu when scrolling
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center w-full py-4">
      <div className="font-semibold text-lg md:text-2xl">
        Aruna Priyadarshana
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="hidden lg:flex flex-row gap-6">
          {menuItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>
        <ThemeButton />

        <div className="flex flex-row items-center justify-between gap-3">
          <Bars3Icon
            className="lg:hidden w-8 h-8 z-50 text-gray-500 cursor-pointer"
            onClick={toggleMenu}
          />

          <div
            ref={menuRef}
            className={`px-3 right-0 h-[50%] w-full z-50 absolute top-0 lg:hidden flex flex-col items-center  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 py-4 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 overflow-hidden opacity-0"
            }`}
          >
            <div className="flex justify-end w-full">
              <div className="flex flex-row items-center gap-5">
                <ThemeButton />
                <Bars3Icon
                  className="lg:hidden w-8 h-8 z-50 text-gray-500 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
            </div>

            {menuItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const NavItem = ({
  item,
}: {
  item: {
    name: string;
    href: string;
  };
}) => {
  const pathname = usePathname();
  const isActive =
    item.href !== "/" ? pathname.startsWith(item.href) : pathname === item.href;

  return (
    <Link href={item.href} className="py-2">
      <p
        className={`${
          isActive
            ? "text-primary border-b-2 cool-link transition-all duration-200"
            : "text-gray-500 dark:text-zinc-100"
        } text-sm lg:text-lg font-semibold cursor-pointer`}
      >
        {item.name}
      </p>
    </Link>
  );
};

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className={`relative flex justify-between items-center mx-auto h-fit rounded-full border-2 cursor-pointer overflow-hidden ${
        theme === "light"
          ? "border-gray-400 bg-gradient-to-r from-blue-500 to-blue-300 text-gray-800"
          : "border-white bg-gradient-to-r from-gray-900 to-gray-700 bg-gray-800 text-gray-200"
      }`}
      onClick={handleTheme}
    >
      {mounted &&
        (theme === "light" ? (
          <Image
            src="/sun.png"
            alt="Sun"
            width={10}
            height={10}
            className="w-6 md:w-8 h-auto"
          />
        ) : (
          <Image
            src="/moon.png"
            alt="Moon"
            width={10}
            height={10}
            className="w-6 md:w-8 h-auto"
          />
        ))}
    </button>
  );
};
