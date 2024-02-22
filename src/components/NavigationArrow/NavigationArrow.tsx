import { StyledNavigationBox } from "../../materialStyles/StyledNavigationBox";
import "../../shared/variables.css";
import { StyledNavigationArrow } from "../../materialStyles/StyledNavigationArrow";

const NavigationArrow = () => {
  const rotate = {
    "&:hover": {
      transform: "rotate(180deg) scale(1.1)",
    },
  };

  return (
    <StyledNavigationBox>
      <StyledNavigationArrow sx={{ ...rotate, transform: "rotate(180deg)" }} />
      <StyledNavigationArrow />
    </StyledNavigationBox>
  );
};

export default NavigationArrow;
