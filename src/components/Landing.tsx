import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pic from "../images/me.jpg";
import styles from "../styles/styles.module.css";

export default function Landing() {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col items-center md:items-start">
        <div className="space-x-6 p-4 flex items-center">
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
      </div>
      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="flex items-center justify-between flex-col md:flex-row space-y-2">
          <div className="">
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
          <div className="">
            <Image
              className="rounded-lg h-30 w-30"
              alt="profile picture"
              src={pic}
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
