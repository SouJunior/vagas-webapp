import SelectedJobVacancy from '../../components/SelectedJobVacancy';
import Pagination from '../../components/Ui/Pagination';
import AllJobs from './components/AllJobs';
import Select from './components/Select';

import useJobs from '../../hooks/useJobs';

import Header from '@components/Header';
import { useLocation } from 'react-router-dom';
import FooterDefault from '../../components/FooterDefault';
import JobFilterPerfil from '../../components/JobFilterPerfil';
import Loading from '../../components/Loading';
import * as S from './style';

const FeedJobs = () => {
  const location = useLocation();
  const isJobPage = location.pathname.startsWith('/candidate-portal/job');

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
    handleSortChange,
    handleClick,
    handlePageChange,
    filteredJobsCount,
    isMobile,
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
    <div>
      {isJobPage && <Header variant="loggedInUser" userName={''} email={''} />}
      <S.Container noPadding={isJobPage}>
        {isJobPage && <JobFilterPerfil />}
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
      {isJobPage && <FooterDefault />}
    </div>
  );
};

export default FeedJobs;
