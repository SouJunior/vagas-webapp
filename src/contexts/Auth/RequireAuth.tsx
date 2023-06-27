import { useContext, useEffect} from 'react';
import { AuthContext } from './AuthContext';

import Login from '../../pages/Login';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth: any = useContext(AuthContext);

    useEffect(() => {
        auth.validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (auth.isAuth === null) {
        return null;
    }
    if (!auth.isAuth) {
        return <Login />;
    }
    return children;
};
