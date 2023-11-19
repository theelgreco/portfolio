import clsx from "clsx";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    const urlPath = window.location.pathname.replace("/", "");
    const page = urlPath
      ? urlPath.replace(urlPath[0], urlPath[0].toUpperCase())
      : "";

    if (page) {
      setSelected(page);
    }
  }, []);

  function handleClick(e) {
    setSelected(e.target.id);
  }

  return (
    <div className={styles["menu-border"]}>
      <div className={styles.menu}>
        <Link
          href={"/home"}
          id="Home"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Home" })}>
          <h3>Home</h3>
          <p>Home page</p>
        </Link>
        <Link
          href={"/projects"}
          id="Projects"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Projects" })}>
          <h3>Projects</h3>
          <p>See my work</p>
        </Link>
        <Link
          href={"/blog"}
          id="Blog"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Blog" })}>
          <h3>Blog</h3>
          <p>See what I'm up to</p>
        </Link>
        <Link
          href={"/playground"}
          id="Playground"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Playground" })}>
          <h3>Playground</h3>
          <p>More of my work</p>
        </Link>
      </div>
    </div>
  );
}
