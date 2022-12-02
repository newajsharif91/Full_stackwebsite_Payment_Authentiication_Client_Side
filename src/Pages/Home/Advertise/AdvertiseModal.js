import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const AdvertiseModal = ({ bikeInfo, setBikeInfo, setLoading }) => {
    const { user } = useContext(AuthContext)
    const { name, resalePrice, img, _id } = bikeInfo;

    const navigate = useNavigate()


    const [selectedDate, setSelectedDate] = useState(new Date())


    const handleBooking = event => {
        event.preventDefault();

        fetch(`http://localhost:5000/bikes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify(_id)
        })
            .then(res => res.json())
            .then(data => {
                // refetch()
                // console.log(data)
            })

        const form = event.target;
        const buyerName = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const address = form.address.value;
        const meetLocation = form.meetLocation.value;
        const phone = form.phone.value;

        // post booking in database
        const booking = {
            buyerName: buyerName,
            bikeName: name,
            date,
            email,
            meetLocation,
            address,
            phone,
            resalePrice,
            img
        }
        // console.log(booking);

        // post booking in database
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (data.acknowledged) {
                    setBikeInfo(null)
                    // refetch()
                    setLoading(true)
                    // navigate('/dashboardLayout/myOrders')
                    toast.success('Booking Confirm!!')
                }
                else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">Price: ${resalePrice}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='date' type="text" readOnly disabled defaultValue={format(selectedDate, 'PP')} placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} readOnly disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='address' required type="text" placeholder="Address" className="input input-bordered w-full" />
                        <input name='meetLocation' required type="text" placeholder="Meet Location" className="input input-bordered w-full" />
                        <input name='phone' required type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn-primary py-2 rounded-md' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default AdvertiseModal;