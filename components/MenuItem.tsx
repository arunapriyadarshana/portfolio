import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  item,
}: {
  item: {
    i: number;
    name: string;
    href: string;
  };
}) => {
  const pathname = usePathname();
  const isActive =
    item.href !== "/" ? pathname.startsWith(item.href) : pathname === item.href;
  return (
    <motion.li variants={variants}>
      <div className="z-30 rounded-md w-[200px] h-[20px] flex-1">
        <Link href={item.href} className="py-2">
          <p
            className={`${
              isActive
                ? "text-primary border-b-2 border-primary cool-link transition-all duration-200"
                : "text-zinc-300 dark:text-zinc-100"
            } text-lg lg:text-lg font-semibold cursor-pointer`}
          >
            {item.name}
          </p>
        </Link>
      </div>
    </motion.li>
  );
};
