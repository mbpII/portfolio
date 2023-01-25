export default function Contact() {
  return (
    <section id="Contact" className="flex flex-wrap w-full h-full bg-black p-8">
      <div className="">
        <h1 className="text-2xl font-bold  pt-4 pb-2">Get in touch</h1>
      </div>
      <div className="flex flex-col rounded-lg border h-full w-full p-4 bg-gradient-to-r from-gray-800 to-black">
        <h1 className="text-2xl font-bold px-6 pt-4 pb-2">Drop me a Message</h1>
        <h1 className="text-lg font-bold px-6 pb-2">
          I&apos;d like to hear from you!
        </h1>
        <div className="">
          <label className="text-sm px-6 font-semibold pt-6">Email</label>
          <h1 className="text-lg font-bold px-6 pb-2 flex my-2">
            brianmulinge45@gmail.com
          </h1>
        </div>
        <div className="">
          <label className="text-sm px-6 font-semibold pt-6">Address</label>
          <h1 className="text-lg font-bold px-6 pb-2 flex my-2">
            Irving, Texas
          </h1>
        </div>
        <a href="mailto:brianmulinge45@gmail.com">
          <button className="flex animate-pulse justify-center items-center p-4 h-full w-full rounded-3xl border-none bg-gray-800 font-semibold text-lg">
            Send me an email
          </button>
        </a>
      </div>
    </section>
  );
}
