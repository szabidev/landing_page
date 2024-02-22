import { Link, useMediaQuery } from "@mui/material";

import { StyledHeaderContainer } from "../../materialStyles/StyledHeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import "../../shared/variables.css";

const Header = () => {
  const isTabletScreen = useMediaQuery(
    "(min-width:421px) and (max-width:800px)"
  );

  const navigationLinkStyle = {
    textDecoration: "none",
    color: "var(--fontMainColor)",
    zIndex: "100",
    textTransform: "uppercase",
    // ? or fontWeight: 800 - or just on small/large screen
    fontWeight: "600",
    margin: isTabletScreen ? "0 30px 0 20px" : 0,
  };

  return (
    <StyledHeaderContainer maxWidth="xl">
      <StyledAppBar position="sticky" sx={{ boxShadow: "none" }}>
        <Link sx={navigationLinkStyle} href="#">
          About
        </Link>
        <Link sx={navigationLinkStyle}>Work</Link>
        <Link sx={navigationLinkStyle}>Contact</Link>
      </StyledAppBar>
    </StyledHeaderContainer>
  );
};

export default Header;
