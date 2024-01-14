import About from "@/components/About";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="max-w-[65rem] mx-auto">
      <Navbar />
      <Landing />
      <About />
    </main>
  );
}
