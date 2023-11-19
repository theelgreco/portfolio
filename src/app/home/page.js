"use client";
import styles from "./Home.module.css";
import InfiniteBanner from "../../components/InfiniteBanner/InfiniteBanner";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <>
      <Title text={"STELIO.DEV"} />
      <InfiniteBanner />
      <section></section>
    </>
  );
}
