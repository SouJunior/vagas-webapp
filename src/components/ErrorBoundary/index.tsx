import React, { Component, ErrorInfo, ReactNode } from 'react';

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

        this.setState({
            error,
            errorInfo,
        });
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
                    className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4"
                    role="alert"
                    aria-live="polite"
                >
                    <div className="max-w-md w-full text-center">
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

                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Oops! Algo deu errado
                        </h1>

                        <p className="text-gray-600 mb-6">
                            Encontramos um erro inesperado. Por favor, tente
                            novamente ou recarregue a página.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={this.handleRetry}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                type="button"
                            >
                                Tentar Novamente
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                type="button"
                            >
                                Recarregar Página
                            </button>
                        </div>

                        {process.env.NODE_ENV === 'development' &&
                            this.state.error && (
                                <details className="mt-8 text-left">
                                    <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                                        Detalhes do erro (desenvolvimento)
                                    </summary>
                                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-sm font-mono text-red-800 whitespace-pre-wrap">
                                            {this.state.error.toString()}
                                        </p>
                                        {this.state.errorInfo && (
                                            <p className="text-xs font-mono text-red-600 mt-2 whitespace-pre-wrap">
                                                {
                                                    this.state.errorInfo
                                                        .componentStack
                                                }
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
