import Image from "next/image";
import { Projectdata } from "../data/Projectdata";

export default function Projects() {
  return (
    <section className="flex flex-row overflow-x-auto w-full h-1/2 bg-black px-6 py-2 space-x-4 whitespace-nowrap lg:justify-center scrollbar-hide">
      {Projectdata.map((project, index) => (
        <div
          key={index}
          className=" flex flex-col border border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-black"
        >
          <Image
            className="w-full rounded-t-lg"
            alt="Project picture"
            src={project.picture}
            width={300}
            height={300}
          />
          <h1 className="font-semibold text-lg p-2">{project.title}</h1>
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
