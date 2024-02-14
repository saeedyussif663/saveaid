import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-[65rem] mx-auto">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
