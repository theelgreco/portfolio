import styles from "./RightSection.module.css";
import Time from "@/app/components/Time/Time";
import Widget from "@/app/components/Widget/Widget";
import TechIcon from "@/app/components/TechIcon/TechIcon";
import ThemeIcon from "@/app/components/ThemeIcon/ThemeIcon";
import SocialIcon from "@/app/components/SocialIcon/SocialIcon";
import {
  Codepen,
  Github,
  Linkedin,
} from "@/app/components/SocialIcons/SocialIcons";

const tech = [
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

const themes = [
  { theme: "orange-dark", primary: "#2E2E2E" },
  { theme: "purple-light", primary: "#F8F5FD" },
  { theme: "lime-dark", primary: "#C8F054" },
];

const socials = [Github, Linkedin, Codepen];

export default function RightSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Time />
        <Widget
          width={"90%"}
          height={"45%"}
          title={"Tech stack"}
          data={tech}
          style={{ justifyContent: "space-between" }}
          Child={TechIcon}
          limit={12}
        />
        <Widget
          width={"90%"}
          height={"15%"}
          title={"Theme"}
          data={themes}
          style={{ justifyContent: "space-evenly" }}
          Child={ThemeIcon}
          limit={3}
        />
        <Widget
          width={"90%"}
          height={"8%"}
          data={socials}
          style={{ justifyContent: "space-evenly" }}
          Child={SocialIcon}
          limit={3}
        />
      </div>
    </section>
  );
}
