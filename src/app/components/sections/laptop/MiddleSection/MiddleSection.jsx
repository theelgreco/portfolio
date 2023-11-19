import styles from "./MiddleSection.module.css";

export default function MiddleSection({ currentPage }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.content}>{currentPage}</div>
      </div>
    </section>
  );
}
