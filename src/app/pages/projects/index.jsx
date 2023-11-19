import styles from "./Projects.module.css";
import Title from "../../../components/Title/Title";
import ProjectCard from "@/app/components/ProjectCard/ProjectCard";

const example = {
  title: "Project title",
  image:
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=3339&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "This is a short description of the project that is going to be displayed in this card. That is all that is needed for now.",
  technologies: ["Next.js", "React", "Express", "API"],
};

export default function Projects() {
  return (
    <>
      <Title text={"PROJECTS"} />
      <section>
        <ProjectCard project={example} />
      </section>
    </>
  );
}
