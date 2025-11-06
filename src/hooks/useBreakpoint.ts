import { useEffect, useState } from 'react';

export function useBreakpoint() {
  const getDevice = () => {
    if (typeof window === 'undefined') return 'desktop';
    if (window.innerWidth < 768) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
  };

  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setDevice(getDevice());

    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
    const throttleDelay = 100; // ms

    const handleResize = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        setDevice(getDevice());
        throttleTimeout = null;
      }, throttleDelay);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
        throttleTimeout = null;
      }
    };
  }, []);

  return device;
}
