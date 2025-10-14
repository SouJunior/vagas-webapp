import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import FooterDefault from '../components/FooterDefault';
import Header from '../components/Header/index';

const DefaultLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <Header variant="default" />
      <Outlet />
      <FooterDefault />
    </>
  );
};

export default DefaultLayout;
