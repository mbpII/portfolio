import Head from "next/head";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brianmulinge</title>
        <meta name="description" content="Brian Mulinge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-sans text-white bg-black">
        <Navbar />
        <Landing />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  );
}
