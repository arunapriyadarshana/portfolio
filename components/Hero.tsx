import { BackgroundBeams } from "./ui/BackgroundBeam";
import { GlobeDemo } from "./ui/GlobeDemo";
import { TypewriterEffect } from "./ui/TypeWritterEffext";
import Image from "next/image";
import profileImg from "../public/myImg.png";
import { Button } from "./ui/MovingBorder";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-10 ">
      <div className="flex items-center justify-center absolute top-10 left-0 w-full h-full"></div>
      <div className="flex relative justify-center items-center flex-col my-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28">
          <div className="flex flex-col justify-start w-full">
            <TypewriterEffect
              words={[
                { text: "Aruna ", className: "text-2xl md:text-3xl" },
                { text: "Priyadarshana", className: "text-2xl md:text-3xl" },
              ]}
            />
            <TextGenerateEffect
              words="I am a full-stack developer."
              className=""
            />
          </div>
          <div>
            <Button>
              <Image
                src={profileImg}
                alt="Aruna Priyadarshana"
                width={300}
                height={300}
                className="pt-5"
              />
            </Button>
          </div>
        </div>
        <div>
          <h1 className="heading">
            About <span className="text-purple">me</span>
          </h1>
          <p className="text-center">
            I am an IT undergraduate at the University of Moratuwa with a GPA of
            3.79. I enjoy solving problems and developing web applications. I
            have experience with Java, Python, JavaScript, React, and Node.js,
            as well as database management. I am a team player with strong time
            management skills, and I am always eager to learn and take on new
            challenges.
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
