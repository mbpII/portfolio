import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Landing() {
  return (
    <section className="flex sm:flex-row md:flex-col lg:flex-row flex-col lg:items-center justify-between w-full text-start h-screen bg-black">
      <div className="p-6 lg:h-1/2 lg:w-1/2 items-center">
        <h1 className="text-5xl font-semibold pb-4">Brian Mulinge.</h1>
        <h1 className="text-3xl font-semibold pb-4">
          Self Taught Software Developer
        </h1>
        <div className="">
          <h1 className="font-semibold text-lg">
            I have a passion of problem-solving and implementing new concepts
            using code.
          </h1>
          <div className="flex items-center space-x-2">
            <Image
              className="rounded-full h-16 w-16 mr-2"
              alt="Profile Picture"
              src="https://pbs.twimg.com/profile_images/1611048159421075456/_hJhdfJa_400x400.jpg"
              width={100}
              height={100}
            ></Image>
            <button
              id="Contact"
              className="p-4 bg-gradient-to-r from-gray-800 to-black border border-gray-600 font-semibold text-lg rounded-lg my-6"
            >
              Contact Me
            </button>
          </div>
          <div className="flex space-x-6 items-center justify-center font-semibold text-lg">
            <FaGithub className="h-6 w-6" />
            <FaTwitter className="h-6 w-6" />
            <FaLinkedinIn className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="p-4 border border-gray-600 bg-gradient-to-r from-gray-800 to-black rounded-lg mx-6 py-6 lg:w-1/2 h-full lg:h-1/2 mb-4">
        <h1>In Development...</h1>
      </div>
    </section>
  );
}
