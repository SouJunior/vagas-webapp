import AllJobs from './components/AllJobs';
import Pagination from '../../components/Ui/Pagination';
import SelectedJobVacancy from './components/SelectedJobVacancy';
import Select from './components/Select';

import useJobs from '../../hooks/useJobs';

import * as S from './style';

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
    } = useJobs();

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
                <Select onSortChange={handleSortChange} sortOrder={sortOrder} />
            </S.SectionFilters>

            <S.SectionJob>
                <S.ContainerAllJobs ref={containerRef}>
                    <AllJobs
                        searchTerm={searchTerm}
                        currentJobs={currentJobs}
                        selectedJob={selectedJob}
                        handleClick={handleClick}
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
