import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            {
                loading ?
                    <Spinner></Spinner> :
                    <div className="drawer drawer-mobile bg-white">
                        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 text-base-content">
                                {
                                    isSeller || isAdmin || <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                                }
                                {
                                    isSeller && <>
                                        <li><Link to="/dashboard/add-product">Add Product</Link></li>
                                        <li><Link to="/dashboard/my-products">My Products</Link></li>

                                    </>
                                }
                                {
                                    isAdmin && <>
                                        <li><Link to="/dashboard/all-sellers">All Sellers</Link></li>
                                        <li><Link to="/dashboard/all-buyers">All Buyers</Link></li>
                                    </>
                                }

                            </ul>

                        </div>
                    </div>
            }


        </div>
    );
};

export default DashboardLayout;