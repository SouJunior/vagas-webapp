import { Outlet } from 'react-router-dom';
import FooterDefault from '../components/FooterDefault';

const LoginLayout = () => {
  return (
    <>
      <Outlet />
      <FooterDefault />
    </>
  );
};

export default LoginLayout;
