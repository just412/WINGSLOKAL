import React from 'react'
import "../App.css";
import "./styles/Menu.css";
import image from "./Images.js"
import AOS from 'aos';
import "aos/dist/aos.css";

const Menu = () => {
    AOS.init();
    return (
        <div id="menu">
            <div className="menu-section">

                <div className="menu-header">
                    <img className="menu-img" src={image.menu}></img>
                </div>

                <div className="menu-content">
                    <img data-aos-once="false" data-aos="fade-right" data-aos-anchor="#menu" data-aos-duration="1000" className="unli-sideimg" src={image.menuSide}></img>
                    <div data-aos-once="false" data-aos="fade-left" data-aos-anchor="#menu" data-aos-duration="1000" className="unli-deals">
                        <img className="image-249" src={image.deal2}></img>
                        <img className="image-219" src={image.deal1}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu
