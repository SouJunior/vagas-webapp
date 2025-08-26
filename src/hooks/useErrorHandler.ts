import React, { useCallback } from 'react';

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
        return React.createElement(WrappedComponent, props);
    };

    WithErrorHandlerComponent.displayName = `withErrorHandler(${
        WrappedComponent.displayName || WrappedComponent.name
    })`;

    return WithErrorHandlerComponent;
};

export default useErrorHandler;
