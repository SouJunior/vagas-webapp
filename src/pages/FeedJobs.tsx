import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useApi } from '../hooks/useApi';
import JobCard from '../components/JobCard';
import JobDetails from '../components/JobDetails';
import FeedSearch from '../components/FeedVagas/FeedSearch';
import Header from '../components/Header';
import QuickFilter from '../components/QuickFilter';
import NoJobsSelectedCard from '../components/NoJobSelectedCard';

import {
    ContentWrapper,
    FilterContainer,
    JobContainer,
    JobsWrapper,
    NoResultsMessage,
    PageTitle,
    ShowMore,
    Wrapper,
    Content,
    JobList,
    QuickFilterContainer,
    JobDetailsWrapper,
    NoJobsMargin,
} from './styles/FeedVagasStyles';

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
    const [selectedJob, setSelectedJob] = useState<string | null>('');
    const [clickedJob, setClickedJob] = useState<Job[] | Job>([]);
    const [noJobSelected, setNoJobSelected] = useState(true);
    const [sortOrder, setSortOrder] = useState('');
    const [modalityFilter, setModalityFilter] = useState('');

    const api = useApi();
    const { search } = useLocation();

    const params = new URLSearchParams(search);
    const searchTerm: string = params.get('search') || '';
    const location: string = params.get('location') || '';

    const fetchJobs = async (
        page: number,
        sortOrder: string,
        modalityFilter: string,
    ) => {
        const order = sortOrder || 'ASC';
        const response = await api.getJobs(page, order, modalityFilter);
        return response.data;
    };

    const fetchFilteredJobs = async (searchTerm: string, page: number) => {
        const response = await api.searchJobs(searchTerm, page, {
            modality: modalityFilter,
            federalUnit: '',
            city: location,
        });
        refetch();
        return response.data;
    };

    const { data, refetch, fetchNextPage, hasNextPage, isLoading } =
        useInfiniteQuery({
            queryKey: ['jobs', searchTerm, sortOrder, modalityFilter],
            queryFn: ({ pageParam = 1 }) =>
                searchTerm || location
                    ? fetchFilteredJobs(searchTerm, pageParam)
                    : fetchJobs(pageParam, sortOrder, modalityFilter),
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.length ? allPages.length + 1 : undefined;
            },
        });

    const jobs = useMemo(() => {
        return data?.pages.reduce((acc, page) => {
            return [...acc, ...page];
        }, []);
    }, [data]);

    async function selecionaVaga(id: string | null) {
        setSelectedJob(id);
        const item: Job = jobs.filter((item: Job) => item.id === id);
        setClickedJob(item);
        setNoJobSelected(false);
    }

    return (
        <>
            <Header pageName="Feed de Vagas" backTo={'/'}></Header>
            <Wrapper>
                <Content>
                    <FilterContainer>
                        <div>
                            <FeedSearch onSearch={fetchFilteredJobs} />
                        </div>
                    </FilterContainer>

                    <JobContainer>
                        <PageTitle>Feed de Vagas</PageTitle>
                        <ContentWrapper>
                            <JobsWrapper>
                                <QuickFilterContainer>
                                    <QuickFilter
                                        options={[
                                            {
                                                label: 'Remoto',
                                                value: 'REMOTE',
                                            },
                                            {
                                                label: 'Híbrido',
                                                value: 'HYBRID',
                                            },
                                            {
                                                label: 'Presencial',
                                                value: 'IN_PERSON',
                                            },
                                        ]}
                                        selectedValue={modalityFilter}
                                        onChange={(event: any) =>
                                            setModalityFilter(
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Tipo de vaga"
                                    />
                                    <QuickFilter
                                        options={[
                                            {
                                                label: 'Mais Recente',
                                                value: 'DESC',
                                            },
                                            {
                                                label: 'Mais Antigo',
                                                value: 'ASC',
                                            },
                                        ]}
                                        placeholder="Quando postada"
                                        selectedValue={sortOrder}
                                        onChange={(event: any) =>
                                            setSortOrder(event.target.value)
                                        }
                                    />
                                </QuickFilterContainer>
                                {jobs && Object.keys(jobs).length === 0 && (
                                    <NoResultsMessage>
                                        Nenhuma vaga encontrada.
                                    </NoResultsMessage>
                                )}

                                {isLoading ? (
                                    <NoResultsMessage>
                                        Carregando...
                                    </NoResultsMessage>
                                ) : (
                                    <JobList>
                                        {(jobs || []).map((job: Job) => (
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
                                                company={job.company}
                                                active={selectedJob === job.id}
                                                opacity={
                                                    noJobSelected ||
                                                    selectedJob === job.id
                                                        ? 1
                                                        : 0.6
                                                }
                                                onClick={() => {
                                                    if (
                                                        selectedJob === job.id
                                                    ) {
                                                        setSelectedJob(null);
                                                        setNoJobSelected(true);
                                                    } else {
                                                        selecionaVaga(job.id);
                                                    }
                                                }}
                                            />
                                        ))}
                                    </JobList>
                                )}

                                {hasNextPage ? (
                                    <ShowMore
                                        onClick={() => fetchNextPage()}
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? 'Carregando...'
                                            : 'Ver mais'}
                                    </ShowMore>
                                ) : (
                                    <>
                                        {jobs &&
                                        Object.keys(jobs).length ===
                                            0 ? null : (
                                            <ShowMore disabled={true}>
                                                Todas as vagas já foram
                                                exibidas.
                                            </ShowMore>
                                        )}
                                    </>
                                )}
                            </JobsWrapper>

                            {jobs && Object.keys(jobs).length > 0 && (
                                <>
                                    {selectedJob ? (
                                        <JobDetailsWrapper>
                                            <JobDetails
                                                id={selectedJob}
                                                clickedJob={clickedJob}
                                            />
                                        </JobDetailsWrapper>
                                    ) : (
                                        <NoJobsMargin>
                                            <NoJobsSelectedCard />
                                        </NoJobsMargin>
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
