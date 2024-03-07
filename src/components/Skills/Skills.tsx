import { Box, Container, Divider, Typography } from "@mui/material";

const Skills = ({ scrollProgress }: any) => {
  // ! Add tooltip component to typography, describing experience with the skill
  return (
    <Container
      id="skills-container"
      maxWidth={false}
      sx={{
        width: "700px",
        margin: 0,
        marginLeft: "100px",
        opacity: scrollProgress,
        transition: "opacity .5s ease-in",
      }}
    >
      <Box>
        <Typography>Core Web Technologies</Typography>
        <Divider />
        <Typography>Libraries and Frameworks</Typography>
        <Divider />
        <Typography>Design and UI/UX Tools</Typography>
        <Divider />
        <Typography>Testing</Typography>
        <Divider />
        <Typography>Backend and Database</Typography>
        <Divider />
        <Typography>API Development</Typography>
        <Divider />
        <Typography>Version Control</Typography>
        <Divider />
        <Typography>Build and Package Management</Typography>
        <Divider />
        <Typography>Web Optimization and Performance</Typography>
      </Box>
      <Divider />
      <Box></Box>
    </Container>
  );
};

export default Skills;
