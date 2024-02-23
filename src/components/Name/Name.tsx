import { Link, Typography } from "@mui/material";
import "../../shared/variables.css";
import { StyledNameBox } from "../../materialStyles/StyledNameBox";

const nameStyles = {
  fontFamily: "var(--font-secondary)",
  textTransform: "uppercase",
  color: "var(--green)",
  // ! CHECK FONT WEIGHT FROMATS, NEED THINNER FONT
  //   fontWeight: "300",
};

const Name = () => {
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
