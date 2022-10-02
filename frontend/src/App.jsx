import "./App.css";
import "./Responsivity.css";
import NavBar from "./components/navBar/NavBar";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import HorizontalBar from "./components/horizontalBar/HorizontalBar";
import Weekly from "./components/weekly/Weekly";
import Footer from "./components/footer/Footer";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Fade bottom>
        <div className="siteTitle">
          <h2 id="restaurant">Az étteremről</h2>
          <span className="decorSpan"></span>
        </div>
        <AboutUs />
      </Fade>
      <Fade bottom>
        <div className="siteTitle">
          <h2 id="menu">Étlapunk</h2>
          <span className="decorSpan"></span>
        </div>
        <HorizontalBar />
      </Fade>
      <Fade bottom>
        <Weekly />
      </Fade>
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  );
}

export default App;
