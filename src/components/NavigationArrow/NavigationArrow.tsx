import { NavigationBox } from "../../materialStyles/NavigationBox";
import "../../shared/variables.css";
import { NavigationArrow } from "../../materialStyles/NavigationArrow";

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
