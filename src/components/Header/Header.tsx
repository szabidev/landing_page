import { Link, useMediaQuery } from "@mui/material";

import { HeaderContainer } from "../../materialStyles/HeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import "../../shared/variables.css";

const Header = () => {
  const isTabletScreen = useMediaQuery(
    "(min-width:421px) and (max-width:800px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:1920px)");

  const navigationLinkStyle = {
    textDecoration: "none",
    color: "var(--fontMainColor)",
    letterSpacing: "1px",
    zIndex: "100",
    textTransform: "uppercase",
    // ? or fontWeight: 800 - or just on small/large screen
    fontWeight: isLargeScreen ? "700" : "600",
    margin: isTabletScreen ? "0 30px 0 20px" : 0,
    fontSize: isLargeScreen ? "24px" : "16px",
  };

  return (
    <HeaderContainer maxWidth="xl">
      <StyledAppBar position="sticky" sx={{ boxShadow: "none" }}>
        <Link sx={navigationLinkStyle} href="#">
          About
        </Link>
        <Link sx={navigationLinkStyle}>Work</Link>
        <Link sx={navigationLinkStyle}>Contact</Link>
      </StyledAppBar>
    </HeaderContainer>
  );
};

export default Header;
