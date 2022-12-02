import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Seared/Footer';
import Navbar from '../Pages/Seared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    // console.log('is admin: ',isAdmin)
    // console.log('is seller: ', isAdmin)


    return (
        <div>
            <Navbar></Navbar>


            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-80 w-40 bg-slate-600 lg:bg-white text-base-content">

                        {!isAdmin && !isSeller &&

                            <li className='text-red-700 text-xl font-bold'><Link to='/dashboardLayout/myOrders'>My Orders</Link></li>


                        }


                        {isSeller &&
                            <>
                                <li className='text-red-700 text-xl font-bold'><Link to='/dashboardLayout/addProducts'>Add Product</Link></li>
                                <li className='text-red-700 text-xl font-bold'><Link to='/dashboardLayout/myproducts'>My Products</Link></li>
                            </>
                        }


                        {isAdmin &&
                            <>
                                <li className='text-red-700 text-xl font-bold'><Link to='/dashboardLayout/allSellers'>All Sellers</Link></li>
                                <li className='text-red-700 text-xl font-bold'><Link to='/dashboardLayout/allBuyers'>All Buyers</Link></li>
                                <li className='text-red-700 text-xl font-bold'><Link to='/dashboardLayout/reportedItem'>Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;