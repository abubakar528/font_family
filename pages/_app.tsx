import "@/styles/globals.css";
import { Pacifico } from "@next/font/google";
import type { AppProps } from "next/app";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={pacifico.className}>
      <Component {...pageProps} />
    </main>
  );
}
