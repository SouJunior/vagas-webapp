import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../components/styles/Theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import { LazyMotion, domAnimation } from 'framer-motion';
import App from '../routes/router';

// Mock matchMedia
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() { return false; }
  };
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <ThemeProvider theme={mainTheme}>
        <LazyMotion features={domAnimation}>
            {component}
        </LazyMotion>
        </ThemeProvider>
    </AuthProvider>
    </QueryClientProvider>
  );
};

describe('App Component', () => {
  beforeAll(() => {
    // Mock IntersectionObserver
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('should render the home page by default', () => {
    renderWithProviders(<App />);
    
    // Update these assertions based on what's actually on your home page
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  test('should render navigation elements', async () => {
    renderWithProviders(<App />);
    
    // Wait for navigation to be available and test presence of links
    const navLinks = await screen.findAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('should render with theme provider', () => {
    renderWithProviders(<App />);
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
