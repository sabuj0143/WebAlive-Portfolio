import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import Blogs from '../Blogs/Blogs';
import About from '../About/About';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigate();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;