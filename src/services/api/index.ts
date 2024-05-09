import axios from 'axios';

const api = axios.create({
    baseURL:  'https://vagas-backend.soujunior.tech',
});

export default api;
