import { FormEvent, useEffect, useState } from 'react';
import FeedProfile from '../components/FeedVagas/FeedProfile';
import ActiveProfile from '../components/FeedVagas/FeedProfile/ActiveProfile';
import JobCardItem from '../components/FeedVagas/JobCardItem';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import { useApi } from '../hooks/useApi';
import JobDetails from '../components/FeedVagas/JobDetails';
import { useLocation } from 'react-router-dom';

import {
    ContentWrapper,
    FilterContainer,
    Icon,
    InnerContainer,
    JobContainer,
    JobDetailsWrapper,
    JobsWrapper,
    Message,
    NoJobsContainer,
    NoResultsMessage,
    PageTitle,
    ShowMore,
    Title,
    Wrapper,
    Content,
    JobList,
    QuickFilterContainer,
} from './styles/FeedVagasStyles';
import FeedSearch from '../components/FeedVagas/FeedSearch';
import Header from '../components/Header';
import QuickFilter from '../components/FeedVagas/QuickFilter';

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
    company_id: string;
}

const FeedJobs = () => {
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
    const { search } = useLocation();

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

    const params = new URLSearchParams(search);
    const searchTerm: any = params.get('searchTerm') || '';
    const location: any = params.get('location') || '';

    async function selecionaVaga(id: string | null) {
        setSelectedJob(id);
        const item: Job[] | undefined = jobs.filter((item) => item.id === id);
        setClickedJob(item);
        setNoJobSelected(false);
        window.history.pushState({}, '', `/jobs?jobId=${id}`);
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
        window.history.replaceState({}, '', '/jobs');
    };

    return (
        <>
            <Header pageName="Feed de Vagas" backTo={'/'}></Header>
            <Wrapper>
                <Content>
                    <FilterContainer>
                        <div>
                            <FeedSearch
                                FilterTerm={searchTerm}
                                Location={location}
                                data={jobs}
                                onFilter={handleFilter}
                                setFilteredJobs={setFilteredJobs}
                            />
                        </div>
                    </FilterContainer>
                    {filteredJobs.length === 0 && (
                        <NoResultsMessage>
                            Nenhuma vaga encontrada.
                        </NoResultsMessage>
                    )}

                    <JobContainer>
                        <PageTitle>Feed de Vagas</PageTitle>
                        <ContentWrapper>
                            <JobsWrapper>
                                <QuickFilterContainer>
                                    <QuickFilter
                                        options={[
                                            {
                                                label: 'Tipo de vaga',
                                                value: '',
                                            },
                                            {
                                                label: 'Remoto',
                                                value: 'remoto',
                                            },
                                            {
                                                label: 'Híbrido',
                                                value: 'hibrido',
                                            },
                                            {
                                                label: 'Presencial',
                                                value: 'presencial',
                                            },
                                        ]}
                                    />
                                    <QuickFilter
                                        options={[
                                            {
                                                label: 'Quando postada',
                                                value: '',
                                            },
                                            {
                                                label: 'Mais Recente',
                                                value: 'newest',
                                            },
                                            {
                                                label: 'Mais Antigo',
                                                value: 'oldest',
                                            },
                                        ]}
                                    />
                                </QuickFilterContainer>
                                <JobList>
                                    {filteredJobs.map((job: Job) => (
                                        <JobCardItem
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
                                </JobList>
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
                                </>
                            )}
                        </ContentWrapper>
                    </JobContainer>
                </Content>
            </Wrapper>
        </>
    );
};

export default FeedJobs;
