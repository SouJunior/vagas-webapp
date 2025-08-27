import { createContext } from 'react';
import type { User } from '../../@types/User';

export type AuthContextType = {
  user: User | null;

  login: (
    email: string,
    password: string,
    type: string | any,
  ) => Promise<boolean>;

  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => Promise<boolean>;

  registerCompany: (
    companyName: string,
    email: string,
    cnpj: string,
    password: string,
    passwordConfirmation: string,
  ) => Promise<boolean>;

  validateToken: (token: string) => Promise<any>;

  logout: () => void;

  isLogin: 'login' | 'register';
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<any>({
  user: null,
  isLogin: 'login',
  login: async () => false,
  register: async () => false,
  registerCompany: async () => false,
  validateToken: async () => null,
  logout: () => {},
  setIsLogin: () => {},
});
