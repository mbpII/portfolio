import Image from "next/image";
import { Projectdata } from "../data/Projectdata";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="flex flex-row overflow-x-auto w-full h-1/2 bg-black px-6 py-2 space-x-4 whitespace-nowrap lg:justify-center scrollbar-hide"
    >
      {Projectdata.map((project, index) => (
        <div
          key={index}
          className=" flex flex-col border border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-black"
        >
          <Image
            className="w-full rounded-t-lg"
            alt="Project picture"
            src={project.picture}
            width={150}
            height={150}
          />
          <h1 className="font-semibold text-lg p-2">{project.title}</h1>
          <h1 className="font-semibold text-sm px-2">{project.description}</h1>
          <div className="flex space-x-4 items-center m-2">
            <a
              className="p-2 border border-gray-700 rounded-lg font-semibold text-base"
              target="_blank"
              rel="noreferrer"
              href={project.projectlink}
            >
              Project Link
            </a>
            <a
              className="p-2 border border-gray-700 rounded-lg font-semibold text-base"
              target="_blank"
              rel="noreferrer"
              href={project.githublink}
            >
              Github Link
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
