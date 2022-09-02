import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Navigation from "../components/app/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navigation />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
