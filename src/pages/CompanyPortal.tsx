import FooterDefault from '@components/FooterDefault';
import Header from '@components/Header';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useApi } from '../hooks/useApi';

const CompanyPortal = () => {
  const navigate = useNavigate();
  const auth: any = useContext(AuthContext);
  const api = useApi();
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const loadCompanyJobs = async (id: string) => {
      const getJobsData = await api.getJobsByCompany(id);
      setJobs(getJobsData);
    };
    loadCompanyJobs(auth.user.id);
  }, []);

  return (
    <>
      <Header
        variant="loggedInUser"
        userName={auth.user.name}
        email={auth.user.email}
        profileImage={auth.user.profileImage}
      />
      <FooterDefault />
    </>
  );
};

export default CompanyPortal;
