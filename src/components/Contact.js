import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center md:flex-row p-6 text-center">
      <div className="">
        <h1 className="font-bold text-4xl">Get in touch</h1>
        <h1 className="text-base font-semibold pt-4">
          Dangerous fured give after reference giant. Back-end busy spaces devil
          hours wiggle.
        </h1>
        <h1 className="flex items-center justify-center font-bold p-4 rounded-lg border mt-4">
          Contact Me
          <AiOutlineArrowRight />
        </h1>
      </div>
    </section>
  );
}

export default Contact;
