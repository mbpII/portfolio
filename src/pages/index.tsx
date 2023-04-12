import Head from "next/head";
import Landing from "../components/Landing";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white w-screen min-h-screen">
      <Head>
        <title>Brianmulinge</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Landing />
        <About />
      </main>
    </div>
  );
}
