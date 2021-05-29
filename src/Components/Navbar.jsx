import React from 'react'
import './navbar.css'

function Navbar() {
    return (
<header>
    <div className="container">
    <nav className="flex items-center justify-between">
     <div className="left flex items-center">
                <div className="branding">
                    <img src="./images/logo.png"/>
                </div>
        <div className="link1">

             <a href="/">Home</a>
             <a href="#about">About</a>
             <a href="#services">Services</a>
             <a href="#work">Work</a>
            
            {/* <a href className="link1" to ='/'>Home</a>
            <a href className="link1" to = '#about'>About</a>
            <a href className="link1" to = '/Service'>Services</a>
            <a href className="link1" to = '/Work'>Work</a> */}
        </div>
    </div>
    <div className="right">
        <button className="btn btn-primary"> <a href="#contact">Contact</a></button>
    </div>
    </nav>
    </div>
</header>
    )
}

export default Navbar
