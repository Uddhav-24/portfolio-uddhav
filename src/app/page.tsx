import Navbar from "../components/navbar";

import Intro from "../sections/intro";
import Projects from "../sections/projects";
import Skills from "../sections/skills";
import Experience from "../sections/experience";
import Contact from "../sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e5e5e5] text-[#111111]">
      <div className="mx-auto max-w-6xl p-6 md:p-10">
        <Navbar />

        <Intro />

        <Projects />

        <Skills />

        <Experience />

        <Contact />
      </div>
    </main>
  );
}