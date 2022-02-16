import React from 'react'
import BackgroundVid from "../images/video-bg.mp4"
import "./styles/Background.css"
import image from "./Images.js"

const Background = () => {
    return (
        <div>
            <video className="video-bg" autoPlay loop muted>
                <source src={BackgroundVid} type="video/mp4" />
            </video>
        </div>
    )
}

export default Background
