import React, { useContext, useState } from 'react';
import Applicant from '../components/Applicant';
import {
    ApplicantsContainer,
    ApplicantsList,
    PageTitle,
    Container,
    JobList,
    ContentWrapper,
    DetailsJobTitle,
    Subtitle,
    Text,
    JobHeadText,
    QuickFilterContainer,
} from './styles/CompanyApplicationsStyles';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { useQuery } from 'react-query';
import { useApi } from '../hooks/useApi';
import JobCard from '../components/JobCard';
import { Job } from '../@types/jobs';
import NoJobsSelectedCard from '../components/NoJobSelectedCard';
import QuickFilter from '../components/QuickFilter';
import Header from '../components/Portal/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

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
            <Header />
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
                                onChange={(event: any) =>
                                    setJobStatus(event.target.value)
                                }
                                placeholder="Status da vaga"
                            />
                        </QuickFilterContainer>
                        {(
                            (filteredJobs.length > 0
                                ? filteredJobs
                                : data?.jobs) || []
                        ).map((job: any) => (
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
                                opacity={
                                    noJobSelected || selectedJob === job.id
                                        ? 1
                                        : 0.6
                                }
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
                    {selectedJob ? (
                        <ApplicantsContainer>
                            <JobHeadText>
                                <DetailsJobTitle>
                                    {JobClicked?.title}
                                </DetailsJobTitle>
                                <Subtitle>
                                    {JobClicked?.modality} - {JobClicked?.type}{' '}
                                    -{JobClicked?.typeContract}
                                </Subtitle>
                                <Text>{JobClicked?.contractType}</Text>
                            </JobHeadText>
                            <ApplicantsList>
                                {applications.length > 0 ? (
                                    applications.map((candidate: any) => (
                                        <Applicant onClick={() => navigate("/match-jobs")} key={candidate.id}>
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
                <Footer />
            </Container>
        </>
    );
};

export default CompanyApplications;
