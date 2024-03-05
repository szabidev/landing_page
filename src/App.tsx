import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Name from "./components/Name/Name";
import NavigationArrow from "./components/NavigationArrow/NavigationArrow";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="App">
      <Header />
      <Social />
      <NavigationArrow />
      <Name />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
