"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface HoverEffectProps {
  items: Education[];
  className?: string;
}

export const HoverEffect = React.memo(
  ({ items, className }: HoverEffectProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <div className={cn("grid grid-cols-1 lg:grid-cols-2 py-5", className)}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseOver={() => setHoveredIndex(idx)}
            onMouseOut={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
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
              name={item.name}
              time={item.time}
              title={item.title}
              description={item.description}
              other={item.other}
              className="col-span-2"
            />
          </div>
        ))}
      </div>
    );
  }
);

interface CardProps {
  className?: string;
  time: string;
  title: string;
  name: string;
  description: string;
  other?: string;
}

export const Card = ({
  className,
  time,
  title,
  name,
  description,
  other,
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full md:w-[30rem] p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="relative z-50">
        <div className="flex flex-col">
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
            className={cn(
              "text-zinc-300 text-sm font-bold tracking-wide ",
              className
            )}
          >
            {name}
          </h4>
          <p
            className={cn(
              "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm",
              className
            )}
          >
            {description}
          </p>
          <h4
            className={cn(
              "text-zinc-100 font-bold tracking-wide mt-3",
              className
            )}
          >
            {other}
          </h4>
        </div>
      </div>
    </div>
  );
};

HoverEffect.displayName = "HoverEffect";
