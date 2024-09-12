import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalsLayout from "@/components/global-layout";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import { NextPage } from "next";

type NextPagewithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPagewithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalsLayout>{getLayout(<Component {...pageProps} />)}</GlobalsLayout>
  );
}
