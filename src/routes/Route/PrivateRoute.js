import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(!user){
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;