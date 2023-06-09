import { useCallback, useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLogin, setIsLogin] = useState<'login' | 'register'>('login');

    const api = useApi();

    // Vai executar uma vez sempre que o componente for renderizado
    useEffect(() => {
        validateToken();
    }, []);

    /**
     * For this es-lint error; 
     * @see https://github.com/facebook/react/issues/14920
     */
    const validateToken = useCallback(async () => {
        const storagedToken = localStorage.getItem('authToken');

        if (storagedToken) {
            // Autoriza retorno dos dados do usuário recebendo token no header
            // Após realizar login o estado de user é alterado 2 vezes
            // 1 vez quando faz login
            // 1 vez quando faz validação do token
            // Talvez por se tratar do valor user seja melhor o uso de useMemo()
            const res = await api.validateToken(storagedToken);
            if (res) {
                setUser(res);
            }
        }
    }, []);

    const login = async (email: string, password: string, type: string) => {
        // Dados que vem dos inputs da aplicação no momento em que o contexto instanciado
        // Dados serão passados no corpo da requisição utlizando o método que vem de useApi
        const res = await api.login(email, password, type);

        if (res.info && res.token) {
            setUser(res.info);
            setToken(res.token);
            return true;
        }
        return false;
    };

    const setToken = (token: string) => {
        // Esse método espera 2 params: chave e valor
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
