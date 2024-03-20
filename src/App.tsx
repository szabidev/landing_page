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
  const isLargeScreen = useMediaQuery("(min-width:800px)");
  return (
    <div className="App" id="app-container">
      <Header />
      <Social />
      <NavigationArrowMenu />
      {isLargeScreen && <Name />}
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
