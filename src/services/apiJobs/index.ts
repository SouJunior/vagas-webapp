import axios from 'axios';

const apiJobs = axios.create({
    baseURL: process.env.REACT_APP_URL_JOBS || 'http://localhost:3333',
});

export default apiJobs;
