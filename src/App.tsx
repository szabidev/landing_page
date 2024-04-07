import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import { Container, useMediaQuery } from "@mui/material";
import throttle from "lodash.throttle";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import NavigationArrowMenu from "./components/NavigationArrow/NavigationArrowMenu";
import Social from "./components/Social/Social";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const isLargeScreen = useMediaQuery("(min-width:800px)");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [headerColor, setHeaderColor] = useState<string>("var(--white)");
  const [navigationColor, setNavigationColor] = useState<string>(
    "var(--fontMainColor)"
  );
  const [socialColor, setSocialColor] = useState<string>(
    "var(--fontMainColor)"
  );
  const [changeSocial, setChangeSocial] = useState<boolean>(false);
  const [nameColor, setNameColor] = useState<string>("var(--green)");
  const nameBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = throttle(() => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 600);

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrolledPercentage =
        (scrollPosition / (pageHeight - windowHeight)) * 100;

      if (scrolledPercentage >= 0 && scrolledPercentage < 18.48) {
        setHeaderColor("var(--white)");
        setNavigationColor("var(--fontMainColor)");
        setChangeSocial(false);
        setNameColor("var(--green)");
      } else if (scrolledPercentage >= 18.48 && scrolledPercentage < 55.56) {
        setHeaderColor("var(--offwhite)");
        setNavigationColor("var(--fontMainColor)");
        setChangeSocial(false);
        setNameColor("var(--green)");
      } else if (scrolledPercentage >= 55.56 && scrolledPercentage < 81.56) {
        setHeaderColor("var(--white)");
        setNavigationColor("var(--fontMainColor)");
        setChangeSocial(false);
        setNameColor("var(--green)");
      } else if (scrolledPercentage >= 81.56) {
        setChangeSocial(true);
        setHeaderColor("var(--offwhite)");
        setNavigationColor("var(--offwhite)");
        setSocialColor("var(--offwhite)");
        setNameColor("var(--offwhite)");
      }
    }, 600);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" id="app-container">
      <Container maxWidth={false} style={{ padding: 0, margin: 0 }}>
        <Header isVisible={isVisible} headercolor={headerColor} />
        <Social socialColor={socialColor} changeSocial={changeSocial} />
        <NavigationArrowMenu
          navigationcolor={navigationColor}
          isVisible={isVisible}
        />
        {isLargeScreen && <Name namecolor={nameColor} ref={nameBoxRef} />}
        <Element id="home" name="home">
          <Home />
        </Element>
        <Element id="about" name="about">
          <About />
        </Element>
        <Element id="projects" name="projects">
          <Projects />
        </Element>
        <Element id="contact" name="contact">
          <Contact />
        </Element>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
