import React, { useState } from 'react';
import { useErrorHandler } from '../../hooks/useErrorHandler';

const ErrorTestComponent: React.FC = () => {
    const { throwError } = useErrorHandler();
    const [error, setError] = useState<Error | null>(null);

    const handleRenderError = () => {
        const err = new Error('Test render error triggered manually');
        setError(err);
    };

    const handleAsyncError = async () => {
        try {
            throw new Error('Test async error');
        } catch (error) {
            setError(error as Error);
        }
    };

    const handlePromiseRejection = () => {
        Promise.reject('Unhandled promise rejection test');
    };

    if (error) {
        throw error;
    }

    if (process.env.NODE_ENV !== 'development') {
        return null;
    }

    return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                Error Boundary Test (Development Only)
            </h3>

            <div className="space-y-2">
                <button
                    onClick={handleRenderError}
                    className="block w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    type="button"
                >
                    Trigger Render Error
                </button>

                <button
                    onClick={handleAsyncError}
                    className="block w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                    type="button"
                >
                    Trigger Async Error
                </button>

                <button
                    onClick={handlePromiseRejection}
                    className="block w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                    type="button"
                >
                    Trigger Promise Rejection
                </button>
            </div>

            <p className="text-sm text-yellow-700 mt-4">
                Click any button to test the ErrorBoundary component. This will
                show the error fallback UI.
            </p>
        </div>
    );
};

export default ErrorTestComponent;
