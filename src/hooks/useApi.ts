import api from "../services/api";

export const useApi = () => ({

    signin: async (email: string, password: string) => {
        // Retornando dados falsos
        return {
            user: {
                "id": 1,
                "email": "rafa@gmail.com",
                "password": "Rafa12@#",
                "token": "ashfadfd"
            }
        }
        // const res = await api.post("/signin", { email, password })
        // return res.data
    },

    signout: async () => {
        const res = await api.post("/logout");
        return res.data;
    }

});