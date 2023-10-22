import styles from "./ThemeIcon.module.css";

export default function ThemeIcon({ data }) {
  console.log(data);
  return (
    <div className={styles["theme-square-container"]}>
      <div
        tabIndex={0}
        id={data.theme}
        className={
          styles["theme-square"] +
          " " +
          styles["selected-theme"] +
          " " +
          styles[data.theme]
        }></div>
    </div>
  );
}
