import api from '../services/api';

export const useApi = () => ({
    //TODO: Entrar com as funções que salvam o token de usuário

    login: async (email: string, password: string) => {
        const res: any = await api.post('/auth/login', {
            email,
            password,
        });
        return res.data;
    },

    logout: async () => {
        const res = await api.post('/logout');
        return res.data;
    },
});
