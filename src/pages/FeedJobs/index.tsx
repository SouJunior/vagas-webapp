import Cognito from '../../assets/imgs/cognito.svg';

import SelectedJobVacancy from './components/SelectedJobVacancy';
import Pagination from '../../components/Ui/Pagination';

import formatTimeAgo from '../../utils/formatTimeAgo';

import * as S from './style';
import useJobsFeed from '../../hooks/useJobs';

const FeedJobs = () => {
    const {
        loading,
        error,
        sortOrder,
        jobs,
        selectedJob,
        currentJobs,
        currentPage,
        totalPages,
        handleSortChange,
        handleClick,
        handlePageChange,
        containerRef,
    } = useJobsFeed();

    const isMobile = window.innerWidth < 768;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (currentJobs.length === 0) {
        return <p>No jobs available</p>;
    }

    return (
        <S.Container>
            <S.SectionFilters>
                <S.SelectBox>
                    <select
                        defaultValue={'default'}
                        onChange={(e) => handleSortChange(e.target.value)}
                        value={sortOrder}
                    >
                        <option value="default" disabled>
                            Filtrar por:
                        </option>
                        <option value="Mais Recentes">Mais recentes</option>
                        <option value="Mais Antigos">Mais antigos</option>
                    </select>
                </S.SelectBox>
            </S.SectionFilters>

            <S.SectionJob>
                <S.ContainerAllJobs ref={containerRef}>
                    <S.HeaderAllJobs>
                        <S.AllJobsTitle>UX Design</S.AllJobsTitle>
                        <S.AllJobsQuantity>
                            <strong>{jobs.length} vagas</strong> encontradas
                        </S.AllJobsQuantity>
                    </S.HeaderAllJobs>
                    {currentJobs.map((item) => (
                        <S.BoxJob
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            isActive={selectedJob?.id === item.id}
                        >
                            <figure>
                                <S.CompanyImage src={Cognito} alt="cognito" />
                            </figure>

                            <S.JobInfo>
                                <S.ParagraphMd transform="capitalize">
                                    {item.title}
                                </S.ParagraphMd>

                                {item.company && (
                                    <S.ParagraphSm>
                                        {item.company}
                                    </S.ParagraphSm>
                                )}

                                {item.location && (
                                    <S.ParagraphSm opacity="0.9">
                                        {item.location}
                                    </S.ParagraphSm>
                                )}

                                <S.LabelSm opacity="0.9">
                                    {formatTimeAgo(item.created_date)}
                                </S.LabelSm>
                            </S.JobInfo>
                        </S.BoxJob>
                    ))}

                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </S.ContainerAllJobs>

                {!isMobile && selectedJob && (
                    <SelectedJobVacancy selectedJob={selectedJob} />
                )}
            </S.SectionJob>
        </S.Container>
    );
};

export default FeedJobs;
