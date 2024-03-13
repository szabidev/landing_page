import { Link } from "react-scroll";
import { NameBox } from "../../materialStyles/NameBox";
import { StyledName } from "../../materialStyles/StyledName";
import "../../shared/variables.css";
import "./Name.css";

// TODO CHANGE NAME COMPONENT COLOR ON DIFFERENT PAGES, ON ENTERING IMAGES
// TODO DECIDE WHETER TO DISPLAY IT OR NOT ON SMALL SCREEN
// ? MAYBE ADD FADE OUT EFFECT ON SCROLL
const Name = () => {
  return (
    <NameBox>
      <Link to="home" smooth>
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
    </NameBox>
  );
};

export default Name;
