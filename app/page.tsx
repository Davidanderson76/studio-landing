import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
