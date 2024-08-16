import { Outlet } from 'react-router-dom';
import FooterDefault from '../components/FooterDefault';

const AuthLayout = () => {
    return (
        <>
            <Outlet />
            <FooterDefault />
        </>
    );
};

export default AuthLayout;
