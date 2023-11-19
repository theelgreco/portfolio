import styles from "./Button.module.css";

export default function Button({ text, method }) {
  return (
    <button className={styles.button} onClick={method}>
      {text}
    </button>
  );
}
