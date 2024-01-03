import Ram from './Media/Ram.png'
import React from 'react'

function Home() {
    return (
        <section id='home'>
            <section id="home" style={{ height: "80vh"}}>
                <div className="main">
                </div>

                <main className="container">
                    <div className="container-content">
                        <div className="lamp-container">
                        </div>
                        <p className="first-text">Hii,</p>
                        <p className="second-text">I'm a <span>front-end</span> devloper</p>
                        <p className="third-text">Vansh kumar</p>

                        <div className="button-container">
                            <a href="resume.pdf" download="Vansh kumar resume"><button className="button">Resume</button></a>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={Ram} alt="Ram" draggable="false" />
                    </div>
                </main>

            </section>

            <div className="scrollMouse">
                <div className="containerrr">
                    <div className="field">
                        <div className="mouse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home