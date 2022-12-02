import React from 'react';
import About from './About';
import Advertise from './Advertise/Advertise';

import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <About></About>
        </div>
    );
};

export default Home;