import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../src/layouts";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FETCH TECHNOLOGY</title>
      </Head>
      <MainLayout />
    </>
  );
};

export default Home;
