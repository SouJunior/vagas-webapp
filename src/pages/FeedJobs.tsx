import { Job, useJobList } from '../hooks/useJobList';
import JobCard from '../components/JobCard';
import JobDetails from '../components/JobDetails';
import FeedSearch from '../components/FeedVagas/FeedSearch';
import QuickFilter from '../components/QuickFilter';
import NoJobsSelectedCard from '../components/NoJobSelectedCard';
import Header from '../components/Portal/Header';

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

const FeedJobs = () => {
    const {
        selectedJob,
        clickedJob,
        noJobSelected,
        setNoJobSelected,
        sortOrder,
        setSortOrder,
        setSelectedJob,
        modalityFilter,
        setModalityFilter,
        fetchFilteredJobs,
        fetchNextPage,
        hasNextPage,
        isLoading,
        jobs,
        selecionaVaga,
    } = useJobList();

    function jobContent() {
        if (isLoading) {
            return undefined;
        }
    
        if (jobs && Object.keys(jobs).length === 0) {
            return null;
        }
    
        return (
            <ShowMore disabled={true}>
                Todas as vagas já foram exibidas.
            </ShowMore>
        );
    };

    const searchContent = jobContent();

    return (
        <>
            <Header />
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
                                        placeholder="Modelo de Trabalho"
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
                                        placeholder="Data do Anúncio"
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
                                        {searchContent}
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
