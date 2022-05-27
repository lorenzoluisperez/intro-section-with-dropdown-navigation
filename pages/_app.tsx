import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Frontend Mentor | Intro section with dropdown navigation"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
