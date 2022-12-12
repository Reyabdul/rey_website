import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className='navigation'>
            <nav className='navbar'>
                <div className='logo-container'>
                    <NavLink className="navbar-logo">Rey Abdul</NavLink>
                </div>
                <div>
                    <ul className='navbar-list'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink className='nav-link' to="/projects">
                                Projects
                        </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

};

export default Navigation;