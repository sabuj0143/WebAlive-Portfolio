import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header-container'>
            <h3>WebAlive</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About us</Link>
                <Link to="/services">Services</Link>
            </nav>
            <button className='btn-contact-icon text-black'>
                <span>Contact Us</span>
                <FontAwesomeIcon className='contact-icon' icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Header;