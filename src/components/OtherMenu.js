import React from 'react'
import "../App.css";
import "./styles/OtherMenu.css";
import image from "./Images.js"
import Aos from 'aos';
import "aos/dist/aos.css"

const OtherMenu = () => {
    Aos.init();
    return (
        <div className="otherMenu-section">
             <div className="ala-carte">
                        <img className="alacarte-pic"  data-aos-once="false" data-aos="fade-right" data-aos-duration="3000" src={image.alacarte}></img>
                        <img className="alacarte-side"  data-aos-once="false" data-aos="fade-left" data-aos-duration="3000" src={image.alacarteSide}></img>
                </div>
                
                <div className="pasta-menu" >                      
                        <img className="pasta-pic" data-aos-once="false" data-aos="fade-left" data-aos-duration="3000" src={image.pastaPic}></img>
                        <img className="pasta-txt" data-aos-once="false" data-aos="fade-right" data-aos-duration="3000" src={image.pastaMenu}></img>
                </div>

                <div className="others-menu">
                        <img className="others-txt" data-aos-once="false" data-aos="fade-right" data-aos-duration="3000" src={image.othersMenu}></img>
                        <img className="others-pic" data-aos-once="false" data-aos="fade-left" data-aos-duration="3000" src={image.othersPic}></img>
                </div>

                <div className="addons-menu">                   
                        <img className="addons-pic" data-aos-once="false" data-aos="fade-left" data-aos-duration="3000" src={image.addonsPic}></img>
                        <img className="addons-txt" data-aos-once="false" data-aos="fade-right" data-aos-duration="3000" src={image.addonsMenu}></img>
                </div>
        </div>
    )
}

export default OtherMenu
