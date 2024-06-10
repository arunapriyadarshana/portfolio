import { BackgroundBeams } from "./ui/BackgroundBeam";
import { TypewriterEffect } from "./ui/TypeWritterEffext";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ProfilePhoto from "./ui/ProfilePhoto";
import MagicButton from "./ui/MagicButton";
import { HoverEffect } from "./ui/HoverCard";

import {
  backEnd,
  databases,
  eduDetails,
  frontEnd,
  myAccount,
  programmingLanguages,
} from "@/data";
import ShimmerButton from "./ui/ShimmerButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="z-0 absolute w-screen h-screen">
        <BackgroundBeams />
      </div>
      <div className="pt-5 md:pt-28 lg:pt-36 z-10 relative" id="about">
        <div className="flex relative justify-center items-center flex-col w-screens my-20 py-5 md:py-10 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-28 w-full px-4">
            <div className="flex flex-col justify-start w-full">
              <TypewriterEffect
                words={[
                  {
                    text: "Aruna ",
                    className: "text-[25px] md:text-4xl lg:text-6xl",
                  },
                  {
                    text: "Priyadarshana",
                    className: "text-[25px] md:text-4xl lg:text-6xl",
                  },
                ]}
              />
              <TextGenerateEffect
                words="I am a full-stack developer."
                className="text-xl md:text-3xl"
              />
              <div className="sm:flex hidden">
                <MagicButton
                  title="Download Resume"
                  position="left"
                  icon={""}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <ProfilePhoto />
              <div className="sm:hidden felx mt-10">
                <MagicButton
                  title="Download Resume"
                  position="left"
                  icon={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 my-10">
          <div>
            <h1 className="heading my-5">
              About <span className="text-purple">me</span>
            </h1>
            <p className="text-center text-base font-normal w-full px-2 md:px-20">
              I am an IT undergraduate at the University of Moratuwa with a GPA
              of 3.79. I enjoy solving problems and developing web applications.
              I have experience with Java, Python, JavaScript, TypeScrpt,
              React.js, Nextjs and Node.js, as well as database management. I am
              a team player with strong time management skills, and I am always
              eager to learn and take on new challenges.
            </p>
            <div className="flex flex-row justify-center items-center gap-5 my-6">
              {myAccount.map(({ id, image, name, link }) => (
                <Link key={id} href={link} passHref={true} target="_blank">
                  <ShimmerButton image={image} name={name} />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Educations</h1>
            <div className="flex flex-wrap justify-center items-center">
              <HoverEffect items={eduDetails} />
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Technologies</h1>
            <div className="grid grid-rows-4 gap-5 mt-3">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Front-End Development</h1>
                <div className="flex flex-wrap gap-5 py-4">
                  {frontEnd.map(({ id, title, img }) => (
                    <div
                      key={id}
                      className="flex flex-row items-center justify-center gap-3"
                    >
                      <Image
                        src={img}
                        alt={title}
                        width={30}
                        height={30}
                        className="rounded-sm"
                      />
                      <p className="font-semibold text-lg">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Back-End Development</h1>
                <div className="flex flex-wrap gap:3 md:gap-5 py-4">
                  {backEnd.map(({ id, title, img }) => (
                    <div
                      key={id}
                      className="flex flex-row items-center justify-center gap-3"
                    >
                      <Image
                        src={img}
                        alt={title}
                        width={30}
                        height={30}
                        className="rounded-sm"
                      />
                      <p className="font-semibold text-lg">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Databases</h1>
                <div className="flex flex-wrap gap-5 py-4">
                  {databases.map(({ id, title, img }) => (
                    <div
                      key={id}
                      className="flex flex-row items-center justify-center gap-3"
                    >
                      <Image
                        src={img}
                        alt={title}
                        width={30}
                        height={30}
                        className="rounded-sm"
                      />
                      <p className="font-semibold text-lg">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Programming Languages</h1>
                <div className="flex flex-wrap gap-5 pt-4">
                  {programmingLanguages.map(({ id, title, img }) => (
                    <div
                      key={id}
                      className="flex flex-row items-center justify-center gap-3"
                    >
                      <Image
                        src={img}
                        alt={title}
                        width={30}
                        height={30}
                        className="rounded-sm"
                      />
                      <p className="font-semibold text-lg">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
