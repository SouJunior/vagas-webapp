import {
  Main,
  Container,
  Position,
  JobButton,
  Row,
  Copyright,
} from './styles/CompanyPortalStyles';
import PlusSignImage from '../assets/imgs/plus-sign.png';

import Header from '../components/Portal/Header';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useContext, useEffect, useState } from 'react';
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
    <Container>
      <Header />
      {jobs?.length !== 0 ? (
        <Main>
          <h2>Vagas cadastradas:</h2>
          {jobs.map((job, index) => (
            <ul key={index}>
              <li>Título da vaga: {job.title}</li>
              <li>Pré-requisitos: {job.prerequisites}</li>
            </ul>
          ))}
        </Main>
      ) : (
        <Main>
          <h1>{auth.user.companyName}, anuncie sua primeira vaga!</h1>
          <JobButton onClick={() => navigate('/addjobs')}>
            <div>
              <img src={PlusSignImage} alt="mais" />
            </div>
            <div>Anunciar vaga</div>
          </JobButton>
        </Main>
      )}
      <Position>
        <Main>
          <Row />
        </Main>
        <Main>
          <Row />
        </Main>
      </Position>
      <Copyright>&copy; 2023 SouJunior</Copyright>
    </Container>
  );
};

export default CompanyPortal;
