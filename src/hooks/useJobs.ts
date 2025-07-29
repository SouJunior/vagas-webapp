import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { JobsProps } from '../pages/FeedJobs/types';
import apiJobs from '../services/apiJobs';
import usePagination from './usePagination';

const ITEMS_PER_PAGE = 10;

const useJobs = () => {
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [filteredJobsCount, setFilteredJobsCount] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>();

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const sortOrder = searchParams.get('sort') || 'default';
    const navigate = useNavigate();

    const handleResize = () => {
        setIsMobile(window.innerWidth < 767);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getJobs = async () => {
        setLoading(true);

        try {
            const { data: response } = await apiJobs.get('/job');
            setJobs(Array.isArray(response) ? response : response.data);
        } catch (error) {
            console.error('Erro ao buscar vagas:', error);
            setError('Erro ao buscar vagas');
            setJobs([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getJobs();
    }, []);

    const filterJobs = (
        jobs: JobsProps[],
        searchTerm: string,
        location: string,
    ) => {
        return jobs.filter((job) => {
            const title = job.title ?? '';
            const jobLocation = job.location ?? '';

            const matchesSearchTerm = title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesLocation = jobLocation
                .toLowerCase()
                .includes(location.toLowerCase());

            return matchesSearchTerm && matchesLocation;
        });
    };

    const sortedJobs = (jobs || []).sort((a, b) => {
        const dateA = new Date(a.created_date).getTime();
        const dateB = new Date(b.created_date).getTime();

        return sortOrder === 'Mais Recentes' ? dateB - dateA : dateA - dateB;
    });

    const filteredJobs = filterJobs(sortedJobs, searchTerm, location);

    useEffect(() => {
        setFilteredJobsCount(filteredJobs.length);
    }, [filteredJobs]);

    const {
        currentPage,
        paginatedItems: currentJobs,
        totalPages,
        setCurrentPage,
    } = usePagination<JobsProps>(filteredJobs, ITEMS_PER_PAGE);

    const containerRef = useRef<HTMLDivElement>(null);

    const handlePageChange = (page: number) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setCurrentPage(page);
    };

    useEffect(() => {
        if (
            !selectedJob ||
            !currentJobs.some((job) => job.id === selectedJob.id)
        ) {
            setSelectedJob(currentJobs.length > 0 ? currentJobs[0] : null);
        }
    }, [currentJobs, selectedJob, setSelectedJob]);

    const handleSortChange = (value: string) => {
        setSearchParams((prevParams) => {
            const params = new URLSearchParams(prevParams);
            params.set('sort', value);
            return params;
        });
        setCurrentPage(0);
    };

    const handleClick = (id: string) => {
        const selected = jobs?.find((item) => item.id === id);

        if (isMobile) {
            return navigate(`/job/selected/${id}`);
        }

        if (selected) {
            setSelectedJob(selected);
        }
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [searchTerm, location, sortOrder, setCurrentPage]);

    return {
        jobs,
        loading,
        error,
        sortOrder,
        selectedJob,
        currentJobs,
        currentPage,
        totalPages,
        containerRef,
        searchTerm,
        setSearchParams,
        handleSortChange,
        handleClick,
        handlePageChange,
        filteredJobsCount,
        isMobile,
    };
};

export default useJobs;
