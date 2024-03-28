import { Link } from "react-scroll";
import { Slide } from "@mui/material";
import { HeaderContainer } from "../../materialStyles/HeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import "./Header.css";
import cta from "../../shared/json/cta.json";

interface HeaderProps {
  isVisible: boolean;
  headerColor: string;
}

const Header = ({ isVisible, headerColor }: HeaderProps) => {
  return (
    <Slide direction="down" in={isVisible} timeout={600}>
      <HeaderContainer maxWidth={false}>
        <StyledAppBar
          position="sticky"
          sx={{ boxShadow: "none" }}
          changeColor={headerColor}
        >
          <Link isDynamic smooth className="nav-link" to="about">
            {cta.header.about}
          </Link>
          <Link isDynamic smooth className="nav-link" to="projects">
            {cta.header.projects}
          </Link>
          <Link isDynamic smooth className="nav-link" to="contact">
            {cta.header.contact}
          </Link>
        </StyledAppBar>
      </HeaderContainer>
    </Slide>
  );
};

export default Header;
