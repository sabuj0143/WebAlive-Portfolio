import React from 'react';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import About from '../About/About';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Blog from '../Blog/Blog';

const Layout = () => {
    return (
        <div className='layout-container'>
            <hr />
            <h3 className='mt-8 font-normal'>Melbourne Web Design & Development Agency</h3>
            <h1 className='mt-4'>We build amazing websites <br /> and robust software <br /> applications</h1>
            <Link to="/portfolio">
                <button className='btn-portfolio-icon text-black my-6'>
                    View Portfolio
                    <FontAwesomeIcon className='contact-icon' icon={faArrowRight} />
                </button>
            </Link>
            <br />
            <hr />
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Layout;