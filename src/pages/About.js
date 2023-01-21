export default function About() {
  return (
    <section className="flex flex-col w-full bg-black p-12">
     
        <div className="">
          <h1 className="font-semibold pb-4 text-lg">
            As a self-taught developer, I have gained a strong understanding of
            various programming languages and technologies through hands-on
            projects and online resources. My passion for problem-solving and
            attention to detail allows me to quickly understand and implement
            new concepts. I have experience building responsive web applications
            as well as working with APIs and databases. I am always eager to
            take on new challenges and am dedicated to constantly improving my
            skills.
          </h1>
        </div>
        <div className="flex flex-row justify-center font-semibold text-lg lg:font-bold lg:text-2xl w-full pt-4 pb-6 space-x-4">
          <a
            target="_blank"
            href="https://github.com/Brianmulinge"
            className="flex"
          >
            Github
          </a>
          <a target="_blank" href="" className="flex">
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://twitter.com/brianmulinge_"
            className="flex"
          >
            Twitter
          </a>
        </div>
        <div className="pt-2">
          <div className="text-lg font-semibold flex space-x-4 md:justify-center lg:justify-center overflow-auto whitespace-nowrap scrollbar-hide">
            <h1 className="rounded-lg border-gray-700 border p-4">React</h1>
          </div>
        </div>
    </section>
  )
}