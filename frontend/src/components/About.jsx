import React from "react";
import aboutImage from "../assets/about.png";
import "../styles/about.css"

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-content">

          <span className="about-subtitle">
            ABOUT US
          </span>

          <h2>
            Building Strong
            <br />
            <span>Partnerships</span> Worldwide
          </h2>

          <div className="about-line"></div>

          <p>
            AM ENTERPRISES is a dynamic business engaged in trading,
            distribution, import & export and end-to-end supply chain
            solutions. Our goal is to connect markets, deliver quality,
            and create long-term value for our clients and partners.
          </p>

          <button className="about-btn">
            READ MORE
          </button>

        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src={aboutImage}
            alt="AM Enterprises Business"
          />
        </div>

      </div>
    </section>
  );
};

export default About;