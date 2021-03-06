import type { NextPage } from "next";
import Head from "next/head";

import React from "react";
import Hero from "../components/root/Hero";
import { Center, Image } from "@chakra-ui/react";

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
      <Center>
        <Image
          src="/IMG-20211025-WA0003.jpg"
          alt="Poster Musyawarah Provinsi PPI Sulawesi Tengah"
        />
      </Center>
    </div>
  );
};

export default Home;
