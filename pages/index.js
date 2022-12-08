import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MyApp from "./_app";
import HeroSection from "./components/Hero/hero";
import NewIn from "./components/Hero/newHome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Furn Store with React</title>
        <meta
          name="description"
          content="Furniture store for styling your home"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroSection />
      <NewIn />
    </div>
  );
}
