import { createContext } from 'react';
import { User } from '../../@types/User';

export type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
};

export const AuthContext: any = createContext(null);
