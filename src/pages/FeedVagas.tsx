import { FormEvent, useEffect, useState } from 'react';
import FeedProfile from '../components/FeedVagas/FeedProfile';
import ActiveProfile from '../components/FeedVagas/FeedProfile/ActiveProfile';
import JobCardItem from '../components/FeedVagas/JobCardItem';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import { useApi } from '../hooks/useApi';
import JobDetails from '../components/FeedVagas/JobDetails';

import {
    ContentWrapper,
    Grid,
    Icon,
    InnerContainer,
    JobContainer,
    JobDetailsWrapper,
    JobsWrapper,
    Message,
    NoJobsContainer,
    NoResultsMessage,
    ProfileStatus,
    ProfileStatusContent,
    ShowMore,
    Title,
    Wrapper,
} from './styles/feedvagasStyles';
import {
    DivisionBar,
    ProfileJobsBoard,
    ProfilesJobsBoardImg,
    ProfilesJobsInfo,
    ProfilesJobsInfoDescription,
    ProfilesJobsInfoStatus,
    ProfilesJobsInfoTitle,
    YourJobsTitle,
} from '../components/FeedVagas/FeedProfile/styles';
import FeedSearch from '../components/FeedVagas/FeedSearch';
import Header from '../components/Header';

interface Job {
    id: string;
    title: string;
    company: string;
    city: string;
    modality: string;
    typeContract: string;
    type: string;
    contractText?: string;
    description: string;
    indefinideContract: boolean;
    salaryMin?: number;
    salaryMax?: number;
    benefits?: string;
    prerequisites: string;
    federalUnit: string;
    createdAt: string;
}

const FeedVagas = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<string | null>('');
    const [page, setPage] = useState<number>(1);
    const [clickedJob, setClickedJob] = useState<Job[] | Job>([]);
    const [hasMoreLoading, setHasMoreLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
    const [noJobSelected, setNoJobSelected] = useState(true);
    const [jobIdFromUrl, setJobIdFromUrl] = useState<string | null>(null);

    const api = useApi();

    useEffect(() => {
        async function getJobs() {
            const jobsData = await api.getJobs();
            setJobs(jobsData.data);
        }
        getJobs();

        const urlSearchParams = new URLSearchParams(window.location.search);
        const jobId = urlSearchParams.get('jobId');
        setJobIdFromUrl(jobId);
    }, []);

    useEffect(() => {
        if (jobIdFromUrl && jobs) {
            const job = jobs.find((job) => job.id === jobIdFromUrl);
            if (job) {
                setSelectedJob(jobIdFromUrl);
                setClickedJob(job);
            }
        }
    }, [jobIdFromUrl, jobs]);

    async function selecionaVaga(id: string | null) {
        setSelectedJob(id);
        const item: Job[] | undefined = jobs.filter((item) => item.id === id);
        setClickedJob(item);
        setNoJobSelected(false);
        window.history.pushState({}, '', `/feedVagas?jobId=${id}`);
    }

    async function showMore(e: FormEvent) {
        e.preventDefault();
        setHasMoreLoading(true);
        const newPage = page + 1;
        const jobs = await api.getJobs(newPage);
        if (jobs.data.length === 0) {
            setHasMore(false);
        } else {
            setPage(newPage);
            setJobs((oldJobs) => [...oldJobs, ...jobs.data]);
        }
        setHasMoreLoading(false);
    }
    const handleFilter = (filteredJobs: Job[]) => {
        setFilteredJobs(filteredJobs);
        setSelectedJob(null);
        window.history.replaceState({}, '', '/feedVagas');
    };
    return (
        <>
            <Header pageName="Feed de Vagas" backTo={'/'}></Header>
            <Grid>
                {/* Código será refatorado e tranformado em componente assim que vier informações do backend */}
                <ProfileStatus>
                    <ProfileStatusContent>
                        <AuthProvider>
                            <FeedProfile />
                        </AuthProvider>
                        <ActiveProfile />
                        <DivisionBar />
                        <YourJobsTitle>Suas vagas</YourJobsTitle>
                        <ProfileJobsBoard>
                            <ProfilesJobsBoardImg />
                            <ProfilesJobsInfo>
                                <ProfilesJobsInfoTitle>
                                    UX Designer Junior
                                </ProfilesJobsInfoTitle>
                                <ProfilesJobsInfoDescription>
                                    Empresa Verde
                                </ProfilesJobsInfoDescription>
                                <ProfilesJobsInfoStatus>
                                    Status
                                </ProfilesJobsInfoStatus>
                            </ProfilesJobsInfo>
                        </ProfileJobsBoard>
                        {/* Esses outros "profileJobsBoard" são temporários para demonstração estática por faltar 
                    dados do back-end e não ser possível fazer o map com a renderização dos componentes. */}
                        <ProfileJobsBoard>
                            <ProfilesJobsBoardImg />
                            <ProfilesJobsInfo>
                                <ProfilesJobsInfoTitle>
                                    UX Designer Junior
                                </ProfilesJobsInfoTitle>
                                <ProfilesJobsInfoDescription>
                                    Empresa Verde
                                </ProfilesJobsInfoDescription>
                                <ProfilesJobsInfoStatus>
                                    Status
                                </ProfilesJobsInfoStatus>
                            </ProfilesJobsInfo>
                        </ProfileJobsBoard>
                        <ProfileJobsBoard>
                            <ProfilesJobsBoardImg />
                            <ProfilesJobsInfo>
                                <ProfilesJobsInfoTitle>
                                    UX Designer Junior
                                </ProfilesJobsInfoTitle>
                                <ProfilesJobsInfoDescription>
                                    Empresa Verde
                                </ProfilesJobsInfoDescription>
                                <ProfilesJobsInfoStatus>
                                    Status
                                </ProfilesJobsInfoStatus>
                            </ProfilesJobsInfo>
                        </ProfileJobsBoard>
                    </ProfileStatusContent>
                </ProfileStatus>

                <Wrapper>
                    <FeedSearch
                        data={jobs}
                        onFilter={handleFilter}
                        setFilteredJobs={setFilteredJobs}
                    />
                    {filteredJobs.length === 0 && (
                        <NoResultsMessage>
                            Nenhuma vaga encontrada.
                        </NoResultsMessage>
                    )}
                    <JobContainer>
                        <ContentWrapper>
                            <JobsWrapper>
                                {filteredJobs.map((job: Job) => (
                                    <JobCardItem
                                        key={job.id}
                                        id={job.id}
                                        title={job.title}
                                        company={job.company}
                                        city={job.city}
                                        federalUnit={job.federalUnit}
                                        modality={job.modality}
                                        jobType={job.type}
                                        typeContract={job.typeContract}
                                        publishedAt={job.createdAt}
                                        active={selectedJob === job.id}
                                        opacity={
                                            noJobSelected ||
                                            selectedJob === job.id
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
                            </JobsWrapper>
                            {filteredJobs.length > 0 && (
                                <>
                                    {selectedJob ? (
                                        <JobDetailsWrapper>
                                            <JobDetails
                                                id={selectedJob}
                                                clickedJob={clickedJob}
                                            />
                                        </JobDetailsWrapper>
                                    ) : (
                                        <NoJobsContainer>
                                            <InnerContainer>
                                                <Icon />
                                            </InnerContainer>
                                            <Title>
                                                Selecione uma vaga para ver os
                                                detalhes.
                                            </Title>
                                            <Message>
                                                (Todos os detalhes serão
                                                mostrados bem aqui)
                                            </Message>
                                        </NoJobsContainer>
                                    )}
                                    {!hasMore && (
                                        <ShowMore
                                            onClick={showMore}
                                            disabled={hasMoreLoading}
                                        >
                                            Todas as vagas já foram exibidas.
                                        </ShowMore>
                                    )}
                                    {hasMore && (
                                        <ShowMore
                                            onClick={showMore}
                                            disabled={hasMoreLoading}
                                        >
                                            {hasMoreLoading
                                                ? 'Carregando...'
                                                : 'Ver mais'}
                                        </ShowMore>
                                    )}
                                </>
                            )}
                        </ContentWrapper>
                    </JobContainer>
                </Wrapper>
            </Grid>
        </>
    );
};

export default FeedVagas;
