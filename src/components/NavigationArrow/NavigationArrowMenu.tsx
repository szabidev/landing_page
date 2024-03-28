import { useState } from "react";
import { NavigationBox } from "../../materialStyles/NavigationBox";
import { NavigationArrow } from "../../materialStyles/NavigationArrow";
import { scroller } from "react-scroll";
import "../../shared/variables.css";
import { Fade } from "@mui/material";

interface NavigationArrowMenuProps {
  navigationColor: string;
  isVisible: boolean;
}

const NavigationArrowMenu = ({
  navigationColor,
  isVisible,
}: NavigationArrowMenuProps) => {
  const sectionNames: string[] = ["home", "about", "projects", "contact"];
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
    <Fade in={isVisible} timeout={500}>
      <NavigationBox>
        <NavigationArrow
          navigationColor={navigationColor}
          onClick={() => handleScrollTo(Math.max(0, currentSectionIndex - 1))}
          sx={{ ...rotate, transform: "rotate(180deg)" }}
        />
        <NavigationArrow
          navigationColor={navigationColor}
          onClick={() =>
            handleScrollTo(
              Math.min(sectionNames.length - 1, currentSectionIndex + 1)
            )
          }
        />
      </NavigationBox>
    </Fade>
  );
};

export default NavigationArrowMenu;
