import { BackgroundBeams } from "./ui/BackgroundBeam";
import { TypewriterEffect } from "./ui/TypeWritterEffext";
import Image from "next/image";
import profileImg from "../public/myImg.png";
import { Button } from "./ui/MovingBorder";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { HoverEffect } from "./ui/HoverCard";
import { eduDetails, myAccount } from "@/data";
import ShimmerButton from "./ui/ShimmerButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="z-0">
        <BackgroundBeams />
      </div>
      <div className="pt-10 z-10 relative" id="about">
        <div className="flex relative justify-center items-center flex-col w-screens my-20 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 w-full px-4">
            <div className="flex flex-col justify-start w-full">
              <TypewriterEffect
                words={[
                  {
                    text: "Aruna ",
                    className: "text-3xl md:text-4xl lg:text-6xl",
                  },
                  {
                    text: "Priyadarshana",
                    className: "text-3xl md:text-4xl lg:text-6xl",
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
              <Button>
                <Image
                  src={profileImg}
                  alt="Aruna Priyadarshana"
                  width={300}
                  height={300}
                  className="pt-5"
                />
              </Button>
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
        <div></div>
        <div className="mx-2 my-7">
          <div>
            <h1 className="heading mb-5">
              About <span className="text-purple">me</span>
            </h1>
            <p className="text-center text-base font-normal">
              I am an IT undergraduate at the University of Moratuwa with a GPA
              of 3.79. I enjoy solving problems and developing web applications.
              I have experience with Java, Python, JavaScript, React, and
              Node.js, as well as database management. I am a team player with
              strong time management skills, and I am always eager to learn and
              take on new challenges.
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
