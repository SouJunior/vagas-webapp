import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AllRoutes } from './routes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <AllRoutes />
            <ToastContainer />
        </Router>
    );
}

export default App;
