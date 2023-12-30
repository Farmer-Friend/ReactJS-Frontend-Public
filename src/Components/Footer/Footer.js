import React from "react";
import "./Footer.css";

/**
 * Footer component for the application.
 * Renders a footer section with logo, links, and contact information.
 */

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__left">
                    <h1>About Us</h1>
                    <img
                        src="https://s.tmimgcdn.com/scr/1200x750/180200/tractor-farm-logo-template_180278-original.png"
                        alt="Farm Connect-1 Logo"
                        className="footer__logo"
                    />
                    <p className="footer__container__left__text">
                        This is a demo website for Farm Connect 1. It is a marketplace for farmers to sell their crops.
                    </p>
                </div>
                <div className="footer__container__mid">
                    <div className="footer__container__mid__links">
                        <h2>Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>Crops</li>
                            <li>Marketplace</li>
                            <li>News</li>
                            <li>Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__container__right">
                    <div className="footer__container__right__authors">
                        <h2>Authors</h2>
                        <ul>
                            <li>
                                <a href="https://nitishpandey.com.np" target="_blank">Nitish Pandey</a>
                            </li>
                            <li>
                                <a href="https://sulabh.info.np" target="_blank">Sulabh Nepal</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2023 Farmer Friends. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
