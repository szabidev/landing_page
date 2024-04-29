import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Container, useMediaQuery } from "@mui/material";
import throttle from "lodash.throttle";
import {ReactLenis} from '@studio-freight/react-lenis';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import NavigationArrowMenu from "./components/NavigationArrow/NavigationArrowMenu";
import Social from "./components/Social/Social";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import gsap from "gsap";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger)

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

 
  //   const splitTypes = document.querySelectorAll<HTMLElement>('.name');
  //   console.log(splitTypes)
  //   splitTypes.forEach((char, i) => {
  //     const bg= char.dataset.bgColor;
  //     const fg = char.dataset.fgColor
  //     const text = new SplitType(char, { types: 'chars' });
  //     console.log(text)
  //    gsap.fromTo(text.chars,{
  //     color:bg,
  //    },
  //   {
  //     color:fg,
  //     // duration:0.2,
  //     // stagger:0.01,
  //     scrollTrigger:{
  //       trigger:char,
  //       start:'bottom 80%',
  //       end:'bottom 100%',
  //       scrub:false,
  //       markers:false
  //     }
  //   })
  // });

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
    // TODO check out LENIS package animations, SPLIT-TYPE
    <ReactLenis root>
    <div className="App" id="app-container">
      <Container maxWidth={false} style={{ padding: 0, margin: 0 }}>
        <Header isVisible={isVisible} headercolor={headerColor} />
        <Social socialColor={socialColor} changeSocial={changeSocial} />
        <NavigationArrowMenu
          navigationcolor={navigationColor}
          isVisible={isVisible}
        />
        {isLargeScreen && <Name nameColor={nameColor}/>}
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
    </ReactLenis>
  );
}

export default App;
