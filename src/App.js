import "./CSS/Navbar.css";
import "./CSS/Home.css";
import "./CSS/Skill.css";
import "./CSS/Project.css";
import "./CSS/Experience.css";
import "./CSS/Footer.css";
import "./CSS/Testimonial.css";
import Home from "./Componants/Home";
import Skill from "./Componants/Skill";
import Project from "./Componants/Project";
import Experience from "./Componants/Experience";
import Footer from "./Componants/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Certificate from "./Componants/Certificate";

function MainContent() {
  return (
    <>
      <Home />
      <Skill />
      <Project />
      <Experience />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
