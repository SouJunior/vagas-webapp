import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuth, setIsAuth] = useState<boolean | any>(null);
    const [isLogin, setIsLogin] = useState<'login' | 'register'>('login');

    const api = useApi();

    const validateToken = async () => {
        const storagedToken = localStorage.getItem('authToken');

        if (storagedToken) {
            const res = await api.validateToken(storagedToken);
            if (res) {
                setUser(res);
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        } else {
            setIsAuth(false);
        }
    };

    const login = async (email: string, password: string, type: string) => {
        const res = await api.login(email, password, type);
        if (res.info && res.token) {
            setUser(res.info);
            setToken(res.token);
        }
        return res;
    };

    /**
     * @param authToken key
     * @param token value
     */
    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    };

    const logout = async () => {
        localStorage.removeItem('authToken')
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
                validateToken,
                isAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
