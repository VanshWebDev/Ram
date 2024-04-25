import React from "react";

export default function Project() {
    return (
        <section id="project">



            <div className="mainn">
                <div className="projects" data-aos="fade-up">
                    <p>Pro<span>j</span>ects</p>
                </div>
                <div className="main2">
                    <a href="https://vkweather.netlify.app/" rel="noreferrer" target="_blank">
                        <div className="wrap section1" data-aos="fade-down">
                            <div className="container image1">
                                {/* <!-- <p className="p">Normal</p> --> */}
                            </div>
                            <button className="hvlook">Have a look &nbsp;<i
                                className="fa-solid fa-arrow-up-right-from-square"></i></button>

                        </div>
                    </a>

                    <a href="https://picimage.netlify.app" rel="noreferrer" target="_blank">
                        <div className="wrap section2" data-aos="fade-down">
                            <div className="container image2">
                                {/* <!-- <p className="p">Reverse</p> --> */}
                            </div>


                            <button className="hvlook"> Have a look &nbsp;<i
                                className="fa-solid fa-arrow-up-right-from-square"></i></button>

                        </div>
                    </a>
                </div>

            </div>

        </section>
    )
}