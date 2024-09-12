"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { ThemeButton } from "./ThemeButton";
import "./styles.css";
import NavItem from "./NavItem";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height + 100}px at calc(100% - 20px) 20px)`, // Move circle more to the right and top
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(100% - 26px) 26px)", // Smaller size and adjusted position in closed state
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuItems = [
  {
    i: 1,
    name: "Home",
    href: "/",
  },
  {
    i: 2,
    name: "About",
    href: "/about",
  },
  {
    i: 3,
    name: "Technologies",
    href: "/technologies",
  },
  {
    i: 4,
    name: "Projects",
    href: "/projects",
  },
  {
    i: 5,
    name: "Contact",
    href: "/contact",
  },
];

// function useMenuAnimation(isOpen: boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     const menuAnimations = isOpen
//       ? [
//           [
//             "nav",
//             { transform: "translateX(0%)" },
//             { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
//           ],
//           [
//             "li",
//             { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
//             { delay: stagger(0.05), at: "-0.1" },
//           ],
//         ]
//       : [
//           [
//             "li",
//             { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
//             { delay: stagger(0.05, { from: "last" }), at: "<" },
//           ],
//           ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
//         ];

//     animate([
//       [
//         "path.top",
//         { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
//         { at: "<" },
//       ],
//       ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
//       [
//         "path.bottom",
//         { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
//         { at: "<" },
//       ],
//       ...menuAnimations,
//     ]);
//   }, [isOpen]);

//   return scope;
// }

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);

  //   const scope = useMenuAnimation(menuOpen);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    setMenuOpen(false);

    toggleOpen();
  }, [pathname]);

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
        <div className="hidden md:flex">
          <ThemeButton />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          {/* <Bars3Icon
            className="lg:hidden w-8 h-8 z-50 text-gray-500 cursor-pointer"
            onClick={toggleMenu}
          /> */}

          {/* <div
            ref={scope}
            className={`px-3 right-0 h-[50%] w-full z-50 absolute top-0 lg:hidden flex flex-col items-center  rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 py-4 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 overflow-hidden opacity-0"
            }`}
          > */}
          {/* <div
            ref={scope}
            className="fixed top-0 left-0 bottom-0 w-[400px] pt-[100px] bg-green-500 will-change-transform translate-x-[100%] flex md:hidden"
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
          </div> */}

          {
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
              className={`absolute top-0 right-0 bottom-0 
               w-[300px] block md:hidden
              `}
            >
              <motion.div
                className="absolute top-0 left-0 bottom-0 w-[300px] dark:bg-gray-700 bg-zinc-900 z-20  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 dark:bg-opacity-50"
                variants={sidebar}
              />
              <Navigation item={menuItems} />
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
