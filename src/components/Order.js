import React from 'react'
import "../App.css";
import "./styles/Order.css"
import { SocialIcon } from 'react-social-icons';

const Order = () => {
    return (
        <div id="order">
            <div className="order-section">
                <div className="title-section">
                    <h1>SATISFY YOUR CRAVINGS NOW!</h1>
                </div>
                <div className="sub-title">
                    <h2>FOLLOW US ON OUR SOCIAL MEDIA TO ORDER</h2>
                </div>
                <div className="socials">
                    <div className="fb">
                        <SocialIcon url="https://www.facebook.com/wingslokal" style={{ height: 100, width: 100 }} fgColor="whitesmoke" target="_blank" />
                    </div>
                    <div className="ig">
                        <SocialIcon url="https://www.instagram.com/wingslokal/" style={{ height: 100, width: 100 }} fgColor="whitesmoke" target="_blank"/>
                    </div>
                    <div className="gmail">
                        <SocialIcon url="https://www.gmail.com/" network="google" style={{ height: 100, width: 100 }} fgColor="whitesmoke" target="_blank"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Order
