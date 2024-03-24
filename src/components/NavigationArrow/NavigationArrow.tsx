import { useState, useEffect } from "react";
import { NavigationBox } from "../../materialStyles/NavigationBox";
import { NavigationArrow } from "../../materialStyles/NavigationArrow";
import { scroller } from "react-scroll";
import "../../shared/variables.css";
import { Fade } from "@mui/material";

// TODO CHANGE COLORS AS THE PAGE IS SCROLLED
const NavigationArrowMenu = () => {
  const sectionNames: string[] = ["home", "about", "projects", "contact"];
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);
      // Reset the scroll timeout on each scroll event
      clearTimeout(scrollTimeout);

      // Set a timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    </Fade>
  );
};

export default NavigationArrowMenu;
