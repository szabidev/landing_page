import { Container } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import "../../shared/variables.css";
import { ProjectBox } from "../../materialStyles/ProjectBox";

const Projects = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: "var(--offwhite)" }}>
      <SectionTitle variant="h1" sx={{ color: "var(--green)" }}>
        Projects
      </SectionTitle>
      <ProjectBox>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectBox>
    </Container>
  );
};

export default Projects;
