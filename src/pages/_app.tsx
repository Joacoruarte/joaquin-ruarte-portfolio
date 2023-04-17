import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Joaquin Ruarte Web Developer Portfolio" />
          <meta name="keywords" content="Joaquin Ruarte, Web Developer, Portfolio , frontend, backend, front, back, react , React, Next, Nextjs, fullstack, Fullstack developer," />
          <meta name="author" content="Joaquin Ruarte" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <link rel="icon"  href="/logo.png" />
          <title>Joaquin Ruarte</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
