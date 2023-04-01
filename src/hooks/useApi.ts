import api from '../services/api';

export const useApi = () => ({
    validateToken: async (token: string) => {
        const res: any = await api.post('/auth/login', { token });
        return res.data;
    },

    login: async (email: string, password: string, type: string | any) => {
        const res: any = await api.post('/auth/login', {
            email,
            password,
            type,
        });
        return res.data;
    },

    logout: async () => {
        const res = await api.post('/logout');
        return res.data;
    },

    registerUser: async (name: string, email: string, password: string, confirmPassword: string) => {
        const res: any = await api.post('/user', {
            name,
            email,
            password,
            confirmPassword,
        });
        return res.data;
    },

    registerCompany: async (
        name: string,
        cnpj: string,
        email: string,
        password: string,
        confirmPassword: string,
    ) => {
        const res: any = await api.post('/company', {
            name,
            cnpj,
            email,
            password,
            confirmPassword,
        });
        return res.data;
    },
});
