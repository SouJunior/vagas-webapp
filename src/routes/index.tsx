import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Layout from '../components/Layout';
import Report from '../pages/Report';
import ErrorPage from '../pages/ErrorPage';

import { Home } from '../pages/Home';
import { InsertJobs } from '../pages/InsertJobs';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import AddJobs from '../pages/addJobs';
import FeedVagas from '../pages/FeedVagas';
import ConfirmEmail from '../pages/ConfirmEmail';
import ResetPassword from '../pages/ResetPassword';
import CompanyPortal from '../pages/CompanyPortal';

export const NavRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="confirm-email" element={<ConfirmEmail />}></Route>
            <Route path="recovery-password" element={<ResetPassword />}></Route>
            <Route 
            path="company-portal" 
            element={
                <RequireAuth>
                    <CompanyPortal />
                </RequireAuth>
            }
            />
            <Route
                path="insertjob"
                element={
                    <RequireAuth>
                        <InsertJobs />
                    </RequireAuth>
                }
            />
            {/*TODO: A pagina Layout já está com container definido
            e um rodapé, modificar isso, ou incluir os elementos acima
            sem esse estilo pré definido*/}
            <Route path="/" element={<Layout />}>
                <Route path="insertjobs" element={<InsertJobs />} />
                <Route path="addjobs" element={<AddJobs />} />
                <Route path="feedvagas" element={<FeedVagas />} />
                <Route path="report/:id" element={<Report />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};
