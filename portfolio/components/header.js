"use client"

import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMoonClearLine, RiSunLine } from "react-icons/ri";
import ScrollReveal from "scrollreveal";
// import emailjs from "emailjs-com"; // Assuming you're using emailjs package

import "../style.css";

function Navbar() {
    const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Toggle theme based on localStorage or default to light theme
    const savedTheme = localStorage.getItem("selected-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply the current theme
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Add event listeners for menu toggle
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navMenu = document.getElementById("nav-menu");

    const toggleMenu = () => {
      navMenu.classList.toggle("show-menu");
    };

    if (navToggle) {
      navToggle.addEventListener("click", toggleMenu);
    }

    if (navClose) {
      navClose.addEventListener("click", toggleMenu);
    }

    // Remove event listeners when component unmounts
    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", toggleMenu);
      }
      if (navClose) {
        navClose.removeEventListener("click", toggleMenu);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (typeof window !== 'undefined') {
        // ScrollReveal initialization
        const sr = ScrollReveal({
          origin: "top",
          distance: "60px",
          duration: 2000,
          delay: 400,
        });

        // Configure your scroll reveal targets here
        sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: "right" });
        sr.reveal(
          `.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`,
          { origin: "left" }
        );
        sr.reveal(`.services__card, .projects__card`, { interval: 100 });

        // Clean up ScrollReveal when component unmounts
        return () => sr.destroy();
    }
    }, []); // Empty dependency array ensures this effect runs only once
// Empty dependency array ensures this effect runs only once

  // Additional useEffect hooks for other functionalities like emailJS, theme, etc.

  return (
    <>
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">
                <span className="nav__logo-circle">R</span>
                <span className="nav__logo-name">Something name.</span>
            </a>

            <div className="nav__menu" id="nav-menu">
                <span className="nav__title">Menu</span>

                <h3 className="nav__name">Name</h3>

                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">About Us</a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">Services</a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects" className="nav__link">Projects</a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link nav__link-button">Contact us</a>
                    </li>
                </ul>

                {/* <!-- Close button --> */}
                <div className="nav__close" id="nav-close">
                    <i><RiCloseLine/></i>
                </div>
            </div>

            <div className="nav__buttons">
                {/* <!-- Theme button --> */}
                <i className="change-theme" id="theme-button" onClick={toggleTheme}>
                    {theme === "light" ? <RiMoonClearLine /> : <RiSunLine/>}
                </i>
                

                {/* <!-- Toggle button --> */}
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-4-line"></i>
                </div>
            </div>
        </nav>
    </header>
    </>
  );
}

export default Navbar;