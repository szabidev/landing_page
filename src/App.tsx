import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import NavigationArrowMenu from "./components/NavigationArrow/NavigationArrow";
import Social from "./components/Social/Social";

// ! FIX HOME AND ABOUT PAGE GAPE, ABOUT BORDER TOP GETS RID OF GAP, CHECK CONTAINERS MAXWIDHT PROPERTY

function App() {
  return (
    <div className="App">
      <Header />
      <Social />
      <NavigationArrowMenu />
      <Name />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
