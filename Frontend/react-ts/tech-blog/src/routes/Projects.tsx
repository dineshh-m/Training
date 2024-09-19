import { Project, projects } from "../lib/data";
import SectionContainer from "../components/SectionContainer";
import ProjectList from "../components/ProjectList";

type ProjectProps = {
  projects: Project[];
};
export default function Projects() {
  return (
    <div>
      <SectionContainer>
        <ProjectList projects={projects} />
      </SectionContainer>
    </div>
  );
}
