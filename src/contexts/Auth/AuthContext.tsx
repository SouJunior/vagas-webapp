import { createContext } from 'react';
import { User } from '../../@types/User';

export type AuthContextType = {
    user: User | null;

    login: (
        email: string,
        password: string,
        type: string | any,
    ) => Promise<boolean>;

    registerUser: (
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    ) => Promise<boolean>;

    registerCompany: (
        name: string,
        cnpj: string,
        email: string,
        password: string,
        confirmPassword: string,
    ) => Promise<boolean>;

    validateToken: (token: string) => Promise<any>;

    logout: () => void;
};

export const AuthContext: any = createContext(null);
