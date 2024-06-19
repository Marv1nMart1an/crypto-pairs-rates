import { ReactNode, useEffect } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { PageContainer } from "./PageContainer";

type TProps = {
  children: ReactNode;
};

export const Layout = ({ children }: TProps) => {
  return (
    <div>
      <Head>
        <title>Crypto rates pairs</title>
        <meta itemProp="name" content="Crypto rates pairs" />
      </Head>
      <Header />
      <PageContainer>{children}</PageContainer>
    </div>
  );
};
