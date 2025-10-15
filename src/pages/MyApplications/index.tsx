import Header from '@components/Header';
import BasicTabs from '../../components/BasicTabs';
import {
  ContainerStatus,
  ContainerTitle,
  Status,
  SubTitle,
  Title,
} from './styles';

const MyApplications = () => {
  return (
    <>
      <Header variant="loggedInUser" />
      <ContainerTitle>
        <Title>Minhas candidaturas</Title>
        <SubTitle>Veja o status de suas candidaturas.</SubTitle>
      </ContainerTitle>
      <ContainerStatus>
        <Status>
          <BasicTabs />
        </Status>
      </ContainerStatus>
    </>
  );
};

export default MyApplications;
