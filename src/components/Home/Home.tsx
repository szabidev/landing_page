import {
  Box,
  Container,
  //   useMediaQuery,
  //   useTheme,
} from "@mui/material";

import Title from "../Title/Title";
import { StyledHomeDescription } from "../../materialStyles/StyledHomeDescription";

const Home = () => {
  //   const theme = useTheme();
  //   const isLargeScreen = useMediaQuery(theme.breakpoints.up(1920));

  const imageBoxStyle = {
    position: "absolute",
    bottom: 0,
    left: 165,
  };

  return (
    <Container maxWidth="xl" sx={{ height: "100vh", position: "relative" }}>
      <Title />
      <Box>
        <StyledHomeDescription variant="subtitle1">
          Passionate and detail-oriented web developer with a curious mindset, I
          thrive on problem-solving and transforming ideas into seamless user
          experiences. Committed to staying at the forefront of web development
          trends, I bring creativity and precision to every project.
        </StyledHomeDescription>
      </Box>
      <Box
        component="img"
        src="./assets/img/landing_page_main.png"
        height={660}
        sx={imageBoxStyle}
      />
    </Container>
  );
};

export default Home;
