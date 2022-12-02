import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../../Routes/Loader';
import AdvertiseCard from './AdvertisedCard';
import AdvertiseModal from './AdvertiseModal';

const Advertise = () => {



    const [bikeInfo, setBikeInfo] = useState(null)


    // const [bikes, setBikes] = useState(false)
    console.log(bikeInfo);

    const [loading, setLoading] = useState(true)




    const { data: bikesData = [], /* refetch */ } = useQuery({
        queryKey: ['bikesInfo'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bikesStatus?status=advertised')
            const data = await res.json()
            setLoading(false)

            // setBikes(true)
            return data;
        }
    })
    // console.log(bikesData);



    if (bikesData.length === 0) {
        return <p></p>
    }

    if (loading) {
        return <div className='mt-20'><Loader></Loader></div>
    }



    return (
        <div>
            <h2 className='text-red-700 text-center text-5xl font-bold mt-16 mb-10'>Advertisement </h2>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    bikesData.map(bike => <AdvertiseCard
                        key={bike._id}
                        bike={bike}
                        // refetch={refetch}
                        // setLoading={setLoading}
                        setBikeInfo={setBikeInfo}
                    ></AdvertiseCard>
                    )
                }
            </div>


            {bikeInfo &&
                <AdvertiseModal
                    bikeInfo={bikeInfo}
                    setBikeInfo={setBikeInfo}

                    setLoading={setLoading}
                // refetch={refetch}
                ></AdvertiseModal>

            }


        </div>
    );
};


export default Advertise;