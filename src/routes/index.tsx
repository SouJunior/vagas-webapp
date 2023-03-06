import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout';
import Report from '../pages/Report';
import ErrorPage from '../pages/ErrorPage';

import { InsertJobs } from '../pages/InsertJobs';
import { RequireAuth } from '../contexts/Auth/RequireAuth';

export const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Layout />}>
                <Route
                    path="insertjobs"
                    element={
                        <RequireAuth>
                            <InsertJobs />
                        </RequireAuth>
                    }
                />
                <Route path="report/:id" element={<Report />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};
