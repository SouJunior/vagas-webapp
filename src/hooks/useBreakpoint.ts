import { useEffect, useState } from 'react';

export function useBreakpoint() {
  const getDevice = () => {
    if (window.innerWidth < 768) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}
