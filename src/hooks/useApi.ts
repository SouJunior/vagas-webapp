import api from '../services/api';

export const useApi = () => ({
    //TODO: Entrar com as funções que salvam o token de usuário

    signin: async (email: string, password: string) => {
        const res = await api.post('/signin', { email, password });
        return res.data;
    },

    signout: async () => {
        const res = await api.post('/signout');
        return res.data;
    },
});
