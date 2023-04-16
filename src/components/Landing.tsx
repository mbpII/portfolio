import Image from "next/image";
import Link from "next/link";
import me from "../images/me.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Landing() {
  return (
    <section className="p-4">
      <div className="flex space-x-6 md:pl-6 justify-center lg:justify-start">
        <Link href="https://github.com/Brianmulinge">
          <FaGithub className="text-4xl text-white" />
        </Link>
        <Link href="https://linkedin.com/in/brianmulinge">
          <FaLinkedin className="text-4xl text-white" />
        </Link>
        <Link href="https://twitter.com/brianmulinge_">
          <FaTwitter className="text-4xl text-white" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row py-4 justify-around items-center">
        <div className="">
          <Image
            src={me}
            className="w-full h-full object-cover max-w-xl lg:max-w-lg rounded"
            alt="my_picture"
            priority
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-4 max-w-xl md:pl-4">
          <h1 className="font-semibold text-xl pt-2">Hi There I&apos;m</h1>
          <h1 className="text-4xl font-semibold whitespace-nowrap md:text-5xl lg:text-6xl">
            Brian Mulinge
          </h1>
          <p className="text-xl font-semibold">
            I have a passion for problem-solving and implementing new concepts
            using code.
          </p>
          <div className="">
          <button className="bg-white text-black font-bold py-2 px-4 rounded whitespace-nowrap">
               Projects
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
