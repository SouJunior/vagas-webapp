import { Job, useJobList } from '../../hooks/useJobList';
import JobCard from '../../components/JobCard';
import JobDetails from '../../components/JobDetails';
import FeedSearch from '../../components/FeedVagas/FeedSearch';
import QuickFilter from '../../components/QuickFilter';
import NoJobsSelectedCard from '../../components/NoJobSelectedCard';

import * as S from './style';

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
            <S.ShowMore disabled={true}>
                Todas as vagas já foram exibidas.
            </S.ShowMore>
        );
    }

    const searchContent = jobContent();

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <FeedSearch onSearch={fetchFilteredJobs} />

                    <S.JobContainer>
                        <S.ContentWrapper>
                            <S.JobsWrapper>
                                <S.QuickFilterContainer>
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
                                        placeholder="Data do Anúncio"
                                        selectedValue={sortOrder}
                                        onChange={(event: any) =>
                                            setSortOrder(event.target.value)
                                        }
                                    />
                                </S.QuickFilterContainer>

                                {jobs && Object.keys(jobs).length === 0 && (
                                    <S.NoResultsMessage>
                                        Nenhuma vaga encontrada.
                                    </S.NoResultsMessage>
                                )}

                                {isLoading ? (
                                    <S.NoResultsMessage>
                                        Carregando...
                                    </S.NoResultsMessage>
                                ) : (
                                    <S.JobList>
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
                                    </S.JobList>
                                )}

                                {hasNextPage ? (
                                    <S.ShowMore
                                        onClick={() => fetchNextPage()}
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? 'Carregando...'
                                            : 'Ver mais'}
                                    </S.ShowMore>
                                ) : (
                                    <>{searchContent}</>
                                )}
                            </S.JobsWrapper>

                            {jobs && Object.keys(jobs).length > 0 && (
                                <>
                                    {selectedJob ? (
                                        <S.JobDetailsWrapper>
                                            <JobDetails
                                                id={selectedJob}
                                                clickedJob={clickedJob}
                                            />
                                        </S.JobDetailsWrapper>
                                    ) : (
                                        <S.NoJobsMargin>
                                            <NoJobsSelectedCard />
                                        </S.NoJobsMargin>
                                    )}
                                </>
                            )}
                        </S.ContentWrapper>
                    </S.JobContainer>
                </S.Content>
            </S.Wrapper>
        </>
    );
};

export default FeedJobs;
