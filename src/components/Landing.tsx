import Image from "next/image";
import Link from "next/link";
import me from "../images/me.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Landing() {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="flex space-x-6 lg:pl-12 pb-4 justify-center lg:justify-start">
          <Link href="">
            <FaGithub className="text-4xl text-white" />
          </Link>
          <Link href="">
            <FaLinkedin className="text-4xl text-white" />
          </Link>
          <Link href="">
            <FaTwitter className="text-4xl text-white" />
          </Link>
        </div>
        <div className="flex flex-col lg:justify-center items-center md:grid md:grid-cols-2 md:gap-8 lg:mt-10">
          <div className="w-full md:w-auto lg:w-auto flex justify-center ">
            <Image src={me} className="w-full h-full object-cover max-w-xl lg:max-w-lg rounded" alt="my_picture" priority />
          </div>
          <div className="flex flex-col space-y-4 max-w-xl ">
            <div className="pt-4 space-y-4">
              <h1 className="font-semibold text-xl">Hi There I&apos;m</h1>{" "}
              <h1 className="text-4xl font-semibold whitespace-nowrap md:text-5xl lg:text-6xl">
                Brian Mulinge
              </h1>
              <p className="text-xl font-semibold">
                I have a passion for problem-solving and implementing new concepts
                using code.
              </p>
            </div>
            <div className="flex">
              <Link href="">
                <button className="bg-white text-black font-bold py-2 px-4 rounded whitespace-nowrap">
                  My Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
