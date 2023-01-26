import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </motion.div>
  );
}
