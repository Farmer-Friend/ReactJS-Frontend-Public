import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

const Features = () => {
    return (
        <div className="features">
            <div className="features-container">
                {/* Marketplace Section */}
                <div className="features-section">
                    <h1 className="features-title">Marketplace</h1>
                    <p className="features-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/marketplace" className="features-link">Learn More</Link>
                </div>

                {/* News Section */}
                <div className="features-section">
                    <h1 className="features-title">News</h1>
                    <p className="features-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/news" className="features-link">Learn More</Link>
                </div>

                {/* Crop Information Section */}
                <div className="features-section">
                    <h1 className="features-title">Crop Information</h1>
                    <p className="features-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/crop" className="features-link">Learn More</Link>
                </div>

                {/* Policy Section */}
                <div className="features-section">
                    <h1 className="features-title">Policy</h1>
                    <p className="features-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/policies" className="features-link">Learn More</Link>
                </div>

                {/* Schedule Services */}
                <div className="features-section">
                    <h1 className="features-title">Schedule Services</h1>
                    <p className="features-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/services" className="features-link">Learn More</Link>
                </div>
            </div>
        </div>
    );
}

export default Features;