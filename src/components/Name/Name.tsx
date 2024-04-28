import { Link } from "react-scroll";
import { NameBox } from "../../materialStyles/NameBox";
import { StyledName } from "../../materialStyles/StyledName";
import "../../shared/variables.css";
import "./Name.css";
import cta from "../../shared/json/cta.json";

const Name = ({ nameColor }: { nameColor: string }) => {
 
  return (
    <NameBox >
      <Link to="home" smooth>
        <StyledName nameColor={nameColor} variant="h1">
          <span className='name-s'>{cta.name.s}</span>
          <span className="name-z">{cta.name.z}</span>
          <span className="name-a">{cta.name.a}</span>
          <span className="name-b">{cta.name.b}</span>
          <span className="name-i">{cta.name.i}</span>
        </StyledName>
        <StyledName nameColor={nameColor} variant="h1">
          <span className="name-v">{cta.name.v}</span>
          <span className="name-o">{cta.name.o}</span>
          <span className="name-j">{cta.name.j}</span>
          <span className="name-t">{cta.name.t}</span>
          <span className="name-e">{cta.name.e}</span>
          <span className="name-k">{cta.name.k}</span>
        </StyledName>
      </Link>
    </NameBox>
  );
};

export default Name;
