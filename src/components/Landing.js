import Image from "next/image";
import pic from "../images/me.jpg";

export default function Landing() {
  return (
    <section className="flex flex-col items-center pt-10 pb-6 h-screen w-full sm:h-auto sm:pt-16 sm:flex-row">
      <div className="sm:w-1/2 sm:text-left p-6 pl-6 sm:pl-10">
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
      <div className="sm:w-1/2 flex flex-col items-center justify-center p-6 ">
        <Image
          className="rounded-full h-64 sm:h-auto w-64 sm:w-auto object-cover"
          priority
          alt="profile picture"
          src={pic}
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
