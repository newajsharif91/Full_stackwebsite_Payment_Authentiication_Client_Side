import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
    const { user, setLoading } = useContext(AuthContext)
    // console.log(user);



    const url = `http://localhost:5000/bikesemail?email=${user?.email}`
    // const urt = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bikes = [], refetch, isLoading } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            setLoading(false)
            return data;
        }
    })


    const handleAdvertise = (id) => {

        fetch(`http://localhost:5000/bikesAdvertise/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast('Add Advertise Successfully!!')
                }
                else {
                    toast.error(data.message)
                }
            })
    }



    const handleDeleteProduct = (bike) => {
        // console.log('delete')

        fetch(`http://localhost:5000/bikes/${bike._id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount > 0) {
                    toast(`Delete ${bike.name} successfully!!`)
                    refetch();
                }
            })
    }


    // console.log(bikes)

    return (
        <div className='mt-10'>
            <div className="overflow-x-auto w-full">
                <p className='text-5xl mb-5 text-red-700 font-bold text-center'>My Products</p>
                <table className="table w-full mt-5">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Image</th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bikes?.map((bike, i) =>
                                <tr key={bike._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={bike.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <th>{bike.name}</th>
                                    <th>${bike.resalePrice}</th>
                                    {bike?.status !== 'booked' ?
                                        <th>Available</th>
                                        :
                                        <th>Booked</th>

                                    }

                                    {bike?.status === 'advertised' || bike?.status === 'booked' ?
                                        <th><button className="btn btn-disabled btn-xs">Advertised</button></th>
                                        :
                                        <th><button onClick={() => handleAdvertise(bike._id)} className="btn bg-green-700 btn-xs">Advertise</button></th>
                                    }

                                    <th><button onClick={() => handleDeleteProduct(bike)} className="btn bg-red-700 px-4 outline-none btn-xs">X</button></th>
                                </tr>

                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;