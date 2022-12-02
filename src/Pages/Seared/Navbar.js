import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <React.Fragment>
        <li><Link className='lg:text-white' to='/'>Home</Link></li>
        <li><Link className='lg:text-white' to='/dashboardLayout'>Dashboard</Link></li>
        <li><Link className='lg:text-white' to='/blog'>Blog</Link></li>
        {user?.uid ?
            <>
                <li className='lg:text-white' onClick={handleSignOut}><Link>Sign Out</Link></li>
           </>
            :
            <li><Link className='text-white' to='/login'>Login</Link></li>}
    </React.Fragment>

    return (
        <div className="navbar flex justify-between bg-blue-300 lg:px-20">
            <div className=" p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-0 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case lg:text-2xl text-xl font-bold px-3 hover:bg-white hover:text-red-600 hover:px-5  text-white">CRAZY BIKERS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;