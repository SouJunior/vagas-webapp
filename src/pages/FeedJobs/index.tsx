import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Cognito from '../../assets/imgs/cognito.svg';

import SelectedJobVacancy from './components/SelectedJobVacancy';
import Pagination from '../../components/Ui/Pagination';

import apiJobs from '../../services/apiJobs';
import formatTimeAgo from '../../utils/formatTimeAgo';
import usePagination from '../../hooks/usePagination';

import { JobsProps } from './types';

import * as S from './style';

const ITEMS_PER_PAGE = 10;

const FeedJobs = () => {
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const sortOrder = searchParams.get('sort') || 'default';

    const getJob = async () => {
        setLoading(true);

        try {
            const { data: response } = await apiJobs.get('/job');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setError('Error fetching jobs');
        } finally {
            setLoading(false);
        }
    };

    const handleClick = (id: string) => {
        const selected = jobs.find((item) => item.id === id);
        if (selected) {
            setSelectedJob(selected);
        }
    };

    const handleSortChange = (value: string) => {
        setSearchParams({ sort: value });
        setCurrentPage(0);
    };

    const filteredJobs = jobs.sort((a, b) => {
        const dateA = new Date(a.created_date).getTime();
        const dateB = new Date(b.created_date).getTime();

        if (sortOrder === 'Mais Recentes') {
            return dateB - dateA;
        } else {
            return dateA - dateB;
        }
    });

    const {
        currentPage,
        paginatedItems: currentJobs,
        totalPages,
        setCurrentPage,
    } = usePagination<JobsProps>(filteredJobs, ITEMS_PER_PAGE);

    const containerRef = useRef<HTMLDivElement>(null);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const checkWidthSize = () => {
        const { innerWidth: width } = window;

        if (width < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkWidthSize();
        getJob();
        window.addEventListener('resize', checkWidthSize);

        return () => window.removeEventListener('resize', checkWidthSize);
    }, []);

    useEffect(() => {
        if (currentJobs.length > 0) {
            setSelectedJob(currentJobs[0]);
        }
    }, [currentJobs, sortOrder]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (jobs.length === 0) {
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
