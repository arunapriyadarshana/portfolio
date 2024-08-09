"use client";

import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "@/data";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";

// Dynamically import the heavy components
const Meteors = dynamic(
  () => import("./ui/Meteors").then((mod) => mod.Meteors),
  { ssr: false }
);
const AnimatedTooltip = dynamic(
  () => import("./ui/AnimatedTooltip").then((mod) => mod.AnimatedTooltip),
  {
    ssr: false,
  }
);

const ProjectImage = memo(
  ({ imageSrc, name }: { imageSrc: string; name: string }) => (
    <Image
      src={imageSrc}
      alt={name}
      width={400}
      height={400}
      className="rounded-sm"
      loading="lazy"
    />
  )
);

ProjectImage.displayName = "ProjectImage";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative pt-2 pb-5" id="projects">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1 className="heading">
          My <span className="text-purple">works</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 py-6">
        {projects.map(
          ({
            id,
            title,
            subTitle,
            description,
            links,
            img,
            stack,
            duration,
          }) => (
            <div key={id} data-aos="zoom-out-up">
              <div className="w-full relative max-w-sm">
                {/* Gradient Background */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-md blur-3xl" />

                {/* Project Card */}
                <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  {/* Project Image */}
                  <div className="z-10 w-full h-full overflow-hidden bg-[#13162d] mb-4">
                    <ProjectImage imageSrc={img} name={title} />
                  </div>

                  {/* Project Title and SubTitle */}
                  <h1 className="font-bold text-xl text-white relative z-50">
                    {title}
                  </h1>
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

                  {/* Project Description */}
                  <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
                    {description}
                  </p>

                  {/* Project Links and Stack */}
                  <div className="flex flex-wrap w-full justify-between mt-4 gap-5 z-50">
                    <div className="flex">
                      <AnimatedTooltip items={stack} />
                    </div>
                    <div className="flex flex-col items-end min-w-44 w-full sm:w-fit space-y-1 ">
                      {links &&
                        links.map(({ id, name, label, url }) => (
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer"
                            key={id}
                            onClick={() =>
                              (window as any).gtag("event", "click", {
                                event_category: "project",
                                event_label: label,
                                value: id,
                              })
                            }
                          >
                            <div className="flex flex-row gap-3 ">
                              <p className="lg:text-sm text-xs truncate max-w-36 text-purple">
                                {name}
                              </p>
                              <FaLocationArrow color="#cbacf9" />
                            </div>
                          </a>
                        ))}
                    </div>
                  </div>

                  {/* Meteors Animation */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Project;
