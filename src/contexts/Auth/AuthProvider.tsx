import { useState } from 'react';

import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const api = useApi();

    const login = async (email: string, password: string) => {
        const data: any = await api.login(email, password);

        if (data.user) {
            setUser(data.user);
            return true;
        }
        return false;
    };

    const logout = async () => {};

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
