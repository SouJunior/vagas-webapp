import type { ErrorInfo, ReactNode } from 'react';
import React, { Component, createRef } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  private fallbackRef = createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error);
      console.error('Error Info:', errorInfo);
    }

    this.setState(
      {
        error,
        errorInfo,
      },
      () => {
        if (this.fallbackRef.current) {
          this.fallbackRef.current.focus();
        }
      },
    );
  }

  private handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          ref={this.fallbackRef}
          className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4"
          role="alert"
          tabIndex={-1}
        >
          <div className="w-full max-w-md text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-16 w-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              Oops! Algo deu errado
            </h1>

            <p className="mb-6 text-gray-600">
              Encontramos um erro inesperado. Por favor, tente novamente ou
              recarregue a página.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={this.handleRetry}
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="button"
              >
                Tentar Novamente
              </button>

              <button
                onClick={() => window.location.reload()}
                className="rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                type="button"
              >
                Recarregar Página
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Detalhes do erro (desenvolvimento)
                </summary>
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="font-mono whitespace-pre-wrap text-sm text-red-800">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <p className="font-mono mt-2 whitespace-pre-wrap text-xs text-red-600">
                      {this.state.errorInfo.componentStack}
                    </p>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
