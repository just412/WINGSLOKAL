import React from 'react'
import "../App.css";
import "./styles/Flavors.css";
import image from "./Images.js"
import AOS from 'aos';
import "aos/dist/aos.css";

const Flavors = () => {
    AOS.init();
    return (
        <div className="flavor-section">

                <div className="best-flavors" data-aos-once="false" data-aos="fade-down" data-aos-duration="3000" >

                    <div className="b-flavors">
                        <img className="buffalo img" src={image.buffalo}></img>
                        <h1>Buffalo</h1>
                    </div>

                    <div className="b-flavors">
                        <img className="garlic-parmesan img" src={image.garlicParmesan}></img>
                        <h1>Garlic Parmesan</h1>
                    </div>

                    <div className="b-flavors">
                        <img className="salter-egg img" src={image.saltedEgg}></img>
                        <h1>Salted Egg</h1>
                    </div>
                    
                </div>

                <div id="flavors" className="flavors" data-aos-once="false" data-aos="fade-up" data-aos-duration="3000" >
                    <img className="flavors-img" src={image.flavors}></img>
                </div>
        </div>
    )
}

export default Flavors
