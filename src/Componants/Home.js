import Ram from "./Media/Ram.png";
import React from "react";
import logo from "./Media/wLogo.jpg";
import resume from "./Media/resume.pdf";
function Home() {
  return (
    <section id="home" style={{width:'100%'}}>
      {/* <section id="home" style={{ height: "80vh" }}> */}
        {/* <div className="main mainmain" ></div> */}

        <main className="container" style={{width:'100vw'}}>
          <div className="container-content">
            <div className="lamp-container"></div>
            <p className="first-text">Hii,</p>
            <p className="second-text">
              I'm a <span>full-stack</span> devloper
            </p>
            <p className="third-text">Vansh kumar</p>

            <div className="button-container">
              <a href={resume} download="Vansh kumar resume">
                <button className="button">Resume</button>
              </a>
            </div>
          </div>

          <div className="image-container">
            <img src={Ram} alt="Ram" draggable="false" />
          </div>
        </main>
      {/* </section> */}

      {/* <div className="scrollMouse">
        <div className="containerrr">
          <div className="field">
            <div className="mouse"></div>
          </div>
        </div>
      </div> */}
      {/* ---------- bottom bavbar ------- */}
      <div className="navbarContainer">
        <div className="bottomNavbar">
          <div className="firstIcn">
            <a href="#skill">Skill</a>
            <a href="#project" style={{marginRight: '-15px'}}>Project</a>
          </div>

          <div className="mainCon">
            <ul className="mainconUl">
              {/* <li>Send mail</li>
              <li><a href="#home">Home</a></li> */}
            </ul>
            <div className="secondIcn">
              <div className="se"></div>
             <a href="#home"> <img src={logo} alt="logo" className="logo" /></a>
            </div>
          </div>

          <div className="thirdIcn">
            <a href="#experience"  style={{marginLeft: '-15px'}}>Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
