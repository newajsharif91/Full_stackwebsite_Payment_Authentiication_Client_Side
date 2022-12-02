import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    const { bikeName, resalePrice } = booking;
    console.log(booking);
    return (
        <div className='mt-20'>
            <h3 className='text-4xl font-bold text-red-700'>Payment for {bikeName}</h3>
            <p className='text-xl font-bold mt-2'>Please Pay: <span className='text-red-700'>${resalePrice}</span></p>

            <div className='w-96 mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;