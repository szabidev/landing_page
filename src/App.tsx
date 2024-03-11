import { Element } from "react-scroll";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import NavigationArrowMenu from "./components/NavigationArrow/NavigationArrow";
import Social from "./components/Social/Social";

function App() {
  // ! SCROLL SNAPP FOR PAGES
  return (
    <div className="App">
      <Header />
      <Social />
      <NavigationArrowMenu />
      <Name />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
