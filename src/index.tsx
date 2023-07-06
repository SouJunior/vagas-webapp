import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/styles/Global';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './components/styles/Theme';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

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
                    <App />
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
