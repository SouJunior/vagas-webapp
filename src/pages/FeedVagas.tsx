import { useEffect, useState } from 'react';
import FeedHeader from '../components/FeedVagas/FeedHeader';
import FeedProfile from '../components/FeedVagas/FeedProfile';
import ActiveProfile from '../components/FeedVagas/FeedProfile/ActiveProfile';
import { AuthProvider } from '../contexts/Auth/AuthProvider';
import JobCard from '../components/FeedVagas/VagasCard';
import { useApi } from '../hooks/useApi';
import JobDetails from '../components/FeedVagas/JobDetails';
import {
    Content,
    ContentWrapper,
    JobContainer,
    JobDetailsWrapper,
    JobsWrapper,
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
    const [activePage, setActivePage] = useState('feedvagas');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<string | null>('');

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
                            <JobCard
                                key={job.id}
                                id={job.id}
                                title={job.title}
                                company={job.company}
                                headquarters={job.headquarters}
                                modality={job.modality}
                                jobType={job.type}
                                typeContract={job.typeContract}
                                publishedAt={job.createdAt}
                                onClick={() => {
                                    selecionaVaga(job.id);
                                }}
                            />
                        ))}
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
