import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './components/styles/Theme';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes/router';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ThemeProvider theme={mainTheme}>
                    <GlobalStyle />
                    <Router />
                    <ToastContainer />
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
