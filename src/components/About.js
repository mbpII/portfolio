import React from "react";
import { Canvas } from "@react-three/fiber";
import Animation from "./Animation";
import { OrbitControls } from "@react-three/drei";

function About() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center lg:flex-row p-6">
      <div className="h-full md:h-2/4 lg:h-full w-full bg-white">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Animation />
        </Canvas>
      </div>
      <div className="h-full w-full lg:p-4">
        <h1 className="font-semibold text-3xl md:text-4xl pt-4">
          This are the technologies I use
        </h1>
        <h1 className="font-semibold text-lg md:text-xl py-4">
          Self-taught developer with experience in multiple programming
          languages and technologies. Strong problem-solving skills and
          attention to detail. Experience building web applications and working
          with APIs and databases. Continuously seeking new challenges to
          improve skills.
        </h1>
      </div>
    </section>
  );
}

export default About;
