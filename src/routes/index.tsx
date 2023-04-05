import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Layout from '../components/Layout';
import Report from '../pages/Report';
import ErrorPage from '../pages/ErrorPage';

import { Home } from '../pages/Home';
import { InsertJobs } from '../pages/InsertJobs';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { FeedJobs } from '../pages/FeedJobs';
import AddJobs from '../pages/addJobs';
import FeedVagas from '../pages/FeedVagas';
import ConfirmEmail from '../pages/ConfirmEmail';

export const NavRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="confirmemail" element={<ConfirmEmail />}></Route>
            <Route
                path="feedjobs"
                element={
                    <RequireAuth>
                        <FeedJobs />
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
