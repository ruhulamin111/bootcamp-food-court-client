import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const location = useLocation()

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace ></Navigate >
    }

    return children;
};

export default RequireAuth;