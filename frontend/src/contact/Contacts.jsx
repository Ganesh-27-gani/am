import React from "react";
import "../styles/contact.css";

const Contacts = () => {
    return (
        <section className="contact-page">

            <div className="contact-container">

                {/* ================= LEFT SIDE ================= */}

                <div className="contact-info">

                    <span className="contact-small-title">
                        CONTACT US
                    </span>

                    <h1>
                        Let's Start a
                        <br />
                        <span>Conversation</span>
                    </h1>

                    <p>
                        Have a question, business inquiry, or partnership
                        opportunity? Get in touch with AM ENTERPRISES.
                        Our team is ready to assist you.
                    </p>


                    <div className="contact-details">

                        <div className="contact-item">
                            <div className="contact-icon">
                                ✉
                            </div>

                            <div>
                                <h4>Email</h4>
                                <p>info@amenterprises.com</p>
                            </div>
                        </div>


                        <div className="contact-item">
                            <div className="contact-icon">
                                ☎
                            </div>

                            <div>
                                <h4>Phone</h4>
                                <p>+91 XXXXX XXXXX</p>
                            </div>
                        </div>


                        <div className="contact-item">
                            <div className="contact-icon">
                                📍
                            </div>

                            <div>
                                <h4>Location</h4>
                                <p>India</p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="contact-form-box">

                    <h2>Send Us a Message</h2>

                    <p className="form-description">
                        Fill in the details below and our team will get
                        back to you shortly.
                    </p>


                    <form>

                        {/* FULL NAME */}

                        <div className="form-group">

                            <label htmlFor="fullName">
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter your full name"
                                required
                            />

                        </div>


                        {/* PHONE */}

                        <div className="form-group">

                            <label htmlFor="phone">
                                Phone
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                required
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@example.com"
                                required
                            />

                        </div>


                        {/* SUBJECT */}

                        <div className="form-group">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Enter subject"
                                required
                            />

                        </div>


                        {/* MESSAGE */}

                        <div className="form-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message..."
                                required
                            ></textarea>

                        </div>


                        {/* CHECKBOX */}

                        <div className="form-check">

                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                required
                            />

                            <label htmlFor="privacy">
                                I agree to be contacted regarding my enquiry.
                            </label>

                        </div>


                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            SEND MESSAGE
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Contacts;