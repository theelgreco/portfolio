import styles from "./RightSection.module.css";
import Time from "@/app/components/Time/Time";
import Widget from "@/app/components/Widget/Widget";
import TechIcon from "@/app/components/TechIcon/TechIcon";

const Tech = [
  "Javascript",
  "React",
  "MongoDB",
  "Next.js",
  "Express",
  "Node.js",
  "HTML5",
  "CSS3",
  "PostgreSQL",
  "Socket.io",
  "Jest",
  "Phaser",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Blender",
];

export default function RightSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Time />
        <Widget
          width={"90%"}
          height={"35%"}
          title={"Tech stack"}
          data={Tech}
          Child={TechIcon}
          limit={9}
        />
        <Widget width={"90%"} height={"20%"} limit={3} />
      </div>
    </section>
  );
}
