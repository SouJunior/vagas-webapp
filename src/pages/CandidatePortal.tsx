import { Container, Main, Position, Row } from './styles/CandidatePortalStyles';

import FooterDefault from '@components/FooterDefault';
import Header from '@components/Header';
import { useContext } from 'react';
import JobFilterPerfil from '../components/JobFilterPerfil';
import PopUpAntiFraudMessage from '../components/LoginCard/PopUpAntiFraudMessage';
import { AuthContext } from '../contexts/Auth/AuthContext';

const CandidatePortal = () => {
  const { popUpAntiFraudOpen } = useContext(AuthContext);
  const auth: any = useContext(AuthContext);

  return (
    <Container>
      <Header variant="loggedInUser" />
      {popUpAntiFraudOpen && <PopUpAntiFraudMessage />}
      <Main>
        <JobFilterPerfil />
        <Row />
        <h1>Olá, {auth?.user?.name || 'Visitante'}</h1>
      </Main>
      <Position>
        <FooterDefault />
      </Position>
    </Container>
  );
};

export default CandidatePortal;
