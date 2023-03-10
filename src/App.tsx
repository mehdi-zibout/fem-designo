import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Locations from "./pages/Locations";
import Footer from "./components/Footer";
import Design from "./pages/Design";
import ScrollToTop from "./components/shared/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <div className="desktop:max-w-[1440px] mx-auto">
        <div className="tablet:px-10  desktop:px-[10.31rem] ">
          <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Locations" element={<Locations />} />
              <Route path="/design/:type" element={<Design />} />
            </Routes>
          </ScrollToTop>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
