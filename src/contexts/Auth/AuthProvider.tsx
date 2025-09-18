import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import type { User } from '../../@types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isRegistered, setIsRegistered] = useState();
  const [isAuth, setIsAuth] = useState<boolean | any>(null);
  const [isLogin, setIsLogin] = useState<'login' | 'register'>('login');
  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [popUpAntiFraudOpen, setPopUpAntiFraudOpen] = useState(false);
  const api = useApi();

  useEffect(() => {
    validateToken();
  }, []);

  const validateToken = async () => {
    const storagedToken = localStorage.getItem('authToken');
    const userLogged = JSON.parse(localStorage.getItem('user') || '{}');

    if (storagedToken && userLogged) {
      setUser(userLogged);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  const login = async (email: string, password: string, type: string) => {
    const res = await api.login(email, password, type);
    if (res.info && res.token) {
      setUser(res.info);
      setIsAuth(true);
      setTokenAndUser(res.token, res.info);
    }
    return res;
  };

  /**
   * @param authToken key
   * @param token value
   */
  const setTokenAndUser = (token: string, user: User) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = async () => {
    localStorage.clear();
    setUser(null);
    setIsAuth(false);
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    try {
      const res: any = await api.registerUser(
        name,
        email,
        password,
        confirmPassword,
      );

      if (res) {
        setIsRegistered(res);
      }
    } catch (err: any) {
      if (err.response.status > 400) {
        setErrorEmail('Email já cadastrado');
      } else {
        setErrorEmail('');
      }
    }
  };

  const registerCompany = async (
    companyName: string,
    email: string,
    cnpj: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    try {
      const res: any = await api.registerCompany(
        companyName,
        email,
        cnpj,
        password,
        passwordConfirmation,
      );
      if (res) {
        console.log(res);
        setIsRegistered(res);
      }
    } catch (err: any) {
      if (err.response.status > 400) {
        setErrorEmail('Email já cadastrado');
      }
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
        isAuth,
        errorEmail,
        isRegistered,
        popUpAntiFraudOpen,
        setPopUpAntiFraudOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
