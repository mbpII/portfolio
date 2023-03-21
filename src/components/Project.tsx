import Projectdata from "../data/Projectdata";
import Image from "next/image";

export default function Project() {
  return (
    <section className="p-6 h-full w-full">
      <h1 className="text-4xl font-bold text-center pb-6">Projects</h1>
      <div className="grid justify-items-center gap-4 auto-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2">
        {Projectdata.map((project, index) => (
          <div key={index} className="border rounded-lg">
            <Image
              className="rounded-t-lg"
              src={project.picture}
              alt={project.title}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4 font-semibold text-base">
                {project.description}
              </p>
              <div className="flex items-center">
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noreferrer"
                  className="border font-bold py-2 px-4 rounded"
                >
                  Github
                </a>
                <a
                  href={project.projectlink}
                  target="_blank"
                  rel="noreferrer"
                  className="border font-bold py-2 px-4 rounded ml-4"
                >
                  Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
