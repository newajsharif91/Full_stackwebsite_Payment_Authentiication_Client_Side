import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const {logOut} = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className='text-red-700 text-4xl text-center'>Something went wrong!!</p>
            <p className='text-red-700 text-xl text-center'>{error.statusText || error.message}</p>
            <p className='text-red-700 text-3xl text-center'>Please <button className='text-white btn-sm font-bold btn bg-red-700 mt-5' onClick={handleSignOut}><Link>SignOut </Link></button> and sign back again.</p>
        </div>
    );
};

export default DisplayError;