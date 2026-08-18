import React from 'react'
import "../styles/Navbar.css"
import image from "../assets/image.png"

const Navebar = () => {
    return (
        <>

<nav className='navbar'>
    <div className='navbar-container'>
        <a href="#home" className='logo'>
            <img src={image} alt="AM ENTERPRISES" />
            <div className='logo-text'>
                <h2>AM ENTERPRISES</h2>
                <span>CONNECTING MARKETS, CREATING VALUE</span>
            </div>
        </a>

        <div className='nav-links'>

           <a href="#home">HOME</a>
           <a href="#about">ABOUT</a>
           <a href="#services">SERVICES</a>
           <a href="#vision">VISION</a>
           <a href="#contact">CONATCT</a>
        </div>

    </div>

</nav>

        </>
    )
}

export default Navebar