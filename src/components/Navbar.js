import React, { useState } from 'react'
import "./styles/Navbar.css"
import Images from './Images';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [hamMenu, hamToggle] = useState(false);

    const navBackground = () => { 
        if (window.scrollY >= 90) {
            setNavbar(true);
        } else {
            setNavbar(false);
        } 
    };

    window.addEventListener('scroll', navBackground);

    const handleClick = () => {
        hamToggle(!hamMenu);
    };

    return (
        <nav className={navbar ? 'nav-active' : null}>
            <ul className={hamMenu === false ? "nav-links" : "nav-links active"} onClick={handleClick}>
                <li className="link">
                    <a href="#menu">Menu</a>
                </li>
                <li className="link">
                    <a href="#gallery">Gallery</a>
                </li>
                <li className="title-link">    
                    <a href="#showcase"><img className={navbar ? 'img-shirk' : null} src={navbar ? Images.logo2 : Images.logo1}></img></a>   
                </li>
                <li className="link">
                    <a href="#order">Order</a>
                </li>
                <li className="link">     
                    <a href="#about">About</a>
                </li>
            </ul>
            <h1 className="title-link"><a href="#showcase"><img src={navbar ? Images.logo2 : Images.logo1}></img></a></h1>

            <div onClick={handleClick} className="hamburger-toggle">
                <div className="burger" onClick={handleClick} >
                    <div className="bun" style={hamMenu ? {transform: 'rotate(45deg)'} : {transform: 'rotate(0)'}}/>
                    <div className="bun" style={hamMenu ? {transform: 'translateX(100%)', opacity: 0} : {transform: 'translateX(0)', opacity: 1}}/>
                    <div className="bun" style={hamMenu ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(0)'}}/>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
