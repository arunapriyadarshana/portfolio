"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Project } from "@/types"; // Assuming the type 'Project' is defined in a file named 'types.ts' in the '@/types' directory.
import Button from "./Button";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: Project[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  // const [selectedId, setSelectedId] = useState<string | null>(null);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[30rem] !z-0 overflow-y-auto flex justify-center relative space-x-10 rounded-md p-5 md:p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-3 md:px-10">
        <div className="max-w-2xl">
          {content.map((item: Project, index) => (
            <div key={item.title + index} className="my-10 md:my-20">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                className="text-2xl font-bold dark:text-slate-100 text-slate-900"
              >
                <div className="flex flex-col">
                  <p className="text-primary"> {item.title}</p>
                  <p className="font-normal text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-600 dark:text-slate-300 md:min-h-24 max-w-sm mt-10"
              >
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={350}
                    height={250}
                    className="rounded-sm block md:hidden"
                    loading="eager"
                    priority
                  />

                  <div className="flex md:hidden w-full justify-end py-2">
                    <Button
                      title="View"
                      hadleClick={() => {
                       
                      }}
                    />
                  </div>
                </div>
                <div className="hidden md:flex flex-col  ">
                  <p>{item.description}</p>

                  {item.role && (
                    <div className="flex flex-row my-2">
                      <p className="font-semibold text-slate-500">Role: </p>
                      <p className="font-normal text-base text-slate-400">
                        {item.role}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="hidden md:block h-52" />
        </div>
      </div>
      <div
        className={cn(
          "hidden md:block h-full w-96 z-0 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].img && (
          <Image
            src={content[activeCard].img}
            alt={content[activeCard].title}
            width={350}
            height={250}
            className="rounded-sm w-full h-auto max-h-[70%]"
            loading="eager"
            priority
          />
        )}
        <div className="hidden md:flex flex-wrap gap-2 my-5">
          {content[activeCard].techStack &&
            content[activeCard].techStack.map((tech) => (
              <p
                key={tech.techId}
                className={`text-[1rem] dark:text-slate-900 text-slate-50 bg-primary px-3 py-1 rounded-full`}
              >
                {tech.tech.name}
              </p>
            ))}
        </div>
      </div>
      {/* <AnimateCard selectedId={selectedId} setSelectedId={setSelectedId} /> */}
    </motion.div>
  );
};

const AnimateCard = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}) => {
  return (
    <div>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{"test"}</motion.h5>
            <motion.h2>{"test"}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
