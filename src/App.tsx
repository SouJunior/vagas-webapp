import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavRoutes } from './routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <NavRoutes />
            <ToastContainer />
        </Router>
    );
}

export default App;
