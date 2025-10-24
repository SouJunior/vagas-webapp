import Header from '@components/Header/index';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import ChooseResume from '../components/ApplyJob/ChooseResume';
import JobApplyDetails from '../components/ApplyJob/JobApplyDetails';
import Modal from '../components/ApplyJob/Modal';
import FeedSearch from '../components/FeedVagas/FeedSearch';
import JobCard from '../components/JobCard';
import { useApi } from '../hooks/useApi';
import type { Job } from '../hooks/useJobList';
import { useJobList } from '../hooks/useJobList';
import {
  ApplyButton,
  ButtonContainer,
  CancelApplyButton,
  Content,
  FilterContainer,
  JobApplyContainer,
  JobDetailsWrapper,
  PageTitle,
  ResumeContainer,
  ResumePreview,
  SimilarJobs,
  Title,
  UserArea,
  Wrapper,
} from './styles/ApplyJobs.styles';

const JobApply = () => {
  const {
    selectedJob,
    noJobSelected,
    setNoJobSelected,
    setSelectedJob,
    jobs,
    selecionaVaga,
    isLoading,
  } = useJobList();

  const [showDialog, setShowDialog] = useState(false);
  const [selectedResume, setSelectedResume] = useState<any>('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [cardData, setCardData] = useState<Job>();
  const [error, setError] = useState(false);

  const api = useApi();
  const { id }: any = useParams();
  const navigate = useNavigate();

  const similarJobs = jobs?.filter((job: { id: string }) => job.id !== id);

  const { data: jobData, isLoading: isLoadingJob } = useQuery({
    queryKey: ['job', id],
    queryFn: () => api.getJobById(id),
  });

  const handleJobCardClick = async (job: Job) => {
    try {
      if (selectedJob === job.id) {
        setSelectedJob(null);
        setNoJobSelected(true);
      } else {
        const response = await api.getJobById(job.id);
        setCardData(response);
        selecionaVaga(job.id);
      }
    } catch (error: unknown) {
      setError(true);
    }
  };

  const { data: resumeData } = useQuery({
    queryKey: ['resumes'],
    queryFn: () => api.getUserCurriculum(localStorage.getItem('authToken')),
  });

  const applyJobMutation = useMutation(
    (data: { jobId: string; curriculumId: string }) =>
      api.ApplyJob(data.jobId, data.curriculumId),
    {
      onSuccess: () => {
        setShowSuccessModal(true);
      },
    },
  );

  const handleApplyJob = () => {
    applyJobMutation.mutate({ jobId: id, curriculumId: selectedResume.id });
  };

  const handleResumeClick = (resume: any) => {
    setSelectedResume(resume);
  };

  function OpenCancelDialog() {
    setShowDialog(true);
  }

  function HandleCancel() {
    setShowDialog(false);
  }

  function HandleConfirm() {
    navigate('/jobs');
  }

  function renderSimilarJobs() {
    if (similarJobs && similarJobs.length > 0) {
      return similarJobs
        .slice(0, 3)
        .map((job: Job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            city={job.city}
            federalUnit={job.federalUnit}
            modality={job.modality}
            jobType={job.type}
            typeContract={job.typeContract}
            publishedAt={job.createdAt}
            company={job.company}
            active={selectedJob === job.id}
            opacity={noJobSelected || selectedJob === job.id ? 1 : 0.6}
            onClick={() => handleJobCardClick(job)}
          />
        ));
    } else {
      return <div>Nenhuma vaga similar encontrada.</div>;
    }
  }

  function jobContent() {
    if (isLoading) {
      return undefined;
    }

    if (jobs && Object.keys(jobs).length === 0) {
      return null;
    }
  }

  jobContent();

  return (
    <JobApplyContainer>
      <Header
        variant="navigation"
        pageName="Feed de Vagas"
        backTo={'/jobs'}
      ></Header>
      <Content>
        <FilterContainer>
          <div>
            <FeedSearch onSearch={HandleConfirm} />
          </div>
        </FilterContainer>
        <Wrapper>
          <PageTitle>Match de Vagas</PageTitle>
          <UserArea>
            <ResumeContainer>
              <ChooseResume
                data={resumeData}
                setSelectedResume={handleResumeClick}
              />
              {selectedResume && (
                <ResumePreview>
                  <iframe
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                      selectedResume.file,
                    )}&embedded=true`}
                    width="484"
                    height="700"
                    title="teste"
                    allowFullScreen
                  ></iframe>
                </ResumePreview>
              )}
            </ResumeContainer>
            <JobDetailsWrapper>
              <JobApplyDetails
                Job={cardData ?? jobData}
                isLoading={isLoadingJob}
              />
              <ButtonContainer>
                <CancelApplyButton onClick={OpenCancelDialog}>
                  Cancelar
                </CancelApplyButton>
                <ApplyButton
                  onClick={handleApplyJob}
                  disabled={selectedResume === ''}
                >
                  Me Candidatar
                </ApplyButton>
              </ButtonContainer>
            </JobDetailsWrapper>
          </UserArea>
        </Wrapper>
        <Title>Vagas similares a sua pesquisa:</Title>
        <SimilarJobs>
          {isLoading ? <div>Carregando...</div> : renderSimilarJobs()}
        </SimilarJobs>
        {error && <div>Desculpe, algo inesperado aconteceu.</div>}
      </Content>
      {showDialog && (
        <Modal
          title="CANCELAR?"
          confirmText="Sim"
          cancelText="Não"
          handleCancel={HandleCancel}
          handleConfirm={HandleConfirm}
          buttonColors={{
            confirmButton: '#BD0000',
            cancelButton: '#149911',
          }}
        >
          Você deseja cancelar a sua candidatura?
        </Modal>
      )}

      {showSuccessModal && (
        <Modal
          title={
            <>
              <img src="/assets/logo-name-h.svg" alt="Logo" width={200} />
            </>
          }
          cancelText="Ok"
          handleCancel={HandleConfirm}
          buttonColors={{
            cancelButton: '#1165BA',
          }}
        >
          Candidatura realizada com sucesso!
        </Modal>
      )}
    </JobApplyContainer>
  );
};

export default JobApply;
