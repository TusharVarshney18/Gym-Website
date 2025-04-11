import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isWideScreen, setIsWideScreen] = React.useState(
    window.innerWidth > 600
  );

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isWideScreen={isWideScreen} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
