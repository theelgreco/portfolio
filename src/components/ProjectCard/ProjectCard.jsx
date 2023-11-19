import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div
            className={styles.picture}
            style={{ backgroundImage: `url(${project.image})` }}></div>
          <div className={styles.words}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
          <div className={styles["tech-container"]}>
            {project.technologies.map((tech, index) => {
              return <div key={`${tech}_${index}`}>{tech}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
