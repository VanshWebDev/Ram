import React from 'react'
import experience from './Media/experience.png';
function Experience() {
    return (
        <section id="experience" style={{height: "80vh;"}}>
        <div className="experience-section"></div>

        <div className="experience" data-aos="fade-up">Exper<span>i</span>ence</div>

        <div className="experience1">
            <div className="experience2" data-aos="fade-down"><img src={experience} alt="experience" draggable="false"/>
            </div>
            <div className="experience3">
                <div className="learn" data-aos="fade-down">L<span style={{color: "#feb406"}}>e</span>arn</div>
                <div style={{color: '#808080'}} data-aos="fade-up">
                    I have been developing websites for about one years. I started as a hobby and then I decided to
                    pursue
                    it as a career. I use web development to create interactive and responsive websites that meet the
                    needs
                    and expectations of my clients</div>
            </div>
        </div>
    </section>

    )
}
export default Experience