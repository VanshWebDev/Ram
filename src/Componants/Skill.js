import React, { Component } from 'react'
import certificate from './Media/certificate.gif'
import figma from './Media/figma.png';
import visualStudioCode from './Media/visualStudioCode.png'
import lunacy from './Media/lunacy.png'
import canva from './Media/canva.png'
import bootstrap from './Media/bootstrap.png'

export class Skill extends Component {
    render() {
        return (
            <section id="skill">
                <div className="skill-section"></div>

                <div className="skill">sk<span>i</span>lls</div>

                <div className="container1" data-aos="zoom-in">
                    <div className="container2">
                        <div className="container3">
                            <div className="contaienr4">HTML</div>
                            <div className="container5">
                                <div id="compare1" className="compare"></div>
                            </div>
                        </div>

                        <div className="container3">
                            <div className="contaienr4">CSS</div>
                            <div className="container5">
                                <div id="compare2" className="compare"></div>
                            </div>
                        </div>

                        <div className="container3">
                            <div className="contaienr4">JS</div>
                            <div className="container5">
                                <div id="compare3" className="compare"></div>
                            </div>
                        </div>

                        <div className="container3">
                            <div className="contaienr4">React js</div>
                            <div className="container5">
                                <div id="compare5" className="compare"></div>
                            </div>
                        </div>

                        <div className="container3">
                            <div className="contaienr4">java</div>
                            <div className="container5">
                                <div id="compare4" className="compare"></div>
                            </div>
                        </div>



                    </div>



                    <div className="container7">
                        <div className="container71">About Sk<span>i</span>lls</div>
                        <div className="container72">these are some programing language that's the part of my web devlopent skill
                            with
                            100% accuracy.
                        </div>
                        <a href="certificate.html" target="_blank" style={{ textDecoration: 'none' }}> <button
                            className="skill-certificate">My Certificate <img src={certificate}
                                alt="Certificate" /></button></a>
                    </div>

                </div>


                {/* tools i user in my work */}
                {/* tools i user in my work */}
                {/* tools i user in my work */}
                {/* tools i user in my work */}

                {/* // <!------------------- tools-section------------- --> */}

                <div className="tools-container" data-aos="zoom-in">
                    <div className="tools1">TOOLS I USE IN MY WORK</div>
                    <div className="tools2">
                        <a href="https://www.canva.com/" rel="noreferrer" target="_blank">
                            <div><i className="fa-solid fa-c"></i>Canva</div>
                        </a>

                        <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
                            <div><i className="fa-brands fa-figma"></i>Figma</div>
                        </a>

                        <a href="https://icons8.com/lunacy" rel="noreferrer" target="_blank">
                            <div><i className="fa-solid fa-github"></i>Github</div>
                        </a>
                    </div>
                    <div className="tools3">
                        <a href="https://getbootstrap.com/" rel="noreferrer" target="_blank">
                            <div><i className="fa-brands fa-bootstrap"></i>Bootstrap</div>
                        </a>
                        <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
                            <div><i className="fa-solid fa-code"></i>Visual studio code</div>
                        </a>
                    </div>

                </div>



                {/* // <!-- slider-section --> */}



                

            </section>
        )
    }
}

export default Skill
