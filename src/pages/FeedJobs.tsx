import { ChangeEvent, useMemo, useState } from 'react';
import JobCardItem from '../components/FeedVagas/JobCardItem';
import { useApi } from '../hooks/useApi';
import JobDetails from '../components/FeedVagas/JobDetails';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';

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
    const [selectedJob, setSelectedJob] = useState<string | null>('');
    const [clickedJob, setClickedJob] = useState<Job[] | Job>([]);
    const [noJobSelected, setNoJobSelected] = useState(true);
    const [sortOrder, setSortOrder] = useState('');

    const api = useApi();
    const { search } = useLocation();

    const params = new URLSearchParams(search);
    const searchTerm: string = params.get('search') || '';

    const fetchJobs = async (page: number, sortOrder: string) => {
        const order = sortOrder || 'ASC';
        const response = await api.getJobs(page, order);
        return response.data;
    };

    const fetchFilteredJobs = async (searchTerm: string, page: number) => {
        const response = await api.searchJobs(searchTerm, page);
        return response.data;
    };

    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['jobs', searchTerm, sortOrder],
        queryFn: ({ pageParam = 1 }) =>
            searchTerm
                ? fetchFilteredJobs(searchTerm, pageParam)
                : fetchJobs(pageParam, sortOrder),
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
                                        {jobs?.map((job: Job) => (
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
                                        <JobDetailsWrapper>
                                            <NoJobsContainer>
                                                <InnerContainer>
                                                    <Icon />
                                                </InnerContainer>
                                                <Title>
                                                    Selecione uma vaga para ver
                                                    os detalhes.
                                                </Title>
                                                <Message>
                                                    (Todos os detalhes serão
                                                    mostrados bem aqui)
                                                </Message>
                                            </NoJobsContainer>
                                        </JobDetailsWrapper>
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
