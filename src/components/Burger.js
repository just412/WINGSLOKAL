import React, { useState } from 'react';
import "./styles/Burger.css"

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="burger" onClick={() => setOpen(!open)} >
            <div className="bun" style={open ? {transform: 'rotate(45deg)'} : {transform: 'rotate(0)'}}/>
            <div className="bun" style={open ? {transform: 'translateX(100%)', opacity: 0} : {transform: 'translateX(0)', opacity: 1}}/>
            <div className="bun" style={open ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(0)'}}/>
        </div>
    )
}

export default Burger
