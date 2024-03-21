import { Element } from "react-scroll";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import NavigationArrowMenu from "./components/NavigationArrow/NavigationArrow";
import Social from "./components/Social/Social";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useMediaQuery } from "@mui/material";

function App() {
  // ! useEffect window.scrollY -based on this axis change header color

  const isLargeScreen = useMediaQuery("(min-width:800px)");
  return (
    <div className="App" id="app-container">
      <Header />
      <Social />
      <NavigationArrowMenu />
      {isLargeScreen && <Name />}
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
    </div>
  );
}

export default App;
