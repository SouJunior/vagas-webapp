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
        companyName: string,
        email: string,
        cnpj: string,
        password: string,
        passwordConfirmation: string,
    ) => {
        const res: any = await api.post('/company', {
            companyName,
            email,
            cnpj,
            password,
            passwordConfirmation,
        });
        return res.data;
    },

    createJob: async (title: string, description: string, prerequisites: string, benefits: string, type: string, typeContract: string, salaryMin: number, salaryMax: number, modality: string, federalUnit: string, city: string, indefinideContract: string | boolean, contractType: string | undefined, affirmative: string | boolean, affirmativeType: string | undefined, company_id: string | undefined) => {
      const token = localStorage.getItem('authToken');
      const headers = {
        Authorization: `Bearer ${token}`,
    };  
      const res: any = await api.post('/job', {
            title, 
            description, 
            prerequisites, 
            benefits, 
            type, 
            typeContract, 
            salaryMin,
            salaryMax,
            modality, 
            federalUnit,
            city,
            indefinideContract,
            contractType,
            affirmative, 
            affirmativeType,
            company_id
        }, {headers})
        return res.data;
      },

    userRecoveryPassword: async (email: string) => {
      const res: any = await api.patch('/user/recovery_password', {
        email,
      });
      return res.data;
    },
  
    companyRecoveryPassword: async (email: string) => {
      const res: any = await api.patch('/company/recovery-password', {
        email,
      });
      return res.data;
    },
    
    userUpdatePassword: async (password: string, confirmPassword: string, recoverPasswordToken: string) => {
      const res: any = await api.patch('/user/update_password', {
        password,
        confirmPassword,
        recoverPasswordToken,
      });
      return res.data;
    },

    companyUpdatePassword: async (password: string, confirmPassword: string, recoverPasswordToken: string) => {
      const res: any = await api.patch('/company/update_password', {
        password,
        confirmPassword,
        recoverPasswordToken,
      });
      return res.data;
    },

    toggleActiveProfile: async (user: any, newValue: boolean) => { 
        try {
            // Faz a requisição GET para verificar se o recurso já existe
            const response = await api.get(`/user/${user.id}/active`);
            const currentValue = response.data;
            // Faz a requisição PUT para atualizar o valor do recurso
            await api.put(`/user/${user.id}/active`, {
              ...currentValue,
              value: newValue,
            });
          } catch (error: any) {
            // Se o recurso não existir, faz apenas a requisição PUT para criá-lo
            if (error.response.status === 404) {
              await api.put(`/user/${user.id}`, { value: newValue });
            } else {
              throw error;
            }
          }  
    },
    getProfileImage: async (user: any) => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.get(`/user/${user.id}/image`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              responseType: 'arraybuffer',
            });
            const img = Buffer.from(response.data, 'binary').toString('base64');
            return `data:image/png;base64,${img}`;
          } catch (error) {
            console.error(error);
            return '';
          }
        },
      getJobs: async (page: number = 1) => {
        const url = `/job?order=ASC&page=${page}&take=10&orderByColumn=id`;
        const res: any = await api.get(url);
          return res.data;
      },

      getJob: async (id: number) => {
        const url = `/job/${id}`
        const res: any = await api.get(url);
          return res.data;
      },
      getJobsByCompany: async (id: string) => {
        const res: any = await api.get(`/job/all/${id}`);
        return res.data;
      }
});
