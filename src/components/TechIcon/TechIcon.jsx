import styles from "./TechIcon.module.css";

export default function TechIcon({ data }) {
  return (
    <div className={styles.icon}>
      <img src={`/tech_icons/${data}.png`} style={{ height: "50%" }} />
      <p style={{ fontSize: "10px" }}>{data}</p>
    </div>
  );
}
