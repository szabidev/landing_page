import { Container } from "@mui/material";
import { AboutBox } from "../../materialStyles/AboutBox";
import { AboutTitle } from "../../materialStyles/AboutTitle";
import { AboutDescription } from "../../materialStyles/AboutDescription";
import { AboutImage } from "../../materialStyles/AboutImage";

const About = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#fff",
        position: "relative",
        minHeight: "100vh",
        minWidth: "100%",
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
    </Container>
  );
};

export default About;
