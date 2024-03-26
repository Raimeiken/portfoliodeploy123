import { RiCloseLine, RiMoonClearLine } from "react-icons/ri"
import "../style.css"
function Navbar() {
  return (
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
                <i className="change-theme" id="theme-button"><RiMoonClearLine/></i>

                {/* <!-- Toggle button --> */}
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-4-line"></i>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar


