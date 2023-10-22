import styles from "./RightSection.module.css";
import Time from "@/app/components/Time/Time";
import Widget from "@/app/components/Widget/Widget";
import TechIcon from "@/app/components/TechIcon/TechIcon";
import ThemeIcon from "@/app/components/ThemeIcon/ThemeIcon";

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

const Themes = [
  { theme: "orange-dark", primary: "#2E2E2E" },
  { theme: "purple-light", primary: "#F8F5FD" },
  { theme: "lime-dark", primary: "#C8F054" },
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
        <Widget
          width={"90%"}
          height={"17%"}
          title={"Theme"}
          data={Themes}
          Child={ThemeIcon}
          limit={3}
        />
      </div>
    </section>
  );
}
