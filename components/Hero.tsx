
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/BackgroundBeam";
import { TypewriterEffect } from "./ui/TypeWritterEffext";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ProfilePhoto from "./ui/ProfilePhoto";
import MagicButton from "./ui/MagicButton";
import { HoverEffect } from "./ui/HoverCard";
import ShimmerButton from "./ui/ShimmerButton";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

const AboutMe = React.memo(({ aboutMe }: { aboutMe: string }) => {
  return (
    <p className="text-center text-base font-normal w-full px-2 md:px-20">
      {aboutMe && aboutMe}
    </p>
  );
});

AboutMe.displayName = "AboutMe";

const Technology = React.memo(({ data }: { data: Technology[] }) => {
  return (
    <div className="flex flex-wrap gap-5 py-4">
      {data.map(({ $id, name, img }) => (
        <div
          key={$id}
          className="flex flex-row items-center justify-center gap-3"
        >
          <Image
            src={img}
            alt={name}
            width={30}
            height={30}
            className="rounded-sm"
            loading="eager"
          />
          <p className="font-semibold text-lg">{name}</p>
        </div>
      ))}
    </div>
  );
});

Technology.displayName = "Technology";

const Hero = ({
  profilePic,
  wordsArr,
  aboutMe,
  eduData,
  eduSocial,
  technologies,
  cvUrl,
}: {
    profilePic: string;
  wordsArr: string[];
  aboutMe: string;
  eduData: Education[];
  eduSocial: Social[];
  technologies: {
    frontEnd: Technology[];
    backEnd: Technology[];
    databases: Technology[];
    programmingLanguages: Technology[];
    tools: Technology[];
    mobile: Technology[];
  };
  cvUrl: string;
}) => {
 

  const handleClick = () => {
    sendGAEvent("event", "download-cv", { value: "cv" });
    fetch(cvUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
      mode: "no-cors",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "Aruna_Priyadarshana_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        return;
      });
  };

  return (
    <div className="relative">
      <div className="z-0 absolute w-full h-screen">
        <BackgroundBeams />
      </div>
      <div className="pt-5 md:pt-28 lg:pt-36 z-10 relative" id="about">
        <div className="flex relative justify-center items-center flex-col w-screens my-20 py-5 md:py-10 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-28 w-full px-4">
            <div className="flex flex-col justify-center lg:justify-start w-full">
              <TypewriterEffect
                words={[
                  {
                    text: "Aruna ",
                    className: "text-[25px] sm:text-4xl lg:text-6xl",
                  },
                  {
                    text: "Priyadarshana",
                    className: "text-[25px] sm:text-4xl lg:text-6xl",
                  },
                ]}
              />
              <TextGenerateEffect
                words="I am a "
                wordsArr={wordsArr}
                className="text-xl md:text-3xl"
              />
              <div className="md:flex hidden">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <MagicButton
                    title="Download Resume"
                    position="left"
                    handleClick={handleClick}
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center lg:items-end justify-center">
              <ProfilePhoto profileImg={ profilePic} />
              <div className="md:hidden felx mt-10">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <MagicButton
                    title="Download Resume"
                    position="left"
                    handleClick={handleClick}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 my-10">
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h2 className="heading my-5">
              About <span className="text-purple">me</span>
            </h2>
            <AboutMe aboutMe={aboutMe} />
            <div className="flex flex-row justify-center items-center gap-5 my-6">
            
              {eduSocial &&
                eduSocial.map(({ $id, name, icon, link }) => (
                  <Link
                    key={$id}
                    href={link}
                    passHref={true}
                    target="_blank"
                    prefetch={false}
                  >
            
                    <ShimmerButton image={icon} name={name} />
                  </Link>
                ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="mt-5 flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl font-bold">Educations</h2>
            <div className="flex flex-wrap justify-center items-center">
              <HoverEffect items={eduData} />
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <h2 className="text-3xl font-bold">Technologies</h2>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              {technologies.frontEnd && technologies.frontEnd.length > 0 && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="flex flex-col"
                >
                  <h2 className="text-2xl font-bold">Front-End Development</h2>
                  <Technology data={technologies.frontEnd} />
                </div>
              )}
              {technologies.mobile && technologies.mobile.length > 0 && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="flex flex-col"
                >
                  <h2 className="text-2xl font-bold">Mobile Development</h2>
                  <Technology data={technologies.mobile} />
                </div>
              )}
              {technologies.backEnd && technologies.backEnd.length > 0 && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="flex flex-col"
                >
                  <h2 className="text-2xl font-bold">Back-End Development</h2>
                  <Technology data={technologies.backEnd} />
                </div>
              )}

              {technologies.databases && technologies.databases.length > 0 && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="flex flex-col"
                >
                  <h2 className="text-2xl font-bold">Databases</h2>
                  <Technology data={technologies.databases} />
                </div>
              )}
              {technologies.programmingLanguages &&
                technologies.programmingLanguages.length > 0 && (
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="flex flex-col"
                  >
                    <h2 className="text-2xl font-bold">
                      Programming Languages
                    </h2>
                    <Technology data={technologies.programmingLanguages} />
                  </div>
                )}
              {technologies.tools && technologies.tools.length > 0 && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="flex flex-col"
                >
                  <h2 className="text-2xl font-bold">Tools</h2>
                  <Technology data={technologies.tools} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
