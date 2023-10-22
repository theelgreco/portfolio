import styles from "./ThemeIcon.module.css";

export default function ThemeIcon({ data }) {
  return (
    <div className={styles["theme-square-container"]}>
      <div
        tabIndex={0}
        id={data.theme}
        className={styles["theme-square"] + " " + styles[data.theme]}></div>
    </div>
  );
}
