import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
               <h3>COUNTRIES APP</h3>
            <div>
                <a href="/home">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/contact-us">Contact Us</a>
                <a href="/help">Help</a>
            </div>
        </nav>
    );
};

export default Header;