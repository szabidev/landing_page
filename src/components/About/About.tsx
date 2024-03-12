import { Container } from "@mui/material";
import { AboutBox } from "../../materialStyles/AboutBox";
import { AboutTitle } from "../../materialStyles/AboutTitle";
import { AboutDescription } from "../../materialStyles/AboutDescription";
import { AboutImage } from "../../materialStyles/AboutImage";
import Skills from "../Skills/Skills";
import { useMediaQuery } from "@mui/material";
import { SectionTitle } from "../../materialStyles/SectionTitle";
import "../../shared/variables.css";
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
        About
      </SectionTitle>
      <AboutBox>
        <AboutTitle variant="body1">Hi There, I'm Szabi,</AboutTitle>
        <AboutDescription variant="body1" sx={{ marginTop: "0" }}>
          a frontend developer - fullstack wannabe - with a passion for pixels
          and a knack for turning code into something awesome. I've been
          navigating the web development world for the past two years, and let
          me tell you, it's been one heck of a ride!
        </AboutDescription>
        <AboutDescription variant="body1">
          In my previous life, I spent over a decade perfecting the art of
          mixing and shaking as a bartender. Yep, I traded in my cocktail shaker
          for a keyboard, but don't worry – I can still whip up a mean CSS
          cocktail with a splash of JavaScript flair!
        </AboutDescription>
        <AboutDescription variant="body1">
          When I'm not creating stunning websites, you'll find me embracing my
          role as a devoted home cook. My culinary journey involves constant
          flavor experimentation, mastering new recipes, and, on occasion,
          triggering the smoke alarm.
        </AboutDescription>
        <AboutDescription variant="body1">
          Curiosity is my middle name, and I thrive on the thrill of learning
          something new every day.
        </AboutDescription>
      </AboutBox>
      {!isSmallScreen && (
        <AboutImage component="img" src="./assets/img/about_page_main.jpeg" />
      )}
      <Skills />
    </Container>
  );
};

export default About;
