"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    img: string;
    name: string;
    time: string;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2  py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseOver={() => setHoveredIndex(idx)}
          onMouseOut={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            img={item.img}
            name={item.name}
            time={item.time}
            title={item.title}
            desciption={item.description}
            className="col-span-2"
          />
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  img,
  time,
  title,
  name,
  desciption,
}: {
  className?: string;
  img: string;
  time: string;
  title: string;
  name: string;
  desciption: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full md:w-[30rem] p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="flex flex-col ">
          <h4
            className={cn("text-zinc-100 font-bold tracking-wide ", className)}
          >
            {title}
          </h4>
          <h4
            className={cn(
              "text-zinc-100 font-normal text-sm tracking-wide ",
              className
            )}
          >
            {time}
          </h4>
          <h4
            className={cn("text-zinc-300 font-bold tracking-wide ", className)}
          >
            {name}
          </h4>
          <p
            className={cn(
              "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
              className
            )}
          >
            {desciption}
          </p>
        </div>
      </div>
    </div>
  );
};
