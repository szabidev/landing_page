import { Link } from "react-scroll";
import { HeaderContainer } from "../../materialStyles/HeaderContainer";
import { StyledAppBar } from "../../materialStyles/StyledAppBar";
import "./Header.css";

const Header = () => {
  return (
    <HeaderContainer maxWidth={false}>
      <StyledAppBar position="sticky" sx={{ boxShadow: "none" }}>
        <Link smooth={true} className="nav-link" to="about">
          About
        </Link>
        <Link smooth={true} className="nav-link" to="work">
          Work
        </Link>
        <Link smooth={true} className="nav-link" to="contact">
          Contact
        </Link>
      </StyledAppBar>
    </HeaderContainer>
  );
};

export default Header;
