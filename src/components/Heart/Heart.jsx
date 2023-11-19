import styles from "./Heart.module.css";

export default function Heart() {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>LIKE THIS SITE?</h3>
      <svg className={styles.heart} viewBox="0 0 101.22 92.7">
        <polygon points="50.61 10.75 58.53 0.5 83.31 0.5 100.61 27.89 50.61 91.89 0.61 27.89 17.91 0.5 42.69 0.5 50.61 10.75" />
      </svg>
    </div>
  );
}
