import styles from "./RightSection.module.css";
import Time from "@/app/components/Time/Time";
import Widget from "@/app/components/Widget/Widget";

export default function RightSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Time />
        <Widget width={"90%"} height={"35%"} />
        <Widget width={"90%"} height={"20%"} />
      </div>
    </section>
  );
}
