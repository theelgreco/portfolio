import styles from "./Playground.module.css";
import Title from "../../components/Title/Title";
import PlaygroundCard from "@/components/PlaygroundCard/PlaygroundCard";

export default function Playground() {
  return (
    <>
      <Title text={"PLAYGROUND"} breakpoint={1720} />
      <section>
        <div className={styles.section}>
          <PlaygroundCard
            title={"FUNCTIONS"}
            description={
              "various functions that I've created during my coding. This includes utility functions, algorithms and test solutions"
            }
            href={"/playground/functions"}
          />
          <PlaygroundCard
            title={"DESIGNS"}
            description={
              "Various designs that I've created during my coding. This includes logos, 3D designs and more."
            }
            href={"/playground/designs"}
          />
          <PlaygroundCard
            title={"OTHER"}
            description={
              "Other things that I've created that don't fit into any specific category. These are things that aren't full blown projects but still showcase my skills"
            }
            href={"/playground/other"}
          />
        </div>
      </section>
    </>
  );
}
