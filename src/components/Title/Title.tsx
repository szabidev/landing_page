import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { StyledTitleBox } from "../../materialStyles/StyledTitleBox";
import "../../shared/variables.css";

const Title = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1920));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(431));

  const titleStyles = {
    fontFamily: "var(--font-secondary)",
    textTransform: "uppercase",
    color: "var(--green)",
    fontWeight: "300",
    fontSize: isLargeScreen ? "160px" : isSmallScreen ? "48px" : "120px",
  };

  return (
    <StyledTitleBox>
      <Typography variant="h1" sx={titleStyles}>
        <span>F</span>
        <span>r</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>d</span>
      </Typography>
      <Typography variant="h1" sx={titleStyles}>
        <span>D</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </Typography>
    </StyledTitleBox>
  );
};

export default Title;
