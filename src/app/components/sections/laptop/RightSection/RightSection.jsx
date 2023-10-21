import styles from "./RightSection.module.css";
import Time from "@/app/components/Time/Time";
import TechStack from "@/app/components/TechStack/TechStack";
import ThemeBox from "@/app/components/ThemeBox/ThemeBox";

export default function RightSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Time />
        <TechStack />
        <ThemeBox />
      </div>
    </section>
  );
}
