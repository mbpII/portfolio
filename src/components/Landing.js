import Image from "next/image";
import React from "react";
import pic from "../images/me.jpg";

function Landing() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center md:flex-row p-6">
      <div className="">
        <h1 className="font-semibold text-4xl md:text-5xl">
          Streamline comms hurting low hanging
        </h1>
        <h1 className="font-semibold text-lg md:text-xl py-4">
          Today based switch watches respectively but manage key. Catching
          reference read clean cadence crystallize based.
        </h1>
      </div>
      <div className="">
        <Image
          className="rounded-full"
          priority
          alt="profile picture"
          src={pic}
        />
      </div>
    </section>
  );
}

export default Landing;
