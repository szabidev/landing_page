import {
  Box,
  Container,
  //   useMediaQuery,
  //   useTheme,
} from "@mui/material";
import Title from "../Title/Title";
import { HomeDescription } from "../../materialStyles/HomeDescription";
import { HomeImage } from "../../materialStyles/HomeImage";
import "../../shared/variables.css";

const Home = () => {
  //   const theme = useTheme();
  //   const isLargeScreen = useMediaQuery(theme.breakpoints.up(1920));

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        position: "relative",
        padding: 0,
        backgroundColor: "var(--offwhite)",
        // maxWidth: "100vw",
        // width: "100vw",
      }}
    >
      <Title />
      <Box>
        <HomeDescription variant="subtitle1">
          Passionate and detail-oriented web developer with a curious mindset, I
          thrive on problem-solving and transforming ideas into seamless user
          experiences. Committed to staying at the forefront of web development
          trends, I bring creativity and precision to every project.
        </HomeDescription>
      </Box>
      <HomeImage component="img" src="./assets/img/landing_page_main.png" />
    </Container>
  );
};

export default Home;
