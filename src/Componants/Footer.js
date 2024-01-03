import React from 'react';
import logo from './Media/logo.png';
import fv1 from './Media/fv1.mp4';
import fv2 from './Media/fv2.mp4';
export default function Footer() {
    return (
        <section id="contact" className="lastSection">
            {/* <!-- ------------------------------------ --> */}

            <div className="logoName">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div style={{ color: '#808080' }}>Vansh Kumar</div>
            </div>
           
            <div className="availOn">Ava<span>i</span>lable on</div>
            {/* <!-- ------------------------------------- --> */}
            <div className="contacts">
                <div className="iconsss">

                    <a href="https://www.instagram.com/devloper.mind_/" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/vansh-kumar-webdev/" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/VanshWebDev" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>



                </div> <p style={{ textAlign: 'center' }}>Direct Mail</p>
            {/* <!-- -------------------------------------- --> */}
            <div className="mailBtn">
                <a href="mailto: vanshvanshkumar39@gmail.com">
                    <button className="hvlook2">Mail us <pre style={{display: 'inline'}}>     </pre>
                        <i className="fa-solid fa-envelope"></i>
                    </button>
                </a>
            </div>
            {/* <!-- ------------------------------------- --> */}
                {/* <!-- ---------------------------------------- --> */}
                <div className="copyright">Thanks to visit</div>
            </div>
            <video src={fv2} className="pattern" autoPlay muted loop></video> {/*<!--  right --> */}
            <video src={fv1} className="pattern2" autoPlay muted loop></video>  {/* <!--  left --> */}
        </section>


    )
}
