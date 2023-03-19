import { toast } from 'react-toastify';
import api from '../services/api';

export const useApi = () => ({
    //TODO: Entrar com as funções que salvam o token de usuário

    validateToken: async () => {
        const res: any = await api.get('/auth/user-logged');
        return res.data;
    },

    login: async (
            email: string, 
            password: string, 
            type: string | any
    ) => {
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

    register: async (
        name: string,
        email: string,
        password: string,
        cnpj: string,
    ) => {
        const res: any = await api
            .post('/company', {
                name,
                email,
                password,
                cnpj,
            })
            // TODO: Remover tudo o que não é realizar requisições
            // .then((resolve) => {
            //     toast.success('Conta criada com sucesso!', {
            //         position: 'top-center',
            //         theme: 'colored',
            //     });
            // })
            // .catch((err) => {
            //     toast.error(
            //         'Ops! Algo deu errado. Por favor, tente novamente.',
            //         {
            //             position: 'top-center',
            //             theme: 'colored',
            //         },
            //     );
            // });
        return res.data;
    },
});
