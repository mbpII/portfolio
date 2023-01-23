import Image from "next/image";
import { Projectdata } from "../data/ProjectData";

export default function Projects() {
  return (
    <section className="flex flex-row overflow-x-auto w-full h-1/2 bg-black p-6 space-x-4 whitespace-nowrap scrollbar-hide">
      {Projectdata.map((project, index) => (
        <div
          key={index}
          className=" flex flex-col border border-gray-700 rounded-lg"
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
