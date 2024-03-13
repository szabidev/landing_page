import { NavigationBox } from "../../materialStyles/NavigationBox";
import { NavigationArrow } from "../../materialStyles/NavigationArrow";
import { scroller } from "react-scroll";
import "../../shared/variables.css";
import { useState } from "react";

// TODO CHANGE COLORS AS THE PAGE IS SCROLLED
const NavigationArrowMenu = () => {
  const sectionNames = ["home", "about", "projects", "contact"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  const handleScrollTo = (index: number) => {
    setCurrentSectionIndex(index);
    scroller.scrollTo(sectionNames[index], {
      duration: 1000,
      smooth: true,
    });
  };

  const rotate = {
    "&:hover": {
      transform: "rotate(180deg) scale(1.1)",
    },
  };

  return (
    <NavigationBox>
      <NavigationArrow
        onClick={() => handleScrollTo(Math.max(0, currentSectionIndex - 1))}
        sx={{ ...rotate, transform: "rotate(180deg)" }}
      />
      <NavigationArrow
        onClick={() =>
          handleScrollTo(
            Math.min(sectionNames.length - 1, currentSectionIndex + 1)
          )
        }
      />
    </NavigationBox>
  );
};

export default NavigationArrowMenu;
