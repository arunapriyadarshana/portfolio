import { TechnologyService } from "@/services/technology.service";
import { Technology } from "@/types";
import React from "react";

const page = async () => {
  const data = await TechnologyService.getTechnologies();

  if (!data) return null;
  const technologies = await data.json();

  return (
    <div>
      Technologies
      <ul>
        {technologies &&
          technologies.map((tech: Technology) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default page;
