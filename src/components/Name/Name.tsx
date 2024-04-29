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
        <StyledName nameColor={nameColor} variant="h1" >
          <span className='name-s name' data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.s}</span>
          <span className="name-z name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.z}</span>
          <span className="name-a name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.a}</span>
          <span className="name-b name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.b}</span>
          <span className="name-i name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.i}</span>
          
        </StyledName>
        <StyledName nameColor={nameColor} variant="h1" className="hero-title" data-bg-color='var(--green)' data-fg-color='(var--offwhite)'>
          <span className="name-v name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.v}</span>
          <span className="name-o name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.o}</span>
          <span className="name-j name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.j}</span>
          <span className="name-t name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.t}</span>
          <span className="name-e name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.e}</span>
          <span className="name-k name" data-bg-color='var(--green)' data-fg-color='var(--offwhite)'>{cta.name.k}</span>
          
        </StyledName>
      </Link>
    </NameBox>
  );
};

export default Name;
