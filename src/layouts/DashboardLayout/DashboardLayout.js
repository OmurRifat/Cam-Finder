import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-white">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                        {
                            1 && <>
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

        </div>
    );
};

export default DashboardLayout;