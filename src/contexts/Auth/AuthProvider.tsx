import { User } from '../../@types/User';
import { useApi } from '../../hooks/useApi';
import { AuthContext } from './AuthContext';
import { useState } from 'react';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const api = useApi();

    const signin = async (email: string, password: string) => {
        const data = await (await api).signin(email, password);
        if (data.user) {
            setUser(user);
            return true;
        }
        return false;
    };

    const signout = async () => {
        (await api).signout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
