import { FormEvent, useEffect, useState } from 'react';
import FeedHeader from '../components/FeedVagas/FeedHeader';
import FeedProfile from '../components/FeedVagas/FeedProfile';
import ActiveProfile from '../components/FeedVagas/FeedProfile/ActiveProfile';
import JobCardItem from '../components/FeedVagas/JobCardItem';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import { useApi } from '../hooks/useApi';
import JobDetails from '../components/FeedVagas/JobDetails';

import {
    Content,
    ContentWrapper,
    JobContainer,
    JobDetailsWrapper,
    JobsWrapper,
    ShowMore,
    Wrapper,
} from './styles/feedvagasStyles';
import FeedSearch from '../components/FeedVagas/FeedSearch';

interface Job {
    id: string;
    title: string;
    company: string;
    headquarters: string;
    modality: string;
    typeContract: string;
    publishedAt: string;
}

const FeedVagas = () => {
    const [activePage, setActivePage] = useState<string>('feedvagas');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<string | null>('');
    const [page, setPage] = useState<number>(1);
    const [clickedJob, setClickedJob] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [selectedJobType, setSelectedJobType] = useState('Todas as vagas');

    const api = useApi();

    const [jobIdFromUrl, setJobIdFromUrl] = useState<string | null>(null);

    useEffect(() => {
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

    useEffect(() => {
        async function getJobs() {
            const jobsData = await api.getJobs();
            setJobs(jobsData.data);
        }
        getJobs();
    }, []);

    async function selecionaVaga(id: string | null) {
        setSelectedJob(id);
        const item: any = jobs.filter((item) => item.id === id);
        setClickedJob(item);
        window.history.pushState({}, '', `/feedVagas?jobId=${id}`);
    }

    async function showMore(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        const newPage = page + 1;
        const jobs = await api.getJobs(newPage);
        if (jobs.data.length === 0) {
            setHasMore(false);
        } else {
            setPage(newPage);
            setJobs((oldJobs) => [...oldJobs, ...jobs.data]);
        }
        setLoading(false);
    }

    const onSubmit = () => {
        console.log('Submited');
    };

    // const filteredJobs = jobs.filter((job: any) => {
    //     // Verifica se o título da vaga contém o termo de pesquisa
    //     const titleMatch = job.title
    //         .toLowerCase()
    //         .includes(searchTerm.toLowerCase());

    //     // Verifica se o tipo de trabalho corresponde ao tipo de trabalho selecionado pelo usuário
    //     const jobTypeMatch =
    //         job.type === selectedJobType ||
    //         selectedJobType === 'Todas as vagas';

    //     // Verifica se a sede da empresa corresponde à localização selecionada pelo usuário
    //     const locationMatch = job.headquarters
    //         .toLowerCase()
    //         .includes(location.toLowerCase());

    //     // Retorna true se todos os critérios de pesquisa forem atendidos
    //     return titleMatch && jobTypeMatch && locationMatch;
    // });

    return (
        <Wrapper>
            <Content>
                <div>
                    <AuthProvider>
                        <FeedProfile />
                    </AuthProvider>
                    <ActiveProfile />
                </div>
                <FeedHeader
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </Content>
            <FeedSearch onSubmit={onSubmit} />
            <JobContainer>
                <ContentWrapper>
                    <JobsWrapper>
                        {jobs.map((job: any) => (
                            <JobCardItem
                                key={job.id}
                                id={job.id}
                                title={job.title}
                                company={job.company}
                                headquarters={job.headquarters}
                                modality={job.modality}
                                jobType={job.type}
                                typeContract={job.typeContract}
                                publishedAt={job.createdAt}
                                active={selectedJob === job.id}
                                onClick={() => {
                                    selecionaVaga(job.id);
                                }}
                            />
                        ))}
                    </JobsWrapper>
                    {selectedJob && (
                        <JobDetailsWrapper>
                            <JobDetails
                                id={selectedJob}
                                clickedJob={clickedJob}
                            />
                        </JobDetailsWrapper>
                    )}
                    {!hasMore && (
                        <ShowMore onClick={showMore} disabled={loading}>
                            Todas as vagas já foram exibidas.
                        </ShowMore>
                    )}
                    {hasMore && (
                        <ShowMore onClick={showMore} disabled={loading}>
                            {loading ? 'Carregando...' : 'Ver mais'}
                        </ShowMore>
                    )}
                </ContentWrapper>
            </JobContainer>
        </Wrapper>
    );
};

export default FeedVagas;
