import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

export default ThemeButton;
