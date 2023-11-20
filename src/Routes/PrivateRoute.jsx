import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className='text-center my-20'>
            <span className="loading loading-bars text-success loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;