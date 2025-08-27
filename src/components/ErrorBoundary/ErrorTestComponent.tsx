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
    <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
      <h3 className="mb-4 text-lg font-semibold text-yellow-800">
        Error Boundary Test (Development Only)
      </h3>

      <div className="space-y-2">
        <button
          onClick={handleRenderError}
          className="block w-full rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          type="button"
        >
          Trigger Render Error
        </button>

        <button
          onClick={handleAsyncError}
          className="block w-full rounded bg-orange-600 px-4 py-2 text-white transition-colors hover:bg-orange-700"
          type="button"
        >
          Trigger Async Error
        </button>

        <button
          onClick={handlePromiseRejection}
          className="block w-full rounded bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
          type="button"
        >
          Trigger Promise Rejection
        </button>
      </div>

      <p className="mt-4 text-sm text-yellow-700">
        Click any button to test the ErrorBoundary component. This will show the
        error fallback UI.
      </p>
    </div>
  );
};

export default ErrorTestComponent;
