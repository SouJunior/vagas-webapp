import { Main, Container, Row, Position } from './styles/CandidatePortalStyles';

import Header from '../components/Portal/Header';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useContext } from 'react';
import Footer from '../components/Portal/Footer';
import PopUpAntiFraudMessage from '../components/LoginCard/PopUpAntiFraudMessage';
import JobFilterPerfil from '../components/JobFilterPerfil';

const CandidatePortal = () => {
  const { popUpAntiFraudOpen } = useContext(AuthContext);
  const auth: any = useContext(AuthContext);

  return (
    <Container>
      <Header />
      {popUpAntiFraudOpen && <PopUpAntiFraudMessage />}
      <Main>
        <JobFilterPerfil />
        <Row />
        <h1>Olá, {auth.user.name}</h1>
      </Main>
      <Position>
        <Footer />
      </Position>
    </Container>
  );
};

export default CandidatePortal;
