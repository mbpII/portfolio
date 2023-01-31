import React from "react";
import { Canvas } from "@react-three/fiber";
import Animation from "./Animation";
import { OrbitControls } from "@react-three/drei";

function About() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center lg:flex-row p-6">
      <div className="h-96 md:h-2/4 lg:h-full w-full ">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Animation />
        </Canvas>
      </div>
      <div className="h-full w-full lg:p-4">
        <h1 className="font-semibold  text-3xl md:text-4xl pt-4">
          The technologies I use
        </h1>
        <h1 className="font-semibold text-lg md:text-xl py-4">
          As a self-taught developer, I have gained a strong understanding of
          various programming languages and technologies through hands-on
          projects and online resources. My passion for problem-solving and
          attention to detail allows me to quickly understand and implement new
          concepts. I have experience building responsive web applications as
          well as working with APIs and databases. I am always eager to take on
          new challenges and am dedicated to constantly improving my skills.
        </h1>
      </div>
    </section>
  );
}

export default About;
