import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Hero from "../components/root/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MUSPROV PPI Sulteng</title>
        <meta
          name="description"
          content="Musyawarah Besar Purna Paskibraka Indonesia Sulawesi Tengah"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
