import { useMediaQuery, useTheme } from "@mui/material";
import { Link, Typography } from "@mui/material";
import { StyledNameBox } from "../../materialStyles/StyledNameBox";
import "../../shared/variables.css";

const Name = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(420));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1920));
  const nameStyles = {
    fontFamily: "var(--font-secondary)",
    textTransform: "uppercase",
    color: "var(--green)",
    fontWeight: "300",
    fontSize: isSmallScreen ? "56px" : isLargeScreen ? "120px" : "96px",
  };

  return (
    <StyledNameBox>
      <Link href="#home" sx={{ textDecoration: "none", cursor: "pointer" }}>
        <Typography variant="h1" sx={nameStyles}>
          <span>S</span>
          <span>z</span>
          <span>a</span>
          <span>b</span>
          <span>i</span>
        </Typography>
        <Typography variant="h1" sx={nameStyles}>
          <span>V</span>
          <span>o</span>
          <span>j</span>
          <span>t</span>
          <span>e</span>
          <span>k</span>
        </Typography>
      </Link>
    </StyledNameBox>
  );
};

export default Name;
