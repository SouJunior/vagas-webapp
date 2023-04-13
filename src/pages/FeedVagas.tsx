import { FormEvent, useEffect, useState } from 'react';
import FeedHeader from '../components/FeedVagas/FeedHeader';
import FeedProfile from '../components/FeedVagas/FeedProfile';
import ActiveProfile from '../components/FeedVagas/FeedProfile/ActiveProfile';
import VagasCard from '../components/FeedVagas/VagasCard';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import { useApi } from '../hooks/useApi';
import JobDetails from '../components/FeedVagas/JobDetails';

//LIB DE LAZYLOADING

import {
    Content,
    ContentWrapper,
    JobContainer,
    JobDetailsWrapper,
    JobsWrapper,
    Wrapper,
} from './styles/feedvagasStyles';
import { act } from 'react-dom/test-utils';

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
    const [active, setActive] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

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
    }

    const showMore =  async (e:FormEvent) => {
        e.preventDefault();
        setPage((old) => old + 1)
        const jobs = await api.getJobs(page);
        console.log(page)
        setJobs((old) => ([...old, jobs]))
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
                                <VagasCard
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
                            <button type="button" onClick={showMore}>Ver mais</button>
                        </JobsWrapper>
                    {selectedJob && (
                        <JobDetailsWrapper>
                            <JobDetails id={selectedJob} />
                        </JobDetailsWrapper>
                    )}
                </ContentWrapper>
            </JobContainer>
        </Wrapper>
    );
};

export default FeedVagas;
