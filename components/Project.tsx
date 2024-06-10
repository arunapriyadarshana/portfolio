import { projects } from "@/data";
import Image from "next/image";
import { Meteors } from "./ui/Meteors";
import { FaLocationArrow } from "react-icons/fa6";

const Project = () => {
  return (
    <div className="relative pt-2 pb-5" id="projects">
      <h1 className="heading">
        My <span className="text-purple">projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-6 py-6">
        {projects.map(
          ({ id, title, subTitle, description, gitlink, img, stack }) => (
            <div key={id}>
              <div className=" w-full relative max-w-sm">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-md blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="z-10 w-full h-full overflow-hidden  bg-[#13162d] mb-4">
                    <Image src={img} alt={title} width={400} height={400} />
                  </div>
                  <h1 className="font-bold text-xl text-white  relative z-50">
                    {title}
                  </h1>
                  <h2 className="font-semibold text-sm text-slate-500 mb-4 relative z-50">
                    {subTitle}
                  </h2>

                  <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
                    {description}
                  </p>

                  <div className="flex flex-row w-full items-baseline justify-between mt-7 mb-3 z-50">
                    <div className="flex items-center">
                      {stack.map((item, index) => (
                        <div
                          key={index}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{ transform: `translateX(-${index * 5}px)` }}
                        >
                          <Image src={item} alt="" width={30} height={30} />
                        </div>
                      ))}
                    </div>
                    {gitlink && (
                      <a href={gitlink} target="_blank" rel="noreferrer">
                        <div className="flex justify-center items-center">
                          <p className="lg:text-sm text-xs text-purple">
                            View on GitHub
                          </p>
                          <FaLocationArrow className="ms-3" color="#cbacf9" />
                        </div>
                      </a>
                    )}
                  </div>

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
