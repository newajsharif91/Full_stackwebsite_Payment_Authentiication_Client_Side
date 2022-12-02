import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Seared/Footer';
import Navbar from '../Seared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;