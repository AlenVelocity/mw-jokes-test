import Head from "next/head";
import { Inter } from 'next/font/google';
import { Jokes } from "@/partials/Jokes";

const inter = Inter({
  weight: "400",
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>MW Jokes Test</title>
        <meta name="description" content="Jokes" />
      </Head>
      <main className={`${inter.className} h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]`}>
        <Jokes/>
      </main>
    </>
  );
}
