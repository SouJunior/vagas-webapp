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
import {
    AboutColumn,
    DescriptionContainer,
    HeadColumn,
    HeadRow,
    JobInfoContainer,
    OptionsBtn,
} from './styles/JobsPanel';
import EndJobModal from '../components/EndJobModal';

const JobsPanel = () => {
    const [selectedJob, setSelectedJob] = useState<string | null>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noJobSelected, setNoJobSelected] = useState(true);
    const [clickedJob, setClickedJob] = useState<any>([]);
    const [jobStatus, setJobStatus] = useState('');

    const auth = useContext(AuthContext);
    const companyId = auth.user?.id;
    const api = useApi();

    const fetchCompanyJobsById = async (id: string) => {
        const response = await api.getCompanyById(id);
        console.log(response);
        return response;
    };

    const { data } = useQuery({
        queryKey: ['companyJobs'],
        queryFn: () => fetchCompanyJobsById(companyId),
    });

    async function selecionaVaga(id: string | null) {
        setSelectedJob(id);
        const item: Job = data.jobs.filter((item: Job) => item.id === id);
        setClickedJob(item);
        setNoJobSelected(false);
    }

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
                                        value: 'REMOTE',
                                    },
                                    {
                                        label: 'Vagas encerradas',
                                        value: 'HYBRID',
                                    },
                                ]}
                                selectedValue={jobStatus}
                                onChange={(event: any) =>
                                    setJobStatus(event.target.value)
                                }
                                placeholder="Status da vaga"
                            />
                            <QuickFilter
                                options={[
                                    {
                                        label: 'Recentes',
                                        value: 'ALL',
                                    },
                                    {
                                        label: 'Antigas',
                                        value: 'REMOTE',
                                    },
                                ]}
                                selectedValue={jobStatus}
                                onChange={(event: any) =>
                                    setJobStatus(event.target.value)
                                }
                                placeholder="Quando postada"
                            />
                        </QuickFilterContainer>
                        {data?.jobs.map((job: any) => (
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
                    {isModalOpen && <EndJobModal title={JobClicked?.title} onClose={() => setIsModalOpen(!isModalOpen)} />}
                    {selectedJob ? (
                        <JobInfoContainer>
                            <HeadRow>
                                <HeadColumn>
                                    <h2>
                                        {JobClicked?.title} <span>Ativa</span>
                                    </h2>
                                    <h3>{data?.companyName}</h3>
                                    <h4>
                                        {JobClicked?.city
                                            ? JobClicked?.city
                                            : 'São Paulo - SP'}
                                    </h4>
                                    <h3 className="jobModel">
                                        {JobClicked?.modality} -{' '}
                                        {JobClicked?.type} -{' '}
                                        {JobClicked?.typeContract}
                                    </h3>
                                </HeadColumn>
                                <HeadColumn>
                                    <OptionsBtn type="edit">Editar</OptionsBtn>
                                    <OptionsBtn type="end" onClick={() => setIsModalOpen(true)}>
                                        Encerrar Vaga
                                    </OptionsBtn>
                                </HeadColumn>
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
            </Container>
        </>
    );
};

export default JobsPanel;
