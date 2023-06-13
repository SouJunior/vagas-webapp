import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLogin, setIsLogin] = useState<'login' | 'register'>('login');

    const api = useApi();

    // Vai executar uma vez sempre que o componente for renderizado
    // useEffect(() => {

    // }, [api]);

    // const validateToken = async () => {
    //     const storagedData = localStorage.getItem('authToken');

    //     if (storagedData) {
    //         const res = await api.validateToken(storagedData);
    //         if (res.info) {
    //             setUser(res.info);
    //         }
    //     }
    // };
    // validateToken();

    const login = async (email: string, password: string, type: string) => {
        const res = await api.login(email, password, type);
        if (res.info && res.token) {
            setUser(res.info);
            setToken(res.token);
        }
        return res;        
    };

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    };

    const register = async (
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    ) => {
        const res: any = await api.registerUser(
            name,
            email,
            password,
            confirmPassword,
        );

        if (res.data) {
            setUser(res.data.info);
            return true;
        }
        return false;
    };

    const registerCompany = async (
        companyName: string,
        email: string,
        cnpj: string,
        password: string,
        passwordConfirmation: string,
    ) => {
        const res: any = await api.registerCompany(
            companyName,
            email,
            cnpj,
            password,
            passwordConfirmation,
        );

        if (res.data) {
            setUser(res.data.info);
            return true;
        }
        return false;
    };

    const logout = async () => {};

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                registerCompany,
                logout,
                isLogin,
                setIsLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
