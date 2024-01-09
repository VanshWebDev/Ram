import React from 'react'
import experience from './Media/experience.png';
function Experience() {
    return (
        <section id="experience">
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



        {/* faq */}
        {/* faq */}
        {/* faq */}
        {/* faq */}

        <div className='faq'>
                <h2>Frequently Asked Question</h2>
                <ul className='accordion'>
                    <li data-aos="fade-up">
                        <input type='radio' name='accordion' id='second' />
                        <label htmlFor='second'>SEO Are your websites SEO friendly?</label>
                        <div className='content'>
                            <p>100% Yes! Remember we are Google Partners! it's our obligation to you as a customer to make sure
                                your website is visible</p>
                        </div>
                    </li>
                    <li data-aos="fade-up">
                        <input type='radio' name='accordion' id='third' />
                        <label htmlFor='third'>How Much Does a Website Cost?</label>
                        <div className='content'>
                            <p>Hiring a freelance web designer will usually cost between $75 and $200 per hour, depending on
                                their experience but actually it's depend on your requirments.
                            </p>
                        </div>
                    </li>
                    <li data-aos="fade-up">
                        <input type='radio' name='accordion' id='fourth' />
                        <label htmlFor='fourth'>What is web hosting?</label>
                        <div className='content'>
                            <p>Web hosting is the service that makes your website available to be viewed by others on the
                                Internet. We can also help you to host your website.</p>
                        </div>
                    </li>
                    <li data-aos="fade-up">
                        <input type='radio' name='accordion' id='fifth' />
                        <label htmlFor='fifth'>difference between web designer & developer</label>
                        <div className='content'>
                            <p>A web developer is more concerned with functionality and features of a website, and versed in the
                                programming languages required to create them.
                                <br /><br />
                                A web designer will create the logos, graphics, and layout that determine the look and feel of a
                                website.
                            </p>
                        </div>
                    </li>
                    <li data-aos="fade-up">
                        <input type='radio' name='accordion' id='sixth' />
                        <label htmlFor='sixth'>What is the project timeline?</label>
                        <div className='content'>
                            <p>The timeline will depend upon certain criteria such as requirements ... So, it's quite hard to
                                predict an actual range htmlFor every web app development project but if your website is simple and
                                not too much professional so it can take up to 1 to 2 weeks else Great thing takes time.
                                <br /><br />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
    </section>

    )
}
export default Experience