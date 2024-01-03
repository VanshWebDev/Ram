import './CSS/Navbar.css';
import './CSS/Home.css';
import './CSS/Skill.css';
import './CSS/Tools.css';
import './CSS/Project.css';
import './CSS/Experience.css';
import './CSS/Faq.css';
import './CSS/Footer.css';
// ----------css------------
import Navbar from './Componants/Navbar';
import Home from './Componants/Home';
import Skill from './Componants/Skill';
import Tools from './Componants/Tools';
import Project from './Componants/Project';
import Experience from './Componants/Experience';
import Faq from './Componants/Faq';
import Footer from './Componants/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <Skill />
        <Tools />
        <Project />
        <Experience />
        <Faq />
        <Footer />
    </div>
  );
}

export default App;
