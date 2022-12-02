import React from 'react';


import toast from 'react-hot-toast';

const BikesCategoryCard = ({ bike, setBikeInfo }) => {
    const { category, buyYear, postDate, cc, conditionType,
        description, hp, img, location, mobileNumber,
        name, originalPrice, resalePrice, sellersName, yearsOfUse, status, _id, report } = bike;




    const handleReport = () => {

        if (window.confirm("Are you want to report?")) {

            fetch(`http://localhost:5000/bikesReport/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(`${name}, is reported`)
                })
        }


    }

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-72' src={img} alt="bikes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-red-700 fond-bold">{name}</h2>
                    <h2 className="text-xl font-bold">Features:</h2>

                    <h4 className="text-md font-bold mb-3">Price: ${resalePrice}</h4>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                            <h4 className="text-sm font-bold">Engine: {cc} cc</h4>
                            <h4 className="text-sm font-bold">Condition: {conditionType}</h4>
                            <h4 className="text-sm font-bold">Year of Use: {yearsOfUse}</h4>
                            <h4 className="text-sm font-bold">Seller Name: {sellersName}</h4>


                        </div>

                        <div className='grid grid-cols-1 gap-2'>
                            <h4 className="text-sm font-bold">Buy in: {buyYear}</h4>
                            <h4 className="text-sm font-bold">Buying Price: ${originalPrice}</h4>
                            <h4 className="text-sm font-bold">Location: {location}</h4>
                            <h4 className="text-sm font-bold">Post Date: {postDate}</h4>
                        </div>
                    </div>

                    {status !== 'booked' ?
                        <label htmlFor="booking-modal"
                            className="btn bg-blue-700 btn-sm mt-3 hover:px-10"
                            onClick={() => setBikeInfo(bike)}>Book Now
                        </label>
                        :
                        <label
                            className="btn btn-sm mt-3"
                        >Booked
                        </label>
                    }

                    {report !== 'reported' ?
                        <label className="btn bg-red-700 btn-sm mt-2 hover:px-10"
                            onClick={handleReport}>Report To Admin
                        </label>
                        :
                        <label
                            className="btn btn-sm mt-3"
                        >Reported To Admin
                        </label>
                    }



                </div>
            </div>

        </div>
    );
};

export default BikesCategoryCard;

