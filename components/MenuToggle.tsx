"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex flex-row items-center justify-center z-30 gap-3 py-3 absolute top-4.5 right-3.5">
      <button
        className={`relative h-fit rounded-full border-2 cursor-pointer overflow-hidden mb-1 ${
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
      <button
        onClick={toggle}
        className="outline-none border-none select-none cursor-pointer flex justify-center rounded-full bg-transparent"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          className="fill-current text-black dark:text-white"
        >
          <Path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </div>
  );
};
