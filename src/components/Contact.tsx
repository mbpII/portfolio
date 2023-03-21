import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Contact() {
  return (
    <section className="flex  w-full flex-col items-center justify-center md:flex-row p-6 text-center pb-20">
      <div className="">
        <h1 className="font-bold text-4xl">Get in touch</h1>
        <h1 className="text-base font-semibold pt-4">
          Drop me a Message I&apos;d like to hear from you!
        </h1>

        <a
          href="mailto:brianmulinge45@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center font-bold px-6 py-4 rounded-lg border mt-4"
        >
          Contact Me
          <AiOutlineArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Contact;
