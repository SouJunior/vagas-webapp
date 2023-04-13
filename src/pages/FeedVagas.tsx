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
    const [clickedJob, setClickedJob] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const api = useApi();

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
