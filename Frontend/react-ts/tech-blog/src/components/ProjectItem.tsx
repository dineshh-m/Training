import { Project } from "../lib/data";

type ProjectItemProps = {
  project: Project;
};
export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="hover:bg-zinc-100 px-2 py-4 rounded">
      <h4 className="text-xl font-bold">{project.title}</h4>
      <p>{project.description}</p>
    </div>
  );
}
