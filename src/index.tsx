import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/styles/Global';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './components/styles/Theme';
import { AuthProvider } from './contexts/Auth/AuthProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider theme={mainTheme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>,
);
