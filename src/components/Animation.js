//Landing

/*
import Image from "next/image";
import pic from "../images/me.jpg";
import styles from "../styles/styles.module.css";

export default function Landing() {
  return (
    <section className="flex flex-col items-center pt-10 pb-6 h-screen w-full sm:h-auto sm:pt-16 sm:flex-row">
      <div className="sm:w-1/2 sm:text-left p-6 pl-6 sm:pl-10">
        <h1 className="font-semibold text-base sm:text-2xl text-start">
          Hi There I&apos;m ...
        </h1>
        <h1 className="font-semibold text-4xl sm:text-5xl text-start pt-2">
          Brian Mulinge
        </h1>
        <h1 className="font-semibold text-lg sm:text-xl text-start pt-4">
          I have a passion for problem-solving and implementing new concepts
          using code.
        </h1>
      </div>
      <div className={`${styles.blobshape}`} style={{ zIndex: 1 }}>
        <Image
          className="h-64 sm:h-auto w-64 sm:w-auto object-cover"
          style={{ borderRadius: "50%", display: "inline-block", zIndex: 0 }}
          priority
          alt="profile picture"
          src={pic}
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
*/

//About

/*
import React from "react";
import { Canvas } from "@react-three/fiber";
import Animation from "./Animation";
import { OrbitControls } from "@react-three/drei";

function About() {
  return (
    <section className="bg-white text-black flex h-screen w-full flex-col items-center justify-center lg:flex-row p-6">
      <div className="h-full md:h-2/4 lg:h-full w-full">
        <Canvas style={{ width: "100%", height: "100%" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Animation />
        </Canvas>
      </div>

      <div className="h-full w-full lg:p-4 flex flex-col justify-center">
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
*/
