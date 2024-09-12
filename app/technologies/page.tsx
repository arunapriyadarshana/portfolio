import { Metadata } from "next";
import { TechnologyService } from "@/services/technology.service";
import { Technology } from "@/types";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Technologies",
  description: "Technologies",
};

const page = async () => {
  const data = await TechnologyService.getTechnologies();

  if (!data) return null;
  const technologies = await data.json();

  return (
    <div>
      Technologies
      <div className="w-full flex flex-wrap gap-5">
        {technologies &&
          technologies.map((technologie: Technology) => (
            <div className="flex gap-5 flex-row" key={technologie.id}>
              <Image
                src={technologie.icon}
                alt={technologie.name}
                width={30}
                height={20}
              />
              {technologie.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
