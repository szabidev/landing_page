import { Box, Container } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import { flex } from "../../shared/variables";
import "../../shared/variables.css";

const Projects = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: "var(--offwhite)" }}>
      <SectionTitle variant="h1" sx={{ color: "var(--green)" }}>
        Projects
      </SectionTitle>
      <Box
        sx={{
          ...flex,
          flexDirection: "column",
          gap: 12,
          paddingTop: "100px",
          paddingBottom: "100px",
          marginRight: "100px",
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Container>
  );
};

export default Projects;
