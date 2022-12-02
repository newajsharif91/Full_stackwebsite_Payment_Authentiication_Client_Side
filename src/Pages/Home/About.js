import React from 'react';

const About = () => {
    return (
        <div className='mt-36 mb-20'>
            <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/jh98ZVw/f43908e33747f32007916df9fe96c508.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" my-20">
                        <h1 className="mb-5 text-5xl font-bold">Our Goal</h1>
                        <p className="mb-2 text-2xl font-bold">Bringing buyers and sellers together to fulfill their needs</p>
                        <p className="mb-5 text-2xl font-bold">Exchange your craze to get new craze. It is best way to meet new craze in every moment!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;