import "../styles/globals.css";
import { AppProps } from "next/app";
import { Heebo } from '@next/font/google';

const heebo = Heebo({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['200', '300','400', '500','600','700']
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={heebo.className}>
       <Component {...pageProps} />
    </div>
  );
}
