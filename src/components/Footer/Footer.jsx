import React from 'react';
import './Footer.css';

const Footer = () => {
    
    const copy = String.fromCharCode(0x00a9);
    const currentYear = new Date().getFullYear();
    
    return(
        <footer id="footer">
            <div>{copy} ReyAbdul, {currentYear}.</div>
        </footer>
    )
};

export default Footer;