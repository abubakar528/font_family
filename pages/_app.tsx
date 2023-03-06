import "@/styles/globals.css";
import { Pacifico } from "@next/font/google";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className={pacifico.className}>
      <Component {...pageProps} />
    </main>
  );
}
