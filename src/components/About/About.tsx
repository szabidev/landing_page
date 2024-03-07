import { Container } from "@mui/material";
import { AboutBox } from "../../materialStyles/AboutBox";
import { AboutTitle } from "../../materialStyles/AboutTitle";
import { AboutDescription } from "../../materialStyles/AboutDescription";
import { AboutImage } from "../../materialStyles/AboutImage";
import Skills from "../Skills/Skills";
import { useEffect, useState } from "react";

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const aboutContainer = document.getElementById("skills-container");

      if (aboutContainer) {
        const aboutContainerTop = aboutContainer.offsetTop;
        const aboutContainerHeight = aboutContainer.offsetHeight;

        // Calculate the scroll progress based on the About component's position and height
        const progress = Math.max(
          0,
          Math.min(
            (scrollY - aboutContainerTop) /
              (aboutContainerHeight - windowHeight),
            1
          )
        );
        setScrollProgress(progress);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      id="about-container"
      maxWidth={false}
      sx={{
        backgroundColor: "#fff",
        position: "relative",
        height: "100vh",
        padding: 0,
      }}
    >
      <AboutBox>
        <AboutTitle variant="body1">Hi There, I'm Szabi,</AboutTitle>
        <AboutDescription variant="body1" sx={{ marginTop: "0" }}>
          a frontend wizard - fullstack wannabe - with a passion for pixels and
          a knack for turning code into something awesome. I've been navigating
          the web development world for the past two years, and let me tell you,
          it's been one heck of a ride!
        </AboutDescription>
        <AboutDescription variant="body1">
          In my previous life, I spent over a decade perfecting the art of
          mixing and shaking as a bartender. Yep, I traded in my cocktail shaker
          for a keyboard, but don't worry – I can still whip up a mean CSS
          cocktail with a splash of JavaScript flair!
        </AboutDescription>
        <AboutDescription variant="body1">
          When I'm not crafting beautiful websites, I'm busy donning my apron as
          a passionate home cook. I've got a serious love affair with the
          kitchen – experimenting with flavors, conquering new recipes, and
          occasionally setting off the smoke alarm.
        </AboutDescription>
        <AboutDescription variant="body1">
          Curiosity is my middle name, and I thrive on the thrill of learning
          something new every day.
        </AboutDescription>
      </AboutBox>
      <AboutImage component="img" src="./assets/img/about_page_main.jpeg" />
      <Skills scrollProgress={scrollProgress} />
    </Container>
  );
};

export default About;
