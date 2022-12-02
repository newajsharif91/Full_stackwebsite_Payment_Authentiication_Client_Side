import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const { loading, setLoading } = useContext(AuthContext)

    const { user } = useContext(AuthContext)
    // console.log(user)
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleAddProduct = (data) => {
        // console.log(data);

        const bikeInfo = {
            sellersName: user.displayName,
            email: user.email,
            mobileNumber: data.mobileNumber,
            postDate: date,
            name: data.name,
            img: data.img,
            location: data.location,
            category: data.category,
            cc: data.cc,
            buyYear: data.buyYear,
            yearsOfUse: data.yearsOfUse,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            conditionType: data.condition,

        }

        addBike(bikeInfo)
        toast('Add Product Successfully')
        // reset.form()
        navigate('/dashboardLayout/myproducts')

        // console.log(bikeInfo)
    }


    const addBike = (bikeInfo) => {
        const bikeData = bikeInfo
        // console.log(bikeData)

        fetch('http://localhost:5000/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bikeData)
        })
        // setLoading(true)
    }

    // if(loading){
    //     return <p>loading</p>
    // }






    return (
        <div className=' lg:mb-20 lg:mt-10 my-10 px-3 lg:px-0 md:px-6 '>
            <div className='lg:w-11/12 mx-auto lg:p-6 p-3 '>
                <p className='text-5xl mb-5 text-red-700 font-bold text-center'>Add Your Product</p>

                <form className='' onSubmit={handleSubmit(handleAddProduct)}>


                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className=''>

                            <div>
                                <label className="label"><span className="label-text">Seller's Name</span></label>
                                <input {...register("sellersName")}
                                    disabled defaultValue={user.displayName}
                                    type="text" placeholder="Seller Name" className="input input-bordered w-full" />

                            </div>

                            <div>
                                <label className="label"><span className="label-text">Email</span></label>
                                <input {...register("email")} disabled defaultValue={user.email} type="email" placeholder="Email" className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Seller's Mobile Number</span></label>
                                <input {...register("mobileNumber", { required: "Mobile Number is required" })} defaultValue='01111111' type="text" placeholder="Mobile Number" className="input input-bordered w-full" />
                                {errors.mobileNumber && <p className='text-red-600 text-left' role="alert">{errors.mobileNumber?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Post's Date</span></label>
                                <input {...register("date")} disabled defaultValue={date} type="text" className="input input-bordered w-full" />
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Bike Name</span></label>
                                <input {...register("name", { required: "Bike Name is required" })} type="text" defaultValue='KTM Duke' placeholder="Bike Name" className="input input-bordered w-full" />
                                {errors.name && <p className='text-red-600 text-left' role="alert">{errors.name?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Bike Image URL</span></label>
                                <input {...register("img", { required: "Bike Name is required" })} type="text" defaultValue='https://www.bforbiker.com/wp-content/uploads/2022/09/KTM-125-Duke-img.jpg' placeholder="Bike Img URL" className="input input-bordered w-full" />
                                {errors.img && <p className='text-red-600 text-left' role="alert">{errors.img?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Location</span></label>
                                <input type="text"  {...register("location", { required: "Location is required" })}
                                    className='input input-bordered w-full' defaultValue='Dhaka' placeholder='Location' />
                                {errors.location && <p className='text-red-600 text-left' role="alert">{errors.location?.message}</p>}
                            </div>

                        </div>


                        <div>

                            <div>
                                <label className="label"><span className="label-text">Select Category</span></label>
                                <select className=' input input-bordered w-full' {...register("category", { required: true })}>
                                    <option value="Sports">Sports</option>
                                    <option value="Cruiser">Cruiser</option>
                                    <option value="Off-Road">Off-Road</option>
                                </select>
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Engine CC</span></label>
                                <input type="text"  {...register("cc", { required: "Engine CC is required" })}
                                    className='input input-bordered w-full ' defaultValue='165' placeholder='Engine CC' />
                                {errors.cc && <p className='text-red-600 text-left' role="alert">{errors.cc?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Year of buy</span></label>
                                <input type="text"  {...register("buyYear", { required: "Year of buy is required" })}
                                    className='input input-bordered w-full ' defaultValue='2020' placeholder='Year of buy' />
                                {errors.buyYear && <p className='text-red-600 text-left' role="alert">{errors.buyYear?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Years Of Use</span></label>
                                <input type="text"  {...register("yearsOfUse", { required: "Years Of Use is required" })}
                                    className='input input-bordered w-full' defaultValue='2' placeholder='Years Of Use' />
                                {errors.yearsOfUse && <p className='text-red-600 text-left' role="alert">{errors.yearsOfUse?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Original Price</span></label>
                                <input type="text"  {...register("originalPrice", { required: "Original Price is required" })}
                                    className='input input-bordered w-full ' defaultValue='4000' placeholder='Original Price' />
                                {errors.originalPrice && <p className='text-red-600 text-left' role="alert">{errors.originalPrice?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Resale Price</span></label>
                                <input type="text"  {...register("resalePrice", { required: "Resale Price is required" })}
                                    className='input input-bordered w-full' defaultValue='2000' placeholder='Resale Price' />
                                {errors.resalePrice && <p className='text-red-600 text-left' role="alert">{errors.resalePrice?.message}</p>}
                            </div>

                            <div>
                                <label className="label"><span className="label-text">Condition</span></label>
                                <select className=' input input-bordered w-full' {...register("condition")}>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="It's Ok">It's Ok</option>
                                </select>
                            </div>

                            {/* <div>
                                <label className="label"><span className="label-text">Condition</span></label>
                                <input type="text"  {...register("conditionType", { required: "Condition is required" })}
                                    className='input input-bordered w-full ' defaultValue='good' placeholder='Condition' />
                                {errors.conditionType && <p className='text-red-600 text-left' role="alert">{errors.conditionType?.message}</p>}
                            </div> */}

                        </div>
                    </div>


                    <input className='btn bg-red-700 lg:w-1/4 w-full mx-auto mt-10' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProducts;