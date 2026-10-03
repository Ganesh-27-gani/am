import React from 'react'
import "../styles/Navbar.css"
import image from "../assets/image.png"
import { Link, Links } from 'react-router'

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

           <Link to="/">HOME</Link>
           <Link  to="about">ABOUT</Link>
           <Link to="/services">SERVICES</Link>
            <Link to="/vision">VISION</Link>
           <Link  to="/contact">CONTACT</Link>
           <a href="#contact">LOGIN</a>
        </div>

    </div>

</nav>

        </>
    )
}

export default Navebar