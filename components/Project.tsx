import React from "react";
import Image from "next/image";
import { Meteors } from "./ui/Meteors";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

const ProjectCard = React.memo(({ project }: { project: Project }) => {
  const { title, subTitle, duration, description, img, stack, links } = project;
  return (
    <div data-aos="zoom-out-up">
      <div className=" w-full relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-md blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="z-10 w-full h-full overflow-hidden  bg-[#13162d] mb-4">
            <Image
              src={img}
              alt={title}
              width={350}
              height={250}
              className="rounded-sm"
              loading="eager"
              priority
            />
          </div>
          <h2 className="font-bold text-xl text-white  relative z-50">
            {title}
          </h2>
          <div className="flex flex-row flex-wrap justify-between items-center w-full">
            {subTitle && (
              <h2 className="font-semibold text-sm text-slate-500 mr-2 mb-4 relative z-50">
                {subTitle}
              </h2>
            )}

            {duration && (
              <h2 className="font-semibold text-sm text-slate-400 mb-4 relative z-50">
                {duration}
              </h2>
            )}
          </div>

          <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
            {description && description}
          </p>
          {project.role && <div className=" flex flex-row space-x-3">
            <p className="font-semibold text-slate-500">Role: </p>
            <p className="font-normal text-base text-slate-400">
              {project.role}
            </p>
          </div>}
          <div className="flex flex-wrap  w-full  justify-between mt-4 gap-5 z-50">
            <div className="flex">
              <AnimatedTooltip items={stack} />
            </div>
            <div className="flex flex-col items-end w-full space-y-1 ">
              {links &&
                links.map((link) => (
                  <Link
                    href={link.split(",")[2]}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                    key={link.split(",")[1]}
                    prefetch={false}
                    onClick={() =>
                      sendGAEvent("event", "project-link", {
                        value: link.split(",")[1],
                      })
                    }
                  >
                    <div className="flex flex-row gap-3 ">
                      <p className="lg:text-sm text-xs text-purple">
                        {link.split(",")[0]}
                      </p>
                      <Image
                        src="/locationArrowPurple.svg"
                        alt={"arrow"}
                        width={3}
                        height={3}
                        className="!w-3 !h-auto"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Project = ({ data }: { data: Project[] }) => {
  return (
    <div className="relative pt-2 pb-5" id="projects">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h2 className="heading">
          My <span className="text-purple">works</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 py-6">
        {data &&
          data.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
      </div>
    </div>
  );
};

export default Project;
