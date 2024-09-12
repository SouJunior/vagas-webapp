import AllJobs from './components/AllJobs';
import Pagination from '../../components/Ui/Pagination';
import SelectedJobVacancy from '../../components/SelectedJobVacancy';
import Select from './components/Select';

import useJobs from '../../hooks/useJobs';
import vagasNaoEncontradasImg from '../../assets/imgs/vaga-nao-encontrada-img.svg';
import * as S from './style';
import Loading from '../../components/Loading';
import Header from '../../components/Portal/Header';
import JobFilterPerfil from '../../components/JobFilterPerfil';
import { useLocation } from 'react-router-dom';
import FooterDefault from '../../components/FooterDefault';


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
            <S.ErrorContainer>
                <h1>Nenhum resultado foi encontrado</h1>
                <p>Dicas para melhorar a sua busca:</p>
                <ul>
                    <li><span>Evite usar abreviações;</span></li>
                    <li><span>Confira se as palavras estão escritas corretamente;</span></li>
                    <li><span>Tente termos mais genéricos ou retire os filtros de sua busca.</span></li>
                </ul>
                <S.ImageWrapper>
                    <img src={vagasNaoEncontradasImg} alt="vagas não encontradas" />
                </S.ImageWrapper>
            </S.ErrorContainer>
        );
    }

    if (currentJobs.length === 0) {
        return (
            <S.ErrorContainer>
                <h1>Nenhum resultado foi encontrado</h1>
                <p>Dicas para melhorar a sua busca:</p>
                <ul>
                    <li><span>Evite usar abreviações;</span></li>
                    <li><span>Confira se as palavras estão escritas corretamente;</span></li>
                    <li><span>Tente termos mais genéricos ou retire os filtros de sua busca.</span></li>
                </ul>
                <S.ImageWrapper>
                    <img src={vagasNaoEncontradasImg} alt="vagas não encontradas" />
                </S.ImageWrapper>
            </S.ErrorContainer>
        );
    }

    return (
        <div>
            {isJobPage && <Header />}
            <S.Container noPadding={isJobPage} >
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
