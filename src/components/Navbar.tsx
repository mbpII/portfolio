import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  return (
    <section className="">
      <div className=" flex space-x-8 justify-center md:justify-start items-center lg:justify-start w-full h-16 px-6 pt-16">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Brianmulinge"
        >
          <AiFillGithub className="h-8 w-8" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/brianmulinge"
        >
          <FaLinkedinIn className="h-8 w-8" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/brianmulinge_"
        >
          <AiOutlineTwitter className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}

export default Navbar;
