import { Box, Container } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import { flex } from "../../shared/variables";
import "../../shared/variables.css";
import { Fade } from "react-awesome-reveal";

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
        {/* // ! CHECK WHY ANIMATION DOES NOT FADE IN SLOWLY - reat-awesome-reveal */}
        <Fade cascade>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Fade>
      </Box>
    </Container>
  );
};

export default Projects;
