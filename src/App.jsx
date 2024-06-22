import { ThemeProvider } from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./components/Stars";
import { useEffect, useState } from "react";

function App() {
  const [height, setHeight] = useState("120vh");

  const makeHeightResponsive = () => {
    let width = window.innerWidth;

    if (width < 900) {
      setHeight("130vh");
    }

    if (width < 600) {
      setHeight("150vh");
    }

    if (width < 550) {
      setHeight("160vh");
    }

    if (width < 400) {
      setHeight("250vh");
    }
  };
  useEffect(() => {
    makeHeightResponsive();
  }, []);
  return (
    <ThemeProvider>
      <div className="relative w-screen h-screen z-10">
        <Home />
        <StarsCanvas />
      </div>
      <div className="relative z-0 body">
        <Navbar />
        <About />
        <div className="relative w-max h-max z-10">
          <TechStack />
          <StarsCanvas givenHeight={height} givenClass={"tech-canvas"} />
        </div>
        <div className="relative w-screen h-max  z-0">
          <Service />
        </div>
        <div className="relative mt-24 pb-28">
          <Work />
          <Testimonial />
        </div>
        <div className="contact mb-80">
          <Contact />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
/* {
     "Full Stack development Projects"
      Frontend Web Development
      Backend Development
      Real Time Sockets Development
      Responsive Web Design
      Static Website Development
      Landing Page
      Website SEO 
      
      


 }*/
