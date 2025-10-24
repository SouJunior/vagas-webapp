import FooterDefault from '@components/FooterDefault';
import Header from '@components/Header';
import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import type { Job } from '../@types/jobs';
import Applicant from '../components/Applicant';
import JobCard from '../components/JobCard';
import NoJobsSelectedCard from '../components/NoJobSelectedCard';
import QuickFilter from '../components/QuickFilter';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useApi } from '../hooks/useApi';
import {
  ApplicantsContainer,
  ApplicantsList,
  Container,
  ContentWrapper,
  DetailsJobTitle,
  JobHeadText,
  JobList,
  PageTitle,
  QuickFilterContainer,
  Subtitle,
  Text,
} from './styles/CompanyApplicationsStyles';

const CompanyApplications = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>('');
  const [noJobSelected, setNoJobSelected] = useState(true);
  const [clickedJob, setClickedJob] = useState<any>([]);
  const [jobStatus, setJobStatus] = useState('');
  const [applications, setApplications] = useState([]);

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const companyId = auth.user?.id;
  const api = useApi();

  const fetchCompanyJobsById = async (id: string) => {
    const response = await api.getCompanyById(id);
    return response;
  };

  const { data } = useQuery({
    queryKey: ['companyJobs'],
    queryFn: () => fetchCompanyJobsById(companyId),
  });

  async function selecionaVaga(id: string | null) {
    setSelectedJob(id);
    const response = await api.getJobById(id);

    const item: Job = data.jobs.filter((item: Job) => item.id === id);
    setApplications(response.applications);
    setClickedJob(item);
    setNoJobSelected(false);
  }

  const filteredJobs = (data?.jobs || []).filter(
    (job: any) => job.status === jobStatus,
  );

  const [JobClicked] = clickedJob;

  return (
    <>
      <Header
        variant="loggedInUser"
        userName={auth?.user?.name}
        email={auth?.user?.email}
      />
      <Container>
        <PageTitle>Candidaturas</PageTitle>
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
            </QuickFilterContainer>
            {((filteredJobs.length > 0 ? filteredJobs : data?.jobs) || []).map(
              (job: any) => (
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
              ),
            )}
          </JobList>
          {selectedJob ? (
            <ApplicantsContainer>
              <JobHeadText>
                <DetailsJobTitle>{JobClicked?.title}</DetailsJobTitle>
                <Subtitle>
                  {JobClicked?.modality} - {JobClicked?.type} -
                  {JobClicked?.typeContract}
                </Subtitle>
                <Text>{JobClicked?.contractType}</Text>
              </JobHeadText>
              <ApplicantsList>
                {applications.length > 0 ? (
                  applications.map((candidate: any) => (
                    <Applicant
                      onClick={() =>
                        navigate(`/match-jobs`, {
                          state: {
                            curriculumData: candidate?.curriculum,
                            jobData: JobClicked,
                          },
                        })
                      }
                      key={candidate.id}
                    >
                      {candidate?.user?.name}
                    </Applicant>
                  ))
                ) : (
                  <div>Não há candidatos.</div>
                )}
              </ApplicantsList>
            </ApplicantsContainer>
          ) : (
            <NoJobsSelectedCard />
          )}
        </ContentWrapper>
        <FooterDefault />
      </Container>
    </>
  );
};

export default CompanyApplications;
