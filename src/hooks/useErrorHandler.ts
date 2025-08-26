import React, { useCallback, useEffect } from 'react';

export const useErrorHandler = () => {
    const throwError = useCallback((error: Error | string) => {
        const errorToThrow =
            typeof error === 'string' ? new Error(error) : error;

        throw errorToThrow;
    }, []);

    return { throwError };
};

export const withErrorHandler = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const WithErrorHandlerComponent: React.FC<P> = (props: P) => {
        const { throwError } = useErrorHandler();

        useEffect(() => {
            const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
                console.error('Unhandled promise rejection:', event.reason);

                if (process.env.NODE_ENV === 'development') {
                    throwError(
                        new Error(
                            `Unhandled Promise Rejection: ${event.reason}`,
                        ),
                    );
                }
            };

            window.addEventListener(
                'unhandledrejection',
                handleUnhandledRejection,
            );

            return () => {
                window.removeEventListener(
                    'unhandledrejection',
                    handleUnhandledRejection,
                );
            };
        }, [throwError]);

        return React.createElement(WrappedComponent, props);
    };

    WithErrorHandlerComponent.displayName = `withErrorHandler(${
        WrappedComponent.displayName || WrappedComponent.name
    })`;

    return WithErrorHandlerComponent;
};

export default useErrorHandler;
