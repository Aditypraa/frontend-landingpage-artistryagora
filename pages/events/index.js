import CardEvent from "@/components/CardEvent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getData } from "@/utils/fetchData";
import Head from "next/head";
import React from "react";

export default function Events({ data }) {
  return (
    <>
      <Head>
        <title>Artistry Agora | Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-navy">
        <Navbar />
      </section>

      <CardEvent data={data} title="Daftar Pameran" subTitle="Kesenian" />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const req = await getData("api/v1/events");

  const res = req.data;

  return {
    props: { data: res },
  };
}
