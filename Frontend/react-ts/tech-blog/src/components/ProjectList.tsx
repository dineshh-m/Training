import { Project } from "../lib/data";
import ProjectItem from "./ProjectItem";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      <h3 className="text-3xl font-bold mb-4">Projects</h3>
      <ul className="flex flex-col gap-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
