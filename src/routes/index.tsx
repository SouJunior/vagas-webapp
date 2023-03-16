import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Layout from '../components/Layout';
import Report from '../pages/Report';
import ErrorPage from '../pages/ErrorPage';

import { InsertJobs } from '../pages/InsertJobs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RequireAuth } from '../contexts/Auth/RequireAuth';

export const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path="insertjobs" element={<InsertJobs />} />
                <Route path="report/:id" element={<Report />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};
