import FooterDefault from '@components/FooterDefault';
import Header from '@components/Header';
import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import type { Job } from '../@types/jobs';
import EndJobModal from '../components/EndJobModal';
import JobCard from '../components/JobCard';
import NoJobsSelectedCard from '../components/NoJobSelectedCard';
import QuickFilter from '../components/QuickFilter';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useApi } from '../hooks/useApi';
import {
  Container,
  ContentWrapper,
  JobList,
  PageTitle,
  QuickFilterContainer,
} from './styles/CompanyApplicationsStyles';
import {
  AboutColumn,
  DescriptionContainer,
  HeadColumn,
  HeadRow,
  JobInfoContainer,
  OptionsBtn,
} from './styles/JobsPanel';

const JobsPanel = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noJobSelected, setNoJobSelected] = useState(true);
  const [clickedJob, setClickedJob] = useState<any>([]);
  const [jobStatus, setJobStatus] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const auth = useContext(AuthContext);
  const companyId = auth.user?.id;
  const api = useApi();

  const fetchCompanyJobsById = async (id: string) => {
    const response = await api.getCompanyById(id);
    return response;
  };

  const { data, refetch } = useQuery({
    queryKey: ['companyJobs'],
    queryFn: () => fetchCompanyJobsById(companyId),
  });

  async function selecionaVaga(id: string | null) {
    setSelectedJob(id);
    const item: Job = data.jobs.filter((item: Job) => item.id === id);
    setClickedJob(item);
    setNoJobSelected(false);
  }

  const filteredJobs = (data?.jobs || []).filter(
    (job: any) => job.status === jobStatus,
  );

  const sortedJobs = (
    (filteredJobs.length > 0 ? filteredJobs : data?.jobs) || []
  ).sort((a: any, b: any) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (sortOrder === 'desc') {
      return dateB.getTime() - dateA.getTime(); // Ordena do mais recente para o mais antigo
    } else {
      return dateA.getTime() - dateB.getTime(); // Ordena do mais antigo para o mais recente
    }
  });

  const [JobClicked] = clickedJob;

  return (
    <>
      <Header variant="portalCompany" />
      <Container>
        <PageTitle>Painel de Vagas</PageTitle>
        <ContentWrapper>
          <JobList>
            <QuickFilterContainer>
              <QuickFilter
                options={[
                  {
                    label: 'Todas',
                    value: 'ALL',
                  },
                  {
                    label: 'Vagas Ativas',
                    value: 'ACTIVE',
                  },
                  {
                    label: 'Vagas encerradas',
                    value: 'ARCHIVED',
                  },
                ]}
                selectedValue={jobStatus}
                onChange={(event: any) => setJobStatus(event.target.value)}
                placeholder="Status da vaga"
              />
              <QuickFilter
                options={[
                  {
                    label: 'Recentes',
                    value: 'desc',
                  },
                  {
                    label: 'Antigas',
                    value: 'usp',
                  },
                ]}
                selectedValue={jobStatus}
                onChange={(event: any) => setSortOrder(event.target.value)}
                placeholder="Quando postada"
              />
            </QuickFilterContainer>
            {(sortedJobs || []).map((job: any) => (
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
                company={{
                  companyName: data.companyName,
                  profile: data.profile,
                }}
                active={selectedJob === job.id}
                opacity={noJobSelected || selectedJob === job.id ? 1 : 0.6}
                onClick={() => {
                  if (selectedJob === job.id) {
                    setSelectedJob(null);
                    setNoJobSelected(true);
                  } else {
                    selecionaVaga(job.id);
                  }
                }}
              />
            ))}
          </JobList>
          {isModalOpen && (
            <EndJobModal
              id={JobClicked?.id}
              title={JobClicked?.title}
              onClose={() => {
                setIsModalOpen(!isModalOpen);
                refetch();
              }}
            />
          )}
          {selectedJob ? (
            <JobInfoContainer>
              <HeadRow status={JobClicked?.status}>
                <HeadColumn>
                  <h2>
                    {JobClicked?.title}{' '}
                    <span>
                      {JobClicked?.status === 'ACTIVE' ? 'Ativa' : 'Encerrada'}
                    </span>
                  </h2>
                  <h3>{data?.companyName}</h3>
                  <h4>
                    {JobClicked?.city ? JobClicked?.city : 'São Paulo - SP'}
                  </h4>
                  <h3 className="jobModel">
                    <h3 className="jobModel">
                      {JobClicked?.modality === 'REMOTE' && 'REMOTO'}
                      {JobClicked?.modality === 'HYBRID' && 'HÍBRIDO'}
                      {JobClicked?.modality === 'PRESENCIAL' &&
                        'PRESENCIAL'} - {JobClicked?.type} -{' '}
                      {JobClicked?.typeContract === 'OTHER'
                        ? 'OUTRO'
                        : JobClicked?.typeContract}
                    </h3>
                  </h3>
                </HeadColumn>
                {JobClicked.status !== 'ARCHIVED' && (
                  <HeadColumn>
                    <OptionsBtn type="edit">Editar</OptionsBtn>
                    <OptionsBtn type="end" onClick={() => setIsModalOpen(true)}>
                      Encerrar Vaga
                    </OptionsBtn>
                  </HeadColumn>
                )}
              </HeadRow>
              <AboutColumn>
                <p>Tempo Integral</p>
                <p>51 - 200 funcionários</p>
                <p className="recruiting">Recrutando agora</p>
              </AboutColumn>
              <DescriptionContainer>
                <p>{JobClicked?.description}</p>
              </DescriptionContainer>
            </JobInfoContainer>
          ) : (
            <NoJobsSelectedCard />
          )}
        </ContentWrapper>
        <FooterDefault />
      </Container>
    </>
  );
};

export default JobsPanel;
