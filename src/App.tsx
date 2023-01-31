import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import { InsertJobs } from './pages/InsertJobs';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Report from './pages/Report';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="register" element={<Register />} />
                    <Route path="insertjobs" element={<InsertJobs />} />
                    <Route path="report/:id" element={<Report />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
