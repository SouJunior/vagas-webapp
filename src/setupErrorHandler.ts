let isErrorHandlerInitialized = false;

export const setupGlobalErrorHandler = () => {
  if (isErrorHandlerInitialized) {
    return;
  }

  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    console.error('Unhandled promise rejection:', event.reason);

    if (process.env.NODE_ENV === 'development') {
      event.preventDefault();

      console.error('Promise rejection details:', {
        reason: event.reason,
        promise: event.promise,
        timestamp: new Date().toISOString(),
      });
    } else {
      console.error('Production promise rejection:', {
        reason: event.reason,
        timestamp: new Date().toISOString(),
      });
    }
  };

  window.addEventListener('unhandledrejection', handleUnhandledRejection);
  isErrorHandlerInitialized = true;

  return () => {
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    isErrorHandlerInitialized = false;
  };
};
