import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ProjectService } from "@/services/project.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Aruna Priyadarshana's Projects",
};

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
