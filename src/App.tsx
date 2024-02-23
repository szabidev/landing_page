import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Name from "./components/Name/Name";
import NavigationArrow from "./components/NavigationArrow/NavigationArrow";
import Social from "./components/Social/Social";
// ! Continue with font styling for name and title on homepage

function App() {
  return (
    <div className="App">
      <Header />
      <Social />
      <NavigationArrow />
      <Name />
      <Footer />
    </div>
  );
}

export default App;
