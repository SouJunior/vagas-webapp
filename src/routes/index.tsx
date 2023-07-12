import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Layout from '../components/Layout';
import Report from '../pages/Report';
import ErrorPage from '../pages/ErrorPage';

import { Home } from '../pages/Home';
import { InsertJobs } from '../pages/InsertJobs';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import AddJobs from '../pages/AddJobs';
import FeedJobs from '../pages/FeedJobs';
import ConfirmEmail from '../pages/ConfirmEmail';
import ResetPassword from '../pages/ResetPassword';
import CompanyPortal from '../pages/CompanyPortal';
import CandidatePortal from '../pages/CandidatePortal';
import JobApply from '../pages/ApplyJob';
import { ProfileSettings } from '../pages/ProfileSettings';
import CompanyApplications from '../pages/CompanyApplications';

export const NavRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route path="recovery-password" element={<ResetPassword />} />
            <Route
                path="company-portal"
                element={
                    <RequireAuth>
                        <CompanyPortal />
                    </RequireAuth>
                }
            />
            <Route
                path="candidate-portal"
                element={
                    <RequireAuth>
                        <CandidatePortal />
                    </RequireAuth>
                }
            />
            <Route
                path="profile-settings"
                element={
                    <RequireAuth>
                        <ProfileSettings />
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
                <Route path="jobs" element={<FeedJobs />} />
                <Route path="jobs/:searchTerm" element={<FeedJobs />} />
                <Route path="apply/:id" element={<JobApply />} />
                <Route path="applications" element={<CompanyApplications />} />
                <Route path="report/:id" element={<Report />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};
