import Image from "next/image";
import Link from "next/link";
import email from "../images/email.svg";

export default function Contact() {
  return (
    <section className="p-4">
      <h1 className="font-bold text-4xl lg:text-5xl text-center"></h1>
      <div className="flex justify-center">
        <Link href="https://utfs.io/f/2eb7698e-aca0-45ae-864e-5be27d197f06-fgc05v.pdf">
          <button className="flex items-center justify-center font-bold px-6 py-3 rounded-lg border mt-4 md:text-lg lg:text-2xl">
            Contact me
          </button>
        </Link>
      </div>
    </section>
  );
}
