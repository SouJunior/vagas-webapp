import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    const api = useApi();

    // Vai executar uma vez sempre que o componente for renderizado
    // useEffect(() => {
    //     const validateToken = async () => {
    //         const storagedData = localStorage.getItem('authToken');
    //         if (storagedData) {
    //             const data = await api.validateToken();
    //             if (data.user) {
    //                 setUser(data.user);
    //             }
    //         }
    //     };
    //     validateToken();
    // }, []);

    const login = async (email: string, password: string, type: string) => {
        const res = await api.login(email, password, type);

        if (res.info && res.token) {
            setUser(res.info);
            setToken(res.token);
            return true;
        }
        return false;
    };

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    };

    const register = async (
        name: string,
        email: string,
        password: string,
        cnpj: string,
    ) => {
        const res: any = await api.register(name, email, password, cnpj);

        if (res.data.info && res.data.token) {
            setUser(res.data.info);
            setToken(res.data.token);
            return true;
        }
        return false;
    };

    const logout = async () => {};

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
