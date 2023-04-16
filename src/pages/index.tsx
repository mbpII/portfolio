import Head from "next/head";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import About from "../components/About";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="bg-black text-white ">
      <Head>
        <title>Brianmulinge</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Landing />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
