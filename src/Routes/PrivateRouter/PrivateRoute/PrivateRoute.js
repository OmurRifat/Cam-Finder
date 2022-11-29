import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading)
        return <progress className="progress w-56 bg-primary"></progress>
    if (!user)
        return <Navigate to='/login' state={ { from: location } } replace />
    return children
};

export default PrivateRoute;