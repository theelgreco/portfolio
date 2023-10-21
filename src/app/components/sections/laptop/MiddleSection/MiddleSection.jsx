import styles from "./MiddleSection.module.css";

export default function MiddleSection({ children }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
