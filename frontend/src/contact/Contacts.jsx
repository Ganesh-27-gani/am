import React from "react";
import "../styles/contact.css";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter
} from "react-icons/fa6";

const Contacts = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been submitted.");
    };

    return (
        <section className="contact-page">

            <div className="contact-wrapper">

                <div className="contact-header">

                    <h1>
                        Contact <span>Us</span>
                    </h1>

                    <p>
                        Please feel free to contact us and<br />
                        we'll get back to you as soon as we can.
                    </p>

                </div>

                <div className="contact-content">

                    <div className="contact-form">

                        <form onSubmit={handleSubmit}>

                            <div className="form-field">
                                <label htmlFor="fullName"> Name </label>
                                <input type="text" id="fullName" name="fullName" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="number"> Phone </label>
                                <input type="text" id="number" name="number" required />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Subject</label>
                                <input type="email" id="subject" name="subject" required />
                            </div>

                            <div className="form-field">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="3" required></textarea>
                            </div>

                            <button type="submit" className="contact-submit"> Send</button>

                        </form>

                    </div>


                    <div className="contact-info">

                        <div className="info-block">

                            <h6>
                                Visit us
                            </h6>

                            <p>
                                AM ENTERPRISES<br />
                                Karnataka, India
                            </p>

                        </div>


                        <div className="info-block">

                            <h5>
                                Talk to us
                            </h5>

                            <p>
                                +91 98765 43210<br />
                                info@amenterprises.com
                            </p>

                        </div>
                        <div className="social-links">

                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="X">
                                <FaXTwitter />
                            </a>

                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" aria-label="YouTube">
                                <FaYoutube />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contacts;