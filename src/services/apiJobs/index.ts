import axios from 'axios';

const apiJobs = axios.create({
    baseURL:
        import.meta.env.REACT_APP_URL_JOBS_LOCAL || import.meta.env.REACT_APP_URL_JOBS,
});

export default apiJobs;
