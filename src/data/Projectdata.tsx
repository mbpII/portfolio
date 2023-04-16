import portfolio from "../images/portfolio.png";
import notelist from "../images/notelist.png";
import securekey from "../images/securekey.png";
import toonflix from "../images/toonflix.png";

const Projectdata = [
  {
    picture: portfolio,
    title: "My Portfolio",
    description:
      "I crafted this developer portfolio using Next.js and Tailwind CSS to showcase my skills, experience, and projects. Framer Motion enhances interactivity with smooth animations, while Vercel hosts the site.",
    projectlink: "https://www.brianmulinge.com",
    githublink: "https://github.com/Brianmulinge/portfolio",
  },
  {
    picture: notelist,
    title: "Notelist",
    description:
      "Notelist, a user-friendly note-taking app, enables note creation, editing, and deletion using Nextjs, Tailwindcss, Trpc, Prisma, and Railway's MySQL database. Users can access their notes via Google sign-in, with hosting on Railway and Vercel.",
    projectlink: "https://notelist.vercel.app",
    githublink: "https://github.com/Brianmulinge/notelist",
  },
  {
    picture: securekey,
    title: "Securekey",
    description:
      "Securekey, a web app built with Nextjs and Tailwindcss, generates customized passwords for users. Hosted on Vercel, it offers a user-friendly experience.",
    projectlink: "https://securekey.vercel.app",
    githublink: "https://github.com/Brianmulinge/securekey",
  },
  {
    picture: toonflix,
    title: "Toonflix",
    description:
      "Toonflix, a web app for exploring animations and their trailers, is built with Nextjs, Tailwindcss, and the TMDB API. Hosted on Vercel, providing a seamless browsing experience.",
    projectlink: "https://toonflix.vercel.app",
    githublink: "https://github.com/Brianmulinge/toonflix",
  },
];
export default Projectdata;
