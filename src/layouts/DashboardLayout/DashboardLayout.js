import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-3 mt-4 bg-gray-100 rounded-xl">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side   rounded-t-lg">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isSeller || isAdmin || <li><Link className='bg-neutral hover:bg-primary hover:text-black mt-2' to="/dashboard/my-orders">My Orders</Link></li>
                        }
                        {
                            isSeller && <>
                                <li><Link className='bg-neutral hover:bg-primary hover:text-black mt-2' to="/dashboard/add-product">Add Product</Link></li>
                                <li><Link className='bg-neutral hover:bg-primary hover:text-black mt-2' to="/dashboard/my-products">My Products</Link></li>

                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link className='bg-neutral hover:bg-primary hover:text-black mt-2' to="/dashboard/all-sellers">All Sellers</Link></li>
                                <li><Link className='bg-neutral hover:bg-primary hover:text-black mt-2' to="/dashboard/all-buyers">All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;