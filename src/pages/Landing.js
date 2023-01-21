

export default function Landing() {
  return (
    <section className="flex sm:flex-row md:flex-col lg:flex-row flex-col lg:items-center justify-between w-full text-start h-screen bg-black">
    <div className="p-12 lg:h-1/2 lg:w-1/2 items-center">
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
        
          <button
            id="Contact"
            className="p-4 bg-gray-800/60 border border-gray-600 font-semibold text-lg rounded-lg my-6"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
    <div className="p-4 border border-gray-600 bg-gray-800 rounded-lg mx-12 py-6 lg:w-1/2 h-full lg:h-1/2 mb-4">
      <h1>In Development...</h1>
    </div>
  </section>
  )
}