import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import AllBuyers from './AdminSec/AllBuyers';
import AllSellers from './AdminSec/AllSellers';
import ReportedItem from './AdminSec/ReportedItem';
import MyOrders from './BuyeSec/MyOrders';
import AddProducts from './SellerSec/AddProducts';
import MyProducts from './SellerSec/MyProducts';

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    // console.log(user);

    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>

            {!isSeller && !isAdmin &&
                <MyOrders></MyOrders>
            }

            {isSeller && !isAdmin &&
                <div>
                    <MyProducts></MyProducts>
                </div>
            }

            {!isSeller && isAdmin &&
                <div>
                    <AllSellers></AllSellers>
                </div>
            }

        </div>
    );
};

export default Dashboard;