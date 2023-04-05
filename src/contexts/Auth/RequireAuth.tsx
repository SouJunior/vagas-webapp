import { useContext} from 'react';
import { AuthContext } from './AuthContext';

import Login from '../../pages/Login';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth: any = useContext(AuthContext);

    if (!auth || auth.user === null) {
        // TODO: Essa verificação acontece 2x verificar o porque
        return <Login />;
    }
    return children;
};
