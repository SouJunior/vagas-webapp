import { createContext } from 'react';
import { User } from '../../@types/User';

export type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (
        name: string,
        email: string,
        password: string,
        cnpj: string,
    ) => Promise<boolean>;

    validateToken: (token: string) => Promise<any>;

    logout: () => void;
};

export const AuthContext: any = createContext(null);
