import Link from "next/link";
import matt from "../images/mattart.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row py-4 justify-around items-center">
        <div className="flex flex-col space-y-2 md:space-y-4 max-w-lg md:pr-4">
          <h1 className="text-center font-semibold text-4xl pb-4">About Me</h1>
          <p className="pb-4 max-w-4xl font-semibold md:text-lg lg:text-xl ">
            I&apos;m a developer who has taught myself a variety of programming
            languages. My strengths include rapid learning of fresh ideas,
            excelling in solving problems, and a background in constructing web
            applications, APIs, and databases. I&apos;m committed to constantly
            enhancing my abilities and taking on new challenges.
          </p>
          <Link href="https://utfs.io/f/2eb7698e-aca0-45ae-864e-5be27d197f06-fgc05v.pdf">
            <button className="flex items-center justify-center font-bold px-6 py-3 rounded-lg border mt-4 md:text-lg lg:text-2xl">
              My Resume
            </button>
          </Link>
        </div>
        <div className="">
          <Image
            src={matt}
            className="w-full h-full object-cover max-w-3xl lg:max-w-lg rounded"
            alt="my_tech_stack"
            priority
          />
        </div>
      </div>
    </section>
  );
}
