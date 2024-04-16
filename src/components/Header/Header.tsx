import { Link } from "react-scroll";
import { Slide } from "@mui/material";
import { HeaderContainer } from "../../materialStyles/HeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import cta from "../../shared/json/cta.json";
import "./Header.css";

interface HeaderProps {
  isVisible: boolean;
  headercolor: string;
}

const Header = ({ isVisible, headercolor }: HeaderProps) => {
  return (
    <Slide direction="down" in={isVisible} timeout={600}>
      <HeaderContainer maxWidth={false}>
        <StyledAppBar
          position="sticky"
          sx={{ boxShadow: "none" }}
          changecolor={headercolor}
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
