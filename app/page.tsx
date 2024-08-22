import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Project from "@/components/Project";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/actions/project.actions";
import { getAbout } from "@/lib/actions/about.actions";
import { getTechnologies } from "@/lib/actions/technologies.action";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 30000));
  const heroData = await getAbout();
  const aboutMeData = heroData.documents.find((doc) => doc.title === "aboutMe")
    ?.details[0];
  const eduData =
    heroData.documents.find((doc) => doc.title === "edu")?.details || [];
  const formattedEduData = eduData.map(
    (detail: { split: (arg0: string) => [any, any, any, any, any] }) => {
      const [title, time, name, description, other] = detail.split("$$");

      return {
        id: heroData.documents.find((doc) => doc.title === "edu")?.$id || "",
        title: title.trim(),
        time: time.trim(),
        name: name.trim(),
        description: description.trim(),
        other: other.trim(),
      };
    }
  );
  const { documents: projects } = await getProjects();
  const projectsData: Project[] = projects.map((project) => ({
    id: project.$id,
    title: project.title,
    subTitle: project.subTitle,
    img: project.img,
    duration: project.duration,
    description: project.description,
    links: project.links,
    stack: project.technologies,
  }));

  const technologies = await getTechnologies();
  const groupedTechnologies = technologies.documents.reduce(
    (acc: { [key: string]: any }, item) => {
      const category = item.catagory;
      if (!acc[category]) {
        acc[category] = [];
        console.log(category);
      }
      acc[category].push(item);
      return acc;
    },
    {}
  );
  console.log(groupedTechnologies.tool, groupedTechnologies.none);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5 remove-scrollbar select">
      <div className="max-w-7xl w-full remove-scrollbar  selection:*:bg-[#694873]">
        <FloatingNav navItems={navItems} />
        <Hero
          aboutMe={aboutMeData}
          eduData={formattedEduData}
          technologies={{
            frontEnd: groupedTechnologies.frontEnd || [],
            backEnd: groupedTechnologies.backEnd || [],
            databases: groupedTechnologies.database || [],
            programmingLanguages: groupedTechnologies.programming || [],
            tools: groupedTechnologies.tool || [],
            mobile: groupedTechnologies.mobile || [],
          }}
        />
        <Project data={projectsData} />
        <Footer />
      </div>
    </main>
  );
}
