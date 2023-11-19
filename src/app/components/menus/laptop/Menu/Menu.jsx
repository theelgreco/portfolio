import clsx from "clsx";
import { useState } from "react";
import styles from "./Menu.module.css";
import Home from "@/app/components/pages/Home/Home";
import Projects from "@/app/components/pages/Projects/Projects";
import Blog from "@/app/components/pages/Blog/Blog";
import Playground from "@/app/components/pages/Playground/Playground";

const pageLookup = {
  Home,
  Projects,
  Blog,
  Playground,
};

export default function Menu({ setCurrentPage }) {
  const [selected, setSelected] = useState("Home");

  function handleClick(e) {
    setCurrentPage(pageLookup[e.target.id]);
    setSelected(e.target.id);
  }

  return (
    <div className={styles["menu-border"]}>
      <div className={styles.menu}>
        <button
          id="Home"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Home" })}>
          <h3>Home</h3>
          <p>Home page</p>
        </button>
        <button
          id="Projects"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Projects" })}>
          <h3>Projects</h3>
          <p>See my work</p>
        </button>
        <button
          id="Blog"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Blog" })}>
          <h3>Blog</h3>
          <p>See what I'm up to</p>
        </button>
        <button
          id="Playground"
          onClick={handleClick}
          className={clsx({ [styles.selected]: selected === "Playground" })}>
          <h3>Playground</h3>
          <p>More of my work</p>
        </button>
      </div>
    </div>
  );
}
