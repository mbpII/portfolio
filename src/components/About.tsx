import Image from "next/image";
import me from "../images/me.jpg";

export default function About() {
  return (
    <section className="">
      <h1 className="text-center font-semibold text-4xl py-8">About Me</h1>
      <div className="container mx-auto md:px-8 flex p-4 flex-col lg:justify-center items-center md:grid md:grid-cols-2 md:gap-8 lg:mt-10 ">
        <div className="w-full md:w-auto lg:w-auto flex justify-center flex-col max-w-xl">
          <p className="pb-4">
            As a self-taught developer proficient in multiple languages, I excel
            in problem-solving, quickly grasp new concepts, and have experience
            building web applications, APIs, and databases. I am dedicated to
            continuous skill improvement and embracing new challenges.
          </p>
        </div>
        <div className=" flex flex-col space-y-4 max-w-xl">
          <Image
            src={me}
            className="w-full h-full object-cover max-w-xl lg:max-w-lg rounded"
            alt="my_picture"
            priority
          />
        </div>
      </div>
    </section>
  );
}
