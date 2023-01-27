import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
