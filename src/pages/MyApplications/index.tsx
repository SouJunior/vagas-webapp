import Header from '../../components/Portal/Header';
import {
  ContainerTitle,
  Title,
  SubTitle,
  ContainerStatus,
  Status,
} from './styles';
import BasicTabs from '../../components/BasicTabs';

const MyApplications = () => {
  return (
    <>
      <Header />
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
