import Image from "next/image";
import Projectdata from "../data/Projectdata";

export default function Project() {
    return (
        <section className="container mx-auto py-12 p-4 items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Projectdata.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <Image src={project.picture} alt={project.title} />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
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
                    className="border font-bold py-2 px-4 rounded ml-4 whitespace-nowrap"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}
