import { tech } from "../data/Tech";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="flex flex-col w-full bg-black p-6"
    >
      <div className="">
        <h1 className="font-semibold pb-4 text-lg">
          As a self-taught developer, I have gained a strong understanding of
          various programming languages and technologies through hands-on
          projects and online resources. My passion for problem-solving and
          attention to detail allows me to quickly understand and implement new
          concepts. I have experience building responsive web applications as
          well as working with APIs and databases. I am always eager to take on
          new challenges and am dedicated to constantly improving my skills.
        </h1>
      </div>
      <div className="">
        <div className="text-lg font-semibold flex space-x-4 md:justify-center lg:justify-center overflow-auto whitespace-nowrap scrollbar-hide ">
          {tech.map((tech, index) => (
            <h1
              key={index}
              className="rounded-lg border-gray-700 border p-4 bg-gradient-to-r from-gray-800 to-black"
            >
              {tech}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
}
