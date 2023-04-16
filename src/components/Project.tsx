import Image from "next/image";
import Projectdata from "../data/Projectdata";

export default function Project() {
  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid gap-4 grid-col md:grid-cols-2 lg:grid-cols-3">
        {Projectdata.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <Image src={project.picture} alt={project.title} priority />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex items-center">
                <a
                  href={project.projectlink}
                  target="_blank"
                  rel="noreferrer"
                  className="border font-bold py-2 px-4 rounded  whitespace-nowrap"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
