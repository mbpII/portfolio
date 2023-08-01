import Image from "next/image";
import Link from "next/link";
import matt from "../images/matt.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Landing() {
  return (
    <section className="p-4">
      <div className="flex space-x-6 md:pl-6 justify-center lg:justify-start">
        <Link target="_blank" rel="noreferrer" href="https://github.com/mbpII/">
          <FaGithub className="text-4xl text-white" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/mbpII"
        >
          <FaLinkedin className="text-4xl text-white" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/mbp_ii"
        >
          <FaTwitter className="text-4xl text-white" />
        </Link>
      </div>
      <div className="flex flex-col py-4 justify-around items-center">
        <div className=""></div>
        <div className="flex flex-col space-y-2 md:space-y-4 max-w-xl md:pl-4">
          <h1 className="text-center pb-4 font-extrabold tracking-tight text-7xl lg:text-8xl aos-init aos-animate">
            Matt Parks
          </h1>
          <p className="text-center font-semibold text-4xl aos-init aos-animate">
            Solving challenges with code.
          </p>
        </div>
      </div>
    </section>
  );
}
