import { NavigationBox } from "../../materialStyles/NavigationBox";
import { NavigationArrow } from "../../materialStyles/NavigationArrow";
import "../../shared/variables.css";

// TODO CHANGE COLORS AS THE PAGE IS SCROLLED
const NavigationArrowMenu = () => {
  const rotate = {
    "&:hover": {
      transform: "rotate(180deg) scale(1.1)",
    },
  };

  return (
    <NavigationBox>
      <NavigationArrow sx={{ ...rotate, transform: "rotate(180deg)" }} />
      <NavigationArrow />
    </NavigationBox>
  );
};

export default NavigationArrowMenu;
