import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Project from "@/components/Project";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Project />
        <Footer />
      </div>
    </main>
  );
}
