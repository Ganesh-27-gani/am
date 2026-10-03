import React, { useState } from "react";
import "../styles/contact.css";

import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaYoutube,
FaXTwitter
} from "react-icons/fa6";

const Contacts = () => {

const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
});

const [loading, setLoading] = useState(false);
const [response, setResponse] = useState("");

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponse("");

    try {

        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/amfashion/contact`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        const text = await res.text();

        let data = {};

        if (text) {
            try {
                data = JSON.parse(text);
            } catch {
                throw new Error(
                    `Invalid server response. Status: ${res.status}`
                );
            }
        }

        if (!res.ok) {
            throw new Error(
                data.message || `Request failed with status ${res.status}`
            );
        }

        setResponse(
            data.message || "Thank you! Your enquiry has been submitted successfully."
        );

        setFormData({
            fullName: "",
            phone: "",
            email: "",
            subject: "",
            message: ""
        });

    } catch (error) {

        console.error("Contact form error:", error);

        setResponse(
            error.message ||
            "Unable to submit your enquiry. Please try again."
        );

    } finally {
        setLoading(false);
    }
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
                            <label htmlFor="fullName">
                                Name
                            </label>

                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="phone">
                                Phone
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[6-9][0-9]{9}"
                                maxLength="10"
                                title="Enter a valid 10-digit Indian mobile number"
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Send"}
                        </button>

                        {response && (
                            <p
                                role="status"
                                aria-live="polite"
                                className="contact-response"
                            >
                                {response}
                            </p>
                        )}

                    </form>

                </div>

                <div className="contact-info">

                    <div className="info-block">

                        <h5>
                            Visit us
                        </h5>

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
