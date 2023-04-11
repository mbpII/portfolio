import Image from "next/image";
import Link from "next/link";
import me from "../images/me.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Landing() {
  return (
    <section className="p-4">
      <div className="flex space-x-6 pb-4 justify-center lg:justify-start">
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
      <div className="flex flex-col lg:flex-row">
        <div className="">
          <Image src={me} className="rounded-lg" alt="my_picture" priority  />
        </div>
        <div className="">
            <div className="">
              <h1 className="text-6xl font-semibold whitespace-nowrap">Brian Mulinge</h1>
              <h2 className="">Full Stack Developer</h2>
              <p className="">
                I&apos;m a full stack developer with a passion for building web
                applications
              </p>
          </div>
          <div className="flex space-x-4 p-4 justify-center lg:justify-start">
            <Link href="">
              <button className="bg-white text-black font-bold py-2 px-4 rounded whitespace-nowrap">
                My Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
