import { Header } from "@/components/Header";
import { Body } from "@/components/Body/Body";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PayCoPilot</title>
        <meta name="description" content="your copilot for payroll" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
