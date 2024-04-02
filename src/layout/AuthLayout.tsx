import { Outlet } from 'react-router-dom';
import { RequireAuth } from '../contexts/Auth/RequireAuth';

const AuthLayout = () => {
    return (
        <RequireAuth>
            <Outlet />
        </RequireAuth>
    );
};

export default AuthLayout;
