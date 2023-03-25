import { toast } from 'react-toastify';
import api from '../services/api';

export const useApi = () => ({
    //TODO: Entrar com as funções que salvam o token de usuário

    validateToken: async (token: string) => {
        const res: any = await api.post('/auth/user-logged', { token });
        return res.data
    },

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

    register: async (name: string, email: string, password: string, cnpj: string) => {
        const res: any = await api.post('/company', {
            name,
            email,
            password,
            cnpj,
        })
        .then((resolve) => {
            toast.success('Conta criada com sucesso!', {
                position: "top-center",
                theme: "colored",
                });
        })
        .catch((err) => {
            toast.error('Ops! Algo deu errado. Por favor, tente novamente.', {
                position: "top-center",
                theme: "colored",
                });
        })
        return res.data;
    },

    createJob: async (title: string, description: string, prerequisites: string, benefits: string, type: string, type_contract: string, salary: number, modality: string, headquarters: string, contract_time: string | boolean, affirmative: string | boolean , affirmative_type: string | undefined, company_id: string | undefined) => {
        const res: any = await api.post('/job', {
            title, 
            description, 
            prerequisites, 
            benefits, 
            type, 
            type_contract, 
            salary, 
            modality, 
            headquarters, 
            contract_time, 
            affirmative, 
            affirmative_type,
            company_id
        })
        return res.data;
      },
});
