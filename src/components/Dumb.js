import Image from "next/image";
import React from "react";
import pic from "../images/me.jpg";

function Landing() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center md:flex-row p-6">
      <div className="pt-16  ">
        <h1 className="font-semibold text-base">Hi There I&apos;m ...</h1>
        <h1 className="font-semibold text-4xl md:text-5xl">Brian Mulinge.</h1>
        <h1 className="font-semibold text-lg md:text-xl py-4">
          I have a passion of problem-solving and implementing new concepts
          using code.
        </h1>
      </div>
      <div className="">
        <Image
          className="rounded-full"
          priority
          alt="profile picture"
          src={pic}
          width={800}
          height={800}
        />
      </div>
    </section>
  );
}
export default Landing;
