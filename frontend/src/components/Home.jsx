import React from "react";
import image from "../assets/m4.png";
import { FaArrowRight } from "react-icons/fa6";
import "../styles/Home.css"

const Home = () => {
    return (
        <section className="home"style={{ backgroundImage: `url(${image})` }}>
            <div className="home-overlay"></div>
            <div className="home-container">
                <div className="home-content">

                    <h1>
                        <span>AM</span> ENTERPRISES
                    </h1>

                    <h5>
                        Trading. Import & Export. Supply Chain.
                        <br />
                        Business Solutions.
                    </h5>

                    <p>
                        Delivering quality products and reliable services
                        <br />
                        across the globe.
                    </p>

                    <button>
                        GET IN TOUCH
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;