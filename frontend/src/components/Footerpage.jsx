import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

import logo from "../assets/image.png";

import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope
} from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <Link to="/" className="logo">
                        <img src={logo} alt="AM ENTERPRISES"/>

                        <div className="logo-text">
                            <h2>AM ENTERPRISES</h2>
                            <span>
                                CONNECTING MARKETS, CREATING VALUE
                            </span>
                        </div>
                    </Link>

                    <p className="footer-tagline">
                        Delivering quality products and reliable services
                        across the globe.
                    </p>

                </div>

                <div className="footer-links">

                    <h3>QUICK LINKS</h3>

                    <ul>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/services">Services</Link>
                        </li>

                        <li>
                            <Link to="/vision"> Vision </Link>
                        </li>

                        <li>
                            <Link to="/contact"> Contact</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social">

                    <h3>FOLLOW US</h3>

                    <div className="social-icons">

                        <a
                            href="#"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="mailto:info@amenterprises.com"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
 
            <div className="footer-bottom">

                <p>
                    © 2026 AM ENTERPRISES. All Rights Reserved.
                </p>

                <p>
                    Designed with <span>♥</span> for excellence
                </p>

            </div>

        </footer>
    );
};

export default Footer;