import axios from 'axios';

const apiJobs = axios.create({
    baseURL:
        process.env.REACT_APP_URL_JOBS_LOCAL || process.env.REACT_APP_URL_JOBS,
});

export default apiJobs;
