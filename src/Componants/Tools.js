import React from "react";
import figma from './Media/figma.png';
import visualStudioCode from './Media/visualStudioCode.png'
import lunacy from './Media/lunacy.png'
import canva from './Media/canva.png'
import bootstrap from './Media/bootstrap.png'
export default function Tools() {
    return (
        <div>
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



            <div className="swiper-container" data-aos="fade-up">

                <div id="main">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={figma} alt="Figma"/>
                                    <h3>Figma is a tool used to design like apps and websites. It works in your browser, so you
                                        can
                                        just open a new tab and start designing.</h3>
                                    <h5>Figma</h5>
                            </div>

                            <div className="swiper-slide">
                                <img src={visualStudioCode} alt="Visual Studio Code"/>
                                    <h3>Visual Studio Code is a popular and versatile code editor that help me to write, debug,
                                        and
                                        run code in different type of languages and platforms.</h3>
                                    <h5>Visual Studio Code</h5>
                            </div>


                            <div className="swiper-slide">
                                <img src={lunacy} alt="Lunacy"/>
                                    <h3>This is a software that allows users to create and edit web pages, graphics, and
                                        prototypes
                                        with various features and</h3>
                                    <h5>Lunacy</h5>
                            </div>


                            <div className="swiper-slide">
                                <img src={canva} alt="Canva"/>
                                    <h3>Canva is a popular online graphic designer it allows us to create stunning visual
                                        content
                                        easily. Whether you design web page social media posts, videos or anything else.</h3>
                                    <h5>Canva</h5>
                            </div>


                            <div className="swiper-slide">
                                <img src={bootstrap} alt="Bootstrap"/>
                                    <h3>Bootstrap helps in web development by providing a framework that simplifies the process
                                        of
                                        creating responsive, mobile-friendly websites with HTML, CSS, and JavaScript. </h3>
                                    <h5>BOOTSTRAP</h5>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}