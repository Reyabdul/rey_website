import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

    /*============= Change Background Header ===================*/ 
    window.addEventListener('scroll', function() {
        const header = document.querySelector(".header");
        //when scroll is higher than 200 viewport height, scroll button (show-scroll) will show
        if (this.scrollY >= 80) header.classList.add("scroll-header");
         else header.classList.remove("scroll-header");
        
    })

    /*============= TOGGLE MENU ===================*/ 
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className='header'>
            <nav className='nav'>
                <NavLink className='nav__logo' to='/'>Rey</NavLink>

                <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a 
                            href='#home' 
                            onClick={() => setActiveNav('#home')} 
                            className={activeNav === "#home" 
                                ? "nav__link active-link" 
                                : "nav__link"}>
                                Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' 
                            onClick={() => setActiveNav('#about')} 
                            className={activeNav === "#about" 
                                ? "nav__link active-link" 
                                : "nav__link"}>
                                About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' 
                                onClick={() => setActiveNav('#skills')} 
                                className={activeNav === "#skills" 
                                    ? "nav__link active-link" 
                                    : "nav__link"}>
                                Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#works' 
                                onClick={() => setActiveNav('#works')} 
                                className={activeNav === "#works" 
                                    ? "nav__link active-link" 
                                    : "nav__link"}>
                                Works
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' 
                                onClick={() => setActiveNav('#contact')} 
                                className={activeNav === "#contact" 
                                    ? "nav__link active-link" 
                                    : "nav__link"}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i 
                        class="uil uil-times nav-times nav__close" 
                        onClick={() => showMenu(!Toggle)}>
                    </i>
                </div>

                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-bars "></i>
                </div>
            </nav>
        </header>
    )

};

export default Navigation;