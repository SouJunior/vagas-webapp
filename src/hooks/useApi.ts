import api from "../services/api";

export const useApi = async () => ({

    signin: async (email: string, password: string) => {
        const res = await api.post("/signin", { email, password })
        return res.data
    },

    signout: async () => {}

});