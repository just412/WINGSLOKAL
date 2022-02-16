import React from 'react'
import "./styles/Showcase.css";
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWaze} from "react-icons/fa"
import { SiGooglemaps } from "react-icons/si"

const Showcase = () => {
    return (
        <div id="showcase">
            <div className="showcase">

                <div className="main-title">
                    <h3>UNLI CHICKEN WINGS</h3>
                    <h1>WINGS LOKAL</h1>
                </div>
                
                <div className="showcase_btn">
                    <a href="#menu" className="showcase_btn-menu">CHECK MENU</a>
                    <a href="#order" className="showcase_btn-contact">FOLLOW US</a>
                </div>
            </div>
            <div className="address">
                <a>
                    <h1> <FaMapMarkerAlt /> Stall 1, Pamayanang Diego Silang, Taguig</h1>
                    <h1>Find us on</h1>
                </a>

                <div className="soc-media">
                    <a href="https://www.waze.com/live-map/directions/philippines/metro-manila/taguig/wings-lokal?to=place.ChIJP5TrLhHJlzMRnT57rpAp_3Q" target="_blank">
                            <h1><FaWaze size={28}/></h1>
                    </a>

                    <a href="https://www.google.com/maps/place/Wings+Lokal/@14.5280828,121.0562841,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c9112eeb943f:0x74ff2990ae7b3e9d!8m2!3d14.5280776!4d121.0584728" target="_blank">
                        <h1><SiGooglemaps size={28}/></h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Showcase
