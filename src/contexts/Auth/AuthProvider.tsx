import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const api = useApi();

    // Vai executar uma vez sempre que o componente for renderizado
    useEffect(() => {
        const validateToken = async () => {
            const storagedData = localStorage.getItem('authToken');
            if (storagedData) {
                const data = await api.validateToken(storagedData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        };
        validateToken();
    }, [api]);

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    };

    const login = async (email: string, password: string, userType: string) => {
        const data: any = await api.login(email, password, userType);
        console.log(data)

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    };

    const register = async (
        name: string,
        email: string,
        password: string,
        cnpj: string,
    ) => {
        const data: any = await api.register(name, email, password, cnpj);

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    };

    const logout = async () => {};

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
