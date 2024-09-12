import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalsLayout from "@/components/global-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalsLayout>
      <Component {...pageProps} />
    </GlobalsLayout>
  );
}
