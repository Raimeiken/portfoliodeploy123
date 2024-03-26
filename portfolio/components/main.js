import "../style.css"
import { RiFacebookCircleLine, RiInstagramLine, RiLinkedinBoxLine, RiGithubLine, RiCodeBoxLine, RiLayout2Line, RiSmartphoneLine } from "react-icons/ri";
import Image from "next/image";
import image1 from "../public/ScreenshotPort3 (11).png"
import image2 from "../public/ScreenshotPort2 (11).png"



function MainHome() {
  return (
    <main className="main">
        <section className="home section" id="home">
            <div className="home__container container grid">
                <h1 className="home__name">
                    Something name
                </h1>

                <div className="home__perfil">
                    <div className="home__image">
                        <Image src={image1} layout='inherit' className='home__img'alt='image1'/>
                        <div className="home__shadow"></div>


                        <div className="geometric-box"></div>
                    </div>

                    <div className="home__social">
                        <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                            <RiInstagramLine/>
                        </a>

                        <a href="https://www.linkedin.com/" target="_blank" className="home__social-link">
                            <RiLinkedinBoxLine/>
                        </a>

                        <a href="https://www.github.com/" target="_blank" className="home__social-link">
                            <RiGithubLine/>
                        </a>
                    </div>
                </div>

                <div className="home__info">
                    <p className="home__description">
                        <b>Frontend Developer</b>with knowledge in web development and design,
                        We offer the best projects resulting in satisfying work.
                    </p>

                    <a href="#about" className="home__scroll">
                        <div className="home__scroll-box">
                            <i className="ri-arrow-down-s-line"></i>
                        </div>

                        <span className="home__scroll-text">Scroll Down</span>
                    </a>
                </div>
            </div>
        </section>

        {/* <!-- about --> */}
        <section className="about section" id="about">
            <div className="about__container container grid">
                <h2 className="section__title-1">
                    <span>About Us</span>
                </h2>

                <div className="about__perfil">
                    <div className="about__image">
                        <Image src={image2} alt="image" className="about__img"/>

                        <div className="about__shadow"></div>

                        <div className="geometric-box"></div>
                        {/* <!-- <img src="" alt="" className="about__line"> --> */}
                        <div className="about__box"></div>
                    </div>
                </div>

                <div className="about__info">
                    <p className="about__description">
                        Creating <b>Web Pages</b> with <b>UI/UX User Interface</b> I will be more than happy to work on your projects.
                    </p>
                    <ul className="about__list">
                        <li className="about__item">
                            <b>My Skills Are:</b>HTML CSS Javascript React Github Figma.
                        </li>
                    </ul>

                    <div className="about__buttons">
                        <a href="#contact" className="button">
                            <i className="ri-send-plane-line"></i> Contact Me
                        </a>

                        <a href="https://www.linkedin.com/" target="_blank" className="button__ghost">
                            <i className="ri-linkedin-box-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Service --> */}
        <section className="services section" id="services">
            <h2 className="section__title-2">
                <span>Services.</span>
            </h2>

            <div className="services__container container grid">
                <article className="services__card">
                    <div className="services__border"></div>

                    <div className="services__content">
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i><RiCodeBoxLine/></i>
                        </div>

                        <h2 className="services__title">Development</h2>

                        <p className="services__description">
                            Custom web development tailored to your specifications
                            designed to provide a flawless user experience.
                        </p>
                    </div>
                </article>

                <article className="services__card">
                    <div className="services__border"></div>

                    <div className="services__content">
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i><RiLayout2Line/></i>
                        </div>

                        <h2 className="services__title">Web Design</h2>

                        <p className="services__description">
                            Beautiful and elegant design with interfaces that are intuitive
                            efficient and pleasant to use for the user.
                        </p>
                    </div>
                </article>

                <article className="services__card">
                    <div className="services__border"></div>

                    <div className="services__content">
                        <div className="services__icon">
                            <div className="services__box"></div>
                            <i><RiSmartphoneLine/></i>
                        </div>

                        <h2 className="services__title">Mobile App</h2>

                        <p className="services__description">
                            Design and transform website projects into mobile apps to provide a seamless user experience.
                        </p>
                    </div>
                </article>

            </div>
        </section>

        {/* <!-- Project --> */}

        <section className="projects section" id="projects">
            <h2 className="section__title-1">
                <span>Projects.</span>
            </h2>

            <div className="projects__container container grid">
                <article className="projects__card">
                    <div className="projects__image">
                        <img src="assets/img/skyward-Harp.png" alt="image" className="projects__img"/>

                        <a href="#" className="projects__button button">
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">Website</h3>
                        <h2 className="projects__title">??? Website</h2>

                        <p className="projects__description">
                            Project that you can carry out in the design and structure of the layout
                            showing the design at the client's request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a href="https://github.com/" target="_blank" className="projects__link">
                            <i className="ri-github-line"></i> View
                        </a>

                        <a href="https://dribbble.com" target="_blank" className="projects__link">
                            <i className="ri-dribbble-line"></i> View
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <div className="projects__image">
                        <img src="assets/img/engulfing lightning.jpg" alt="image" className="projects__img"/>

                        <a href="#" className="projects__button button">
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">App</h3>
                        <h2 className="projects__title">??? App</h2>

                        <p className="projects__description">
                            Project that you can carry out in the design and structure of the layout
                            showing the design at the client's request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a href="https://github.com/" target="_blank" className="projects__link">
                            <i className="ri-github-line"></i> View
                        </a>

                        <a href="https://dribbble.com" target="_blank" className="projects__link">
                            <i className="ri-dribbble-line"></i> View
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <div className="projects__image">
                        <img src="assets/img/mistplitter.png" alt="image" className="projects__img"/>

                        <a href="#" className="projects__button button">
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">App</h3>
                        <h2 className="projects__title">??? App</h2>

                        <p className="projects__description">
                            Project that you can carry out in the design and structure of the layout
                            showing the design at the client's request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a href="https://github.com/" target="_blank" className="projects__link">
                            <i className="ri-github-line"></i> View
                        </a>

                        <a href="https://dribbble.com" target="_blank" className="projects__link">
                            <i className="ri-dribbble-line"></i> View
                        </a>
                    </div>
                </article>

                {/* <article className="projects__card">
                    <div className="projects__image">
                        <img src="assets/img/thousand floating port.jpg" alt="image" className="projects__img"/>

                        <a href="#" className="projects__button button">
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">Website</h3>
                        <h2 className="projects__title">??? Website</h2>

                        <p className="projects__description">
                            Project that you can carry out in the design and structure of the layout,
                            showing the design at the client's request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a href="https://github.com/" target="_blank" className="projects__link">
                            <i className="ri-github-line"></i> View
                        </a>

                        <a href="https://dribbble.com" target="_blank" className="projects__link">
                            <i className="ri-dribbble-line"></i> View
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <div className="projects__image">
                        <img src="assets/img/wolf' gravstone.png" alt="image" className="projects__img"/>

                        <a href="#" className="projects__button button">
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">Website</h3>
                        <h2 className="projects__title">??? Website</h2>

                        <p className="projects__description">
                            Project that you can carry out in the design and structure of the layout,
                            showing the design at the client's request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a href="https://github.com/" target="_blank" className="projects__link">
                            <i className="ri-github-line"></i> View
                        </a>

                        <a href="https://dribbble.com" target="_blank" className="projects__link">
                            <i className="ri-dribbble-line"></i> View
                        </a>
                    </div>
                </article>

                <article className="projects__card">
                    <div className="projects__image">
                        <img src="assets/img/Weapon_Vortex_Vanquisher_2nd_3D.png" alt="image" className="projects__img"/>

                        <a href="#" className="projects__button button">
                            <i className="ri-arrow-right-up-line"></i>
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">Website</h3>
                        <h2 className="projects__title">??? Website</h2>

                        <p className="projects__description">
                            Project that you can carry out in the design and structure of the layout,
                            showing the design at the client's request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a href="https://github.com/" target="_blank" className="projects__link">
                            <i className="ri-github-line"></i> View
                        </a>

                        <a href="https://dribbble.com" target="_blank" className="projects__link">
                            <i className="ri-dribbble-line"></i> View
                        </a>
                    </div>
                </article> */}
            </div>
        </section>

        {/* <!-- Contact --> */}
        <section className="contact section" id="contact">
            <div className="contact__container grid">
                <div className="contact__data">
                    <h2 className="section__title-2">
                        <span>Contact Us.</span>
                    </h2>

                    <p className="contact__description-1">
                        I will read all emails.
                        Send me any message you want and I'll get back to you.
                    </p>

                    <p className="contact__description-2">
                        I need your <b>Name</b> and <b>Email Address</b> and I will get back to you soon as I can.
                    </p>

                    <div className="geometric-box"></div>
                </div>

                <div className="contact__mail">
                    <h2 className="contact__title">
                        Send Me A Message
                    </h2>

                    <form action="" className="contact__form" id="contact-form">
                        <div className="contact__group">
                            <div className="contact__box">
                                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First Name"/>
                                <label for="name" className="contact__label">First Name</label>
                            </div>

                            <div className="contact__box">
                                <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email Address"/>
                                <label for="email" className="contact__label">Email Address</label>
                            </div>
                        </div>

                        <div className="contact__box">
                            <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder="Subject"/>
                            <label for="subject" className="contact__label">Subject</label>
                        </div>

                        <div className="contact__box contact__area">
                            <textarea name="user_message" id="message" className="contact__input" required placeholder="Message"></textarea>
                            <label for="message" className="contact__label">Message</label>
                        </div>

                        <p className="contact__message" id="contact-message"></p>

                        <button type="submit" className="contact__button button">
                            <i className="ri-send-plane-line"></i> Send Message
                        </button>
                    </form>
                </div>

                <div className="contact__social">
                    <img src="" alt="" className="contact__social-arrow"/>

                    <div className="contact__social-data">
                        <div>
                            <p className="contact__social-description-1">
                                If an email is not sent
                            </p>

                            <p className="contact__social-description-1">
                                Write me on my social networks
                            </p>
                        </div>

                        <div className="contact__social-links">
                            <a href="https://www.facebook.com/" target="_blank" className="contact__social-link">
                            <RiFacebookCircleLine />

                            </a>

                            <a href="https://www.instagram.com/" target="_blank" className="contact__social-link">
                                <RiInstagramLine/>
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" className="contact__social-link">
                                <RiLinkedinBoxLine/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    
  )
}

export default MainHome
