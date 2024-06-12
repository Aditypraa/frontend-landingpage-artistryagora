import Brand from "@/components/Brand";
import CardEvent from "@/components/CardEvent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Statistics from "@/components/Statistics";
import Stories from "@/components/Stories";
import { getData } from "@/utils/fetchData";
import Head from "next/head";

export default function index({ data }) {
  // console.log("data");
  // console.log(data);
  return (
    <>
      <Head>
        <title>Artistry Agora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Brand />
      <CardEvent data={data} title="Daftar Pameran" subTitle="Kesenian" />
      <Stories />
      <Statistics />
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
