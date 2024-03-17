import { Box, Container } from "@mui/material";
import Title from "../Title/Title";
import { HomeDescription } from "../../materialStyles/HomeDescription";
import { HomeImage } from "../../materialStyles/HomeImage";
import "../../shared/variables.css";
import home from "../../shared/json/home.json";

const Home = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        position: "relative",
        padding: 0,
        backgroundColor: "var(--offwhite)",
        width: "100%",
      }}
    >
      <Title />
      <Box>
        <HomeDescription variant="subtitle1">
          {home.homePageDescription}
        </HomeDescription>
      </Box>
      <HomeImage
        component="img"
        src={home.homePageImage}
        alt={home.homePageImageAlt}
      />
    </Container>
  );
};

export default Home;
