import { Container, useMediaQuery } from "@mui/material";
import { AboutBox } from "../../materialStyles/AboutBox";
import { AboutTitle } from "../../materialStyles/AboutTitle";
import { AboutDescription } from "../../materialStyles/AboutDescription";
import { AboutImage } from "../../materialStyles/AboutImage";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import Skills from "../Skills/Skills";
import "../../shared/variables.css";
import about from "../../shared/json/about.json";

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <Container
      id="about-container"
      maxWidth={false}
      sx={{
        backgroundColor: "var(--white)",
        position: "relative",
        padding: 0,
      }}
    >
      <SectionTitle variant="h1" sx={{ color: "var(--fontMainColor)" }}>
        {about.aboutSection}
      </SectionTitle>
      <AboutBox>
        <AboutTitle variant="body1">{about.aboutTitle}</AboutTitle>
        <AboutDescription variant="body1" sx={{ marginTop: "0" }}>
          {about.aboutFirstParagraph}
        </AboutDescription>
        <AboutDescription variant="body1">
          {about.aboutSecondParagraph}
        </AboutDescription>
        <AboutDescription variant="body1">
          {about.aboutThirdPragraph}
        </AboutDescription>
        <AboutDescription variant="body1">
          {about.aboutFourthParagraph}
        </AboutDescription>
      </AboutBox>
      {!isSmallScreen && (
        <AboutImage
          id="image-component"
          component="img"
          src={about.aboutImage}
          alt={about.aboutImageAlt}
        />
      )}
      <Skills />
    </Container>
  );
};

export default About;
