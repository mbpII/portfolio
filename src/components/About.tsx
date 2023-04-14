import Image from "next/image";
import me from "../images/me.jpg";

export default function About() {
  return (
    <section className="md:px-8 flex p-4 flex-col lg:justify-center items-center md:grid md:grid-cols-2 md:gap-8 lg:mt-10 ">
      <div className="w-full md:w-auto lg:w-auto flex justify-center flex-col max-w-xl">
        <h1 className="text-center font-semibold text-4xl">About Me</h1>
        <p className="pb-4">
          As a self-taught developer, I have gained a strong understanding of
          various programming languages and technologies through hands-on
          projects and online resources. My passion for problem-solving and
          attention to detail allows me to quickly understand and implement new
          concepts. I have experience building responsive web applications as
          well as working with APIs and databases. I am always eager to take on
          new challenges and am dedicated to constantly improving my skills.
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
      
    </section>
  );
}
