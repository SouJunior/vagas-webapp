import {
  Icon,
  InnerContainer,
  JobDetailsWrapper,
  Message,
  NoJobsContainer,
  Title,
} from './styles';

const NoJobsSelectedCard = () => {
  return (
    <JobDetailsWrapper>
      <NoJobsContainer>
        <InnerContainer>
          <Icon />
        </InnerContainer>
        <Title>Selecione uma vaga para ver os detalhes.</Title>
        <Message>(Todos os detalhes serão mostrados bem aqui)</Message>
      </NoJobsContainer>
    </JobDetailsWrapper>
  );
};

export default NoJobsSelectedCard;
