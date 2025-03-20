import axios from 'axios';

const apiJobs = axios.create({
    baseURL:
        import.meta.env.VITE_APP_URL_JOBS_LOCAL || import.meta.env.VITE_APP_URL_JOBS,
});

export default apiJobs;
