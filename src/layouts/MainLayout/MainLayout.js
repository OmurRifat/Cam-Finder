import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    if (loading)
        return <Spinner></Spinner>
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;