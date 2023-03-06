import { useState } from 'react';

import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const api = useApi();

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        
        if (data.user) {
            setUser(user);
            return true;
        }
        return false;
    };

    const signout = async () => {
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
