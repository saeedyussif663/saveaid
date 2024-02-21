import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Suspense } from "react";
import Loader from "./loading";

export default function Home() {
  return (
    <main className="max-w-[65rem] mx-auto">
      <Navbar />
      <Landing />
      <About />
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>

      <Contact />
    </main>
  );
}
