import { HeroHighlight } from "./ui/HeroHighlight";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import Link from "next/link";
import logo1 from "@/public/logo1.png";

const Footer = ({ social }: { social: Social[] }) => {
  return (
    <footer
      className="w-full mb-1 md:mb-3 py-5 divide-y divide-blue-200/[0.5]"
      id="contact"
    >
      <HeroHighlight className="w-full">
        <div className="flex flex-col md:flex-row px-5 justify-center md:justify-between item-center gap-10 p-5">
          <div className="flex items-center justify-center md:justify-start md:gap-3 gap-6">
            <Image src={logo1} alt="logo" width={250} height={50} />
          </div>
          <div className="flex flex-col items-center gap-5">
            <Link
              href="mailto:arunapbandara45@gmail.com"
              passHref={true}
              prefetch={false}
            >
              <MagicButton
                title="Let's get in touch"
                icon={"/locationArrow.svg"}
                position="right"
              />
            </Link>
            <div className="flex items-center justify-center md:justify-start md:gap-3 gap-6">
              {social &&
                social.map(({ id, icon, link, name }) => (
                  <Link
                    key={id}
                    href={link}
                    passHref={true}
                    target="_blank"
                    prefetch={false}
                  >
                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-75 saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                      <Image
                        src={icon}
                        alt={name}
                        width={25}
                        height={25}
                        loading="eager"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </HeroHighlight>
      <div className="flex justify-center items-center py-3">
        <p className="text-zinc-500 text-center flex flex-col md:flex-row">
          &copy; 2024 Aruna Priyadarshana.
          <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
