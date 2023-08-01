import Image from "next/image";
import Link from "next/link";
import email from "../images/email.svg";

export default function Contact() {
  return (
    <section className="p-4">
      <h1 className="font-bold text-4xl lg:text-5xl text-center">
        Get in touch
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4">
        <div className="flex flex-col max-w-xl md:pr-4 ">
          <h1 className="text-base font-semibold pt-4 md:text-lg lg:text-xl">
            Drop me a Message I&apos;d like to hear from you!
          </h1>
          <div className="">
            <Link href="mailto:mattparksII@outlook.com">
              <button className="flex items-center justify-center font-bold px-6 py-3 rounded-lg border mt-4 md:text-lg lg:text-2xl">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
