import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Slide } from "@mui/material";
import { HeaderContainer } from "../../materialStyles/HeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import "./Header.css";
import cta from "../../shared/json/cta.json";

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  // TODO WORK ON TIMEOUT SETTING AFTER MORE PAGES ARE ADDED
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);

      // Reset the scroll timeout on each scroll event
      clearTimeout(scrollTimeout);

      // Set a timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 600); // Adjust the timeout duration as needed
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Slide direction="down" in={isVisible} timeout={500}>
      <HeaderContainer maxWidth={false}>
        <StyledAppBar position="sticky" sx={{ boxShadow: "none" }}>
          <Link smooth className="nav-link" to="about">
            {cta.header.about}
          </Link>
          <Link smooth className="nav-link" to="projects">
            {cta.header.projects}
          </Link>
          <Link smooth className="nav-link" to="contact">
            {cta.header.contact}
          </Link>
        </StyledAppBar>
      </HeaderContainer>
    </Slide>
  );
};

export default Header;
