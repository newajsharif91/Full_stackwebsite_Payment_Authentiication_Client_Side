import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const ReportedItem = () => {

    const { data: reportedDikesData = [], refetch } = useQuery({
        queryKey: ['bikesInfo'],
        queryFn: async () => {
          const res = await fetch(
            "http://localhost:5000/bikesReported?report=reported"
          );
          const data = await res.json();
          refetch();
          // setBikes(true)
          //disable (Ture)
          return data;
        }
    })
    console.log(reportedDikesData)





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





    return (
        <div className='mt-10'>
            <h3 className='mb-10 text-center text-5xl font-bold text-red-700'>Reported Items</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Image</th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            reportedDikesData?.map((bike, i) =>
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

export default ReportedItem;