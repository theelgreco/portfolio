import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles["menu-border"]}>
      <div className={styles.menu}>
        <button>
          <h3>Home</h3>
          <p>Home page</p>
        </button>
        <button>
          <h3>Projects</h3>
          <p>See my work</p>
        </button>
        <button>
          <h3>Blog</h3>
          <p>See what I'm up to</p>
        </button>
        <button>
          <h3>Playground</h3>
          <p>More of my work</p>
        </button>
      </div>
    </div>
  );
}
