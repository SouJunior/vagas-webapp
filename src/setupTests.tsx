import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './components/styles/Theme';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          {children}
        </ThemeProvider>
      </BrowserRouter>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
