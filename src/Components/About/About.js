import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <h1 className="about-title">About</h1>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="about-right">
                <h3 className="project-details-title">Project Details</h3>
                <ul className="about-list">
                    <li className="about-list-item">Client: Threads</li>
                    <li className="about-list-item">Role: Art Direction, Design, Development</li>
                    <li className="about-list-item">Date: January 2020</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
