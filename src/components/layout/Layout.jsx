import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import About from '../About/About';

const Layout = () => {
    return (
        <div className='layout-container'>
            <hr />
            <h3>Melbourne Web Design & Development Agency</h3>
            <h1>We build amazing websites <br /> and robust software <br /> applications</h1>
            <button className='btn-portfolio-icon'>
                View Portfolio
                <FontAwesomeIcon className='contact-icon' icon={faArrowRight} />
            </button>
            <br />
            <hr />
            <About></About>
        </div>
    );
};

export default Layout;