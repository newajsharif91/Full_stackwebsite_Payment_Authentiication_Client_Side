import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Seared/Footer';
import Navbar from '../Pages/Seared/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/sH0yjwC/119968-alien-spaceship-abducting-a-cat-404-error.gif")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl bg-red-700 p-4 font-bold text-black text-bold">404</h1>
                            <h1 className="mb-5 text-5xl bg-red-700 p-4 font-bold text-black text-bold">PAGE NOT FOUND</h1>
                            <Link to='/'><button className="btn bg-red-700 hover:px-36">Back To Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default NotFound;