import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ProjectService } from "@/services/project.service";
import { TechnologyService } from "@/services/technology.service";
import React from "react";

const page = async () => {
  const data = await ProjectService.getProjects();

  if (!data) return null;
  const technologies = await data.json();

  return (
    <div>
      Projects
      {technologies && <StickyScroll content={technologies} />}
    </div>
  );
};

export default page;
