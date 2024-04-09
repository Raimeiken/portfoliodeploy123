"use client"
import React, { useEffect } from "react";
import "../style.css";

function Footer() {
    

    return (
        <>
            <footer className="footer">
                <div className="footer__container container grid">
                    <ul className="footer__links">
                        <li>
                            <a href="#about" className="footer__link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="footer__link">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="footer__link">
                                Projects
                            </a>
                        </li>
                    </ul>
                    <span className="footer__copy">
                        &#169; All Rights Reserved By <a href="">Someone.</a>
                    </span>
                </div>
            </footer>
            {/* Scroll up */}
            <a href="#" className="scrollup" id="scroll-up">
                <i className="ri-arrow-up-s-line"></i>
            </a>
        </>
    );
}

export default Footer;
