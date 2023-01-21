import { Inter } from '@next/font/google'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className=''>
    <Landing />
    <About />
    <Projects/>
    <Contact />
  </div>
  )
}
