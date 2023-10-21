"use client";
import styles from "./LeftSection.module.css";
import { useState, useEffect } from "react";
import Logo from "@/app/components/Logo/Logo";
import Menu from "@/app/components/menus/laptop/Menu/Menu";
import Button from "@/app/components/Button/Button";

export default function LeftSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Logo width={"80%"} />
        <Menu />
        <div className={styles.buttons}>
          <Button text={"CONTACT"} />
          <Button text={"CV"} />
        </div>
      </div>
    </section>
  );
}
