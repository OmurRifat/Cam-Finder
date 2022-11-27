import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import img2 from '../../../assets/logo/logo-3(removed-bg).png'
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const Navbar = () => {
    const { user, setUser, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { setUser(null) })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=" ">
            <div className="navbar bg-gray-50 shadow-md px-4 md:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={ 0 } className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="" >Products</Link></li>
                            <li tabIndex={ 0 }>
                                <Link to="" className="justify-between">
                                    Brand
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-white rounded-lg text-black">
                                    <li><Link to="" >Cannon</Link></li>
                                    <li><Link to="" >Sony</Link></li>
                                    <li><Link to="" >Nikon</Link></li>
                                </ul>
                            </li>
                            <li><Link to="" >Blogs</Link></li>
                            <li><Link to="" >Dashboard</Link></li>
                        </ul>
                    </div>

                    <Link to="/" className=" font-bold text-xl flex items-center"><img className=' hidden md:block w-1/5' src={ img2 } alt="" />CAM FINDER</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="" >Products</Link></li>
                        <li tabIndex={ 0 }>
                            <Link to="" >
                                Brand
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white rounded-lg text-black">
                                <li><Link to="" >Cannon</Link></li>
                                <li><Link to="" >Sony</Link></li>
                                <li><Link to="" >Nikon</Link></li>
                            </ul>
                        </li>
                        <li><Link to="" >Blogs</Link></li>
                        <li><Link to="" >Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <button className='btn btn-primary'
                            onClick={ handleLogout }
                        >
                            Logout
                        </button> :
                            <Button
                                to='/register'
                            >
                                Register/Login
                            </Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;