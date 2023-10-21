import styles from "./ThemeBox.module.css";

export default function ThemeBox() {
  return (
    <div className={styles.border}>
      <div className={styles.stack}></div>
    </div>
  );
}
