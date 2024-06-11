import AllJobs from './components/AllJobs';
import Pagination from '../../components/Ui/Pagination';
import SelectedJobVacancy from './components/SelectedJobVacancy';
import Select from './components/Select';

import useJobs from '../../hooks/useJobs';

import * as S from './style';
import Loading from '../../components/Loading';

const FeedJobs = () => {
    const {
        loading,
        error,
        sortOrder,
        containerRef,
        searchTerm,
        currentJobs,
        selectedJob,
        totalPages,
        currentPage,
        isMobile,
        handleSortChange,
        handleClick,
        handlePageChange,
        filteredJobsCount,
    } = useJobs();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <S.Container>
                <p>{error}</p>
            </S.Container>
        );
    }

    if (currentJobs.length === 0) {
        return (
            <S.Container>
                <p>No jobs available</p>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.SectionFilters>
                <Select onSortChange={handleSortChange} sortOrder={sortOrder} />
            </S.SectionFilters>

            <S.SectionJob>
                <S.ContainerAllJobs ref={containerRef}>
                    <AllJobs
                        searchTerm={searchTerm}
                        currentJobs={currentJobs}
                        selectedJob={selectedJob}
                        handleClick={handleClick}
                        filteredJobsCount={filteredJobsCount}
                    />

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
