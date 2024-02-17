import React, { Component } from "react";
import certificate from "./Media/certificate.gif";
import figma from "./Media/figma.png";
import visualStudioCode from "./Media/visualStudioCode.png";
import lunacy from "./Media/lunacy.png";
import canva from "./Media/canva.png";
import bootstrap from "./Media/bootstrap.png";
import github from "./Media/github.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export class Skill extends Component {
  render() {
    return (
      <section id="skill">
        <div className="skill-section"></div>

        <div className="skill">
          sk<span>i</span>lls
        </div>

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
              <div className="contaienr4">MERN</div>
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
            <div className="container71">
              About Sk<span>i</span>lls
            </div>
            <div className="container72">
              these are some programing language that's the part of my web
              devlopent skill with 100% accuracy.
            </div>
            <a
              href="certificate.html"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <button className="skill-certificate">
                My Certificate <img src={certificate} alt="Certificate" />
              </button>
            </a>
          </div>
        </div>

        {/* tools i user in my work */}
        {/* tools i user in my work */}
        {/* tools i user in my work */}
        {/* tools i user in my work */}

        <div>
          {/* // <!------------------- tools-section------------- --> */}

          <div className="tools-container" data-aos="zoom-in">
            <div className="tools1">TOOLS I USE IN MY WORK</div>
            <div className="tools2">
              <a href="https://www.canva.com/" rel="noreferrer" target="_blank">
                <div>
                  <i className="fa-solid fa-c"></i>Canva
                </div>
              </a>

              <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
                <div>
                  <i className="fa-brands fa-figma"></i>Figma
                </div>
              </a>

              <a
                href="https://icons8.com/lunacy"
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <i class="fa-brands fa-github"></i>Github
                </div>
              </a>
            </div>
            <div className="tools3">
              <a
                href="https://getbootstrap.com/"
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <i className="fa-brands fa-bootstrap"></i>Bootstrap
                </div>
              </a>
              <a
                href="https://code.visualstudio.com/"
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <i className="fa-solid fa-code"></i>Visual studio code
                </div>
              </a>
            </div>
          </div>

          {/* // <!-- slider-section --> */}

          <div className="swiper-container" data-aos="fade-up">
            <div id="main">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={figma} alt="Figma" />
                        <h3>
                          Figma is a tool used to design like apps and websites.
                          It works in your browser, so you can just open a new
                          tab and start designing.
                        </h3>
                        <h5>Figma</h5>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={visualStudioCode} alt="Visual Studio Code" />
                        <h3>
                          Visual Studio Code is a popular and versatile code
                          editor that help me to write, debug, and run code in
                          different type of languages and platforms.
                        </h3>
                        <h5>Visual Studio Code</h5>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={lunacy} alt="Lunacy" />
                        <h3>
                          This is a software that allows users to create and
                          edit web pages, graphics, and prototypes with various
                          features and
                        </h3>
                        <h5>Lunacy</h5>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={canva} alt="Canva" />
                        <h3>
                          Canva is a popular online graphic designer it allows
                          us to create stunning visual content easily. Whether
                          you design web page social media posts, videos or
                          anything else.
                        </h3>
                        <h5>Canva</h5>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={bootstrap} alt="Bootstrap" />
                        <h3>
                          Bootstrap helps in web development by providing a
                          framework that simplifies the process of creating
                          responsive, mobile-friendly websites with HTML, CSS,
                          and JavaScript.{" "}
                        </h3>
                        <h5>BOOTSTRAP</h5>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src={github} alt="Github" />
                        <h3>
                        GitHub is a platform for hosting and collaborating on code using Git. It provides version control, issue tracking, and project management tools for software development teams.{" "}
                        </h3>
                        <h5>GITHUB</h5>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
