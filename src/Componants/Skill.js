import React, { Component } from 'react'
import certificate from './Media/certificate.gif'
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
            </section>
        )
    }
}

export default Skill
