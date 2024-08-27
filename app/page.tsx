import LandingPage from "@/components/LandingPage";

export default async function Home() {
  

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5 remove-scrollbar select">
      <div className="max-w-7xl w-full remove-scrollbar  selection:*:bg-[#611d75]">
        <LandingPage />
      </div>
    </main>
  );
}
