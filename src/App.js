import './CSS/Navbar.css';
import './CSS/Home.css';
import './CSS/Skill.css';
import './CSS/Project.css';
import './CSS/Experience.css';
import './CSS/Footer.css';
import './CSS/Testimonial.css'
// ----------css------------
import Home from './Componants/Home';
import Skill from './Componants/Skill';
import Project from './Componants/Project';
import Experience from './Componants/Experience';
import Footer from './Componants/Footer';

function App() {
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

export default App;