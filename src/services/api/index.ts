import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.REACT_APP_URL,
    // baseURL: 'https://vagas-backend.soujunior.tech',
});

export default api;
