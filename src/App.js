import Canvas from "./components/home/Canvas";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import {
  Route,
  Routes,
  HashRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import PortfolioPopup from "./components/portfolio/PortfolioPopup";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:id" element={<PortfolioPopup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
