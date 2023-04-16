import Link from "next/link";

export default function Contact() {
  return (
    <section className="p-4 flex flex-col text-center">
      <h1 className="font-bold text-4xl">Get in touch</h1>
      <h1 className="text-base font-semibold pt-4">
        Drop me a Message I&apos;d like to hear from you!
      </h1>
      <button className="flex items-center justify-center font-bold p-4 rounded-lg border mt-4">
        <Link href="mailto:brianjaden45@gmail.com">Contact Me</Link>
      </button>
    </section>
  );
}
