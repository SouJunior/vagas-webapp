import {
  Container,
  LeftContainer,
  ResumePreview,
  RightContainer,
  Wrapper,
  Cards,
  PaymentInfo,
  PageTitle,
  DownloadBtn,
} from './styles/MatchJobs';
import MatchCard from '../components/MatchCard';
import { FiDownloadCloud } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import Header from '../components/Portal/Header';
import { Footer } from '../components/Portal/Footer/styles';

function MatchJobs() {
  const location = useLocation();

  const currentJob = location?.state?.jobData;
  const curriculumData = location?.state?.curriculumData;

  return (
    <>
      <Header />
      <Container>
        <PageTitle>Match de Vagas</PageTitle>
        <Wrapper>
          <LeftContainer>
            <ResumePreview>
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                  curriculumData?.file,
                )}&embedded=true`}
                width="100%"
                height="100%"
                title="curriculum"
                allowFullScreen
              ></iframe>
            </ResumePreview>
            <DownloadBtn
              onClick={() => window.open(curriculumData?.file, '_blank')}
            >
              <FiDownloadCloud size={20} />
              <p>Fazer Download</p>
            </DownloadBtn>
          </LeftContainer>
          <RightContainer>
            <Cards>
              <MatchCard
                title="Descrição da Vaga"
                description={currentJob?.description}
              />
              <MatchCard
                title="Responsabilidades"
                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
              />
              <MatchCard
                title="Qualificações"
                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
              />
              <MatchCard
                title="Benefícios"
                description={currentJob?.benefits}
              />
              <MatchCard
                title="Informações Adicionais"
                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
              />
            </Cards>
            <PaymentInfo>
              <h1>
                Faixa Salarial:{' '}
                {currentJob?.salaryMin?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}{' '}
                -{' '}
                {currentJob?.salaryMax?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h1>
            </PaymentInfo>
          </RightContainer>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
}

export default MatchJobs;
