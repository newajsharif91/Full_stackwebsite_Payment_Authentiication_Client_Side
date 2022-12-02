import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/userRole?role=buyer')
            const data = await res.json()
            return data;
        }
    })
    // console.log(sellers)

    const handleDeleteUser = (buyer) => {
        console.log(buyer);

        fetch(`http://localhost:5000/usersDelete/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`Delete ${buyer.displayName} successfully!!`)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }



    return (
        <div className='mt-10'>
            <h3 className='mb-10 text-center text-5xl font-bold text-red-700'>All Buyers</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            buyers?.map((buyer, i) =>
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <th>{buyer.displayName}</th>
                                    <th>{buyer.email}</th>
                                    <th><button onClick={() => handleDeleteUser(buyer)} className="btn bg-red-700 btn-xs">Delete</button></th>
                                </tr>

                            )
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllBuyers;