import { TitleBox } from "../../materialStyles/TitleBox";
import { StyledTitle } from "../../materialStyles/StyledTitle";
import cta from "../../shared/json/cta.json";

const Title = () => {
  return (
    <TitleBox>
      <StyledTitle variant="h1">{cta.title.frontend}</StyledTitle>
      <StyledTitle variant="h1">{cta.title.dev}</StyledTitle>
    </TitleBox>
  );
};

export default Title;
