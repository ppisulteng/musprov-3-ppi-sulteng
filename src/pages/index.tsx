import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Hero from "../components/root/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Musyawarah Provinsi III - PPI Sulteng</title>
        <meta
          name="description"
          content="Musyawarah Provinsi Purna Paskibraka Provinsi Sulawesi Tengah \n Kota Palu - 30 Oktober 2021 \n BERDAYA SAING - KREATIF - MANDIRI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
