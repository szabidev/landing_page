// import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "@mui/material";
import { StyledNameBox } from "../../materialStyles/StyledNameBox";
import { StyledName } from "../../materialStyles/StyledName";
import "../../shared/variables.css";
import "./Name.css";

const Name = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down(420));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up(1920));

  return (
    <StyledNameBox>
      <Link href="#home" sx={{ textDecoration: "none", cursor: "pointer" }}>
        <StyledName variant="h1">
          <span className="name-s">S</span>
          <span className="name-z">z</span>
          <span className="name-a">a</span>
          <span className="name-b">b</span>
          <span className="name-i">i</span>
        </StyledName>
        <StyledName variant="h1">
          <span className="name-v">V</span>
          <span className="name-o">o</span>
          <span className="name-j">j</span>
          <span className="name-t">t</span>
          <span className="name-e">e</span>
          <span className="name-k">k</span>
        </StyledName>
      </Link>
    </StyledNameBox>
  );
};

export default Name;
