import styles from "./Title.module.css";

export default function Title({ text }) {
  return (
    <div className={styles.title}>
      <h1>Welcome to</h1>
      <h2>{text}</h2>
    </div>
  );
}
