import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BikesCategoryCard from './BikesCategoryCard';
import BookingModal from './BookingModal';

const BikesCategory = () => {
    const bikes = useLoaderData()
    // console.log(bikes);


    const [bikeInfo, setBikeInfo] = useState(null)


    return (
        <div>
            <h2 className='text-red-700 text-center text-5xl font-bold mt-16 mb-10'>Welcome To  Crazy Bikers </h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    bikes?.map(bike =>
                        <div className='mb-24'
                            key={bike._id}>
                            <BikesCategoryCard
                                bike={bike}
                                setBikeInfo={setBikeInfo}
                            ></BikesCategoryCard>
                        </div>)
                }
            </div>

            { bikeInfo &&
                        <BookingModal
                        bikeInfo={bikeInfo}
                        setBikeInfo={setBikeInfo}
                    ></BookingModal>

            }

        </div>
    );
};

export default BikesCategory;