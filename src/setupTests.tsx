import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './components/styles/Theme';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
