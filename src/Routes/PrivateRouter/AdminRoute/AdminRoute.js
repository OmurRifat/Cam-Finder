import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import Spinner from '../../../Pages/Shared/Spinner/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading)
        return <Spinner></Spinner>
    if (user && isAdmin)
        return children
    return <Navigate to='/login' state={ { from: location } } replace />
};

export default AdminRoute;