"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Project from "@/components/Project";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/actions/project.actions";
import { getAbout } from "@/lib/actions/about.actions";
import { getTechnologies } from "@/lib/actions/technologies.action";
import { getSocialMedia } from "@/lib/actions/social.action";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const LandingPage = () => {
    const [aboutMeData, setAboutMeData] = useState("");
    const [cvUrl, setCvUrl] = useState("");
    const [formattedEduData, setFormattedEduData] = useState([]);
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    interface GroupedTechnologies {
        frontEnd: Technology[];
        backEnd: Technology[];
        database: Technology[];
        programming: Technology[];
        tool: Technology[];
        mobile: Technology[];
    }
    
    const [groupedTechnologies, setGroupedTechnologies] = useState<GroupedTechnologies>({
        frontEnd: [],
        backEnd: [],
        database: [],
        programming: [],
        tool: [],
        mobile: [],
    });
    const [groupedSocials, setGroupedSocials] = useState({
        edu: [] as Social[],
        social: [] as Social[],
    });
    const [loading, setLoading] = useState({
        aboutMe: true,
        cvUrl: true,
        eduData: true,
        projectsData: true,
        technologies: true,
        socials: true,
    });
    
    useEffect(() => { 
        const fetchData = async () => { 
            const heroData = await getAbout();
            const aboutMeData = heroData.documents.find(
              (doc) => doc.title === "aboutMe"
            )?.details[0];
            setAboutMeData(aboutMeData);
            setLoading((prev) => ({ ...prev, aboutMe: false }));
            const cvUrl = heroData.documents.find((doc) => doc.title === "cv")
                ?.details[0];
            setCvUrl(cvUrl);
            setLoading((prev) => ({ ...prev, cvUrl: false }));
            const eduData =
              heroData.documents.find((doc) => doc.title === "edu")?.details ||
              [];
            const formattedEduData = eduData.map(
              (detail: {
                split: (arg0: string) => [any, any, any, any, any];
              }) => {
                const [title, time, name, description, other] =
                  detail.split("$$");

                return {
                  id:
                    heroData.documents.find((doc) => doc.title === "edu")
                      ?.$id || "",
                  title: title.trim(),
                  time: time.trim(),
                  name: name.trim(),
                  description: description.trim(),
                  other: other.trim(),
                };
              }
            );
            setFormattedEduData(formattedEduData);
            setLoading((prev) => ({ ...prev, eduData: false }));
            
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
            setProjectsData(projectsData);
            setLoading((prev) => ({ ...prev, projectsData: false }));

            const technologies = await getTechnologies();
            const groupedTechnologies = technologies.documents.reduce(
              (acc: { [key: string]: any }, item) => {
                const category = item.catagory;
                if (!acc[category]) {
                  acc[category] = [];
                }
                acc[category].push(item);
                return acc;
              },
              {}
            );
            setGroupedTechnologies({
                frontEnd: groupedTechnologies.frontEnd || [],
                backEnd: groupedTechnologies.backEnd || [],
                database: groupedTechnologies.database || [],
                programming: groupedTechnologies.programming || [],
                tool: groupedTechnologies.tool || [],
                mobile: groupedTechnologies.mobile || [],
            });
            setLoading((prev) => ({ ...prev, technologies: false }));

            const socials = await getSocialMedia();
            const groupedSocials = socials.documents.reduce(
              (acc: { [key: string]: any }, item) => {
                const category = item.catagory;
                if (!acc[category]) {
                  acc[category] = [];
                }
                acc[category].push(item);
                return acc;
              },
              {}
            );
            setGroupedSocials({
                edu: groupedSocials.edu || [],
                social: groupedSocials.social || [],
            });
            setLoading((prev) => ({ ...prev, socials: false }));
        };
        fetchData();
    }, []);
  

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5 remove-scrollbar select">
      {loading.aboutMe ||
      loading.cvUrl ||
      loading.eduData ||
      loading.projectsData ||
      loading.technologies ||
      loading.socials ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-7xl w-full remove-scrollbar  selection:*:bg-[#611d75]">
          <FloatingNav navItems={navItems} />
          <Hero
            aboutMe={aboutMeData}
            eduData={formattedEduData}
            eduSocial={groupedSocials.edu || []}
            technologies={{
              frontEnd: groupedTechnologies.frontEnd || [],
              backEnd: groupedTechnologies.backEnd || [],
              databases: groupedTechnologies.database || [],
              programmingLanguages: groupedTechnologies.programming || [],
              tools: groupedTechnologies.tool || [],
              mobile: groupedTechnologies.mobile || [],
            }}
            cvUrl={cvUrl}
          />
          <Project data={projectsData} />
          <Footer social={groupedSocials.social || []} />
        </div>
      )}
    </main>
  );
}

export default LandingPage;
