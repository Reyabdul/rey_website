import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

    return (
        <div className='navigation'>
            <nav className='navbar'>
                <div className='logo-container'>
                    <NavLink className="navbar-logo">Rey Abdul</NavLink>
                </div>
                <div className='navbar-menu'>
                    <ul className='navbar-list'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink className='nav-link' to="/Work">
                                Work
                        </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/contact">
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )

};

export default Navigation;