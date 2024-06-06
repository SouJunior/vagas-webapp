import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import apiJobs from '../services/apiJobs';
import usePagination from './usePagination';

import { JobsProps } from '../pages/FeedJobs/types';

const ITEMS_PER_PAGE = 10;

const useJobs = () => {
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('search') || '';
    const location = searchParams.get('location') || '';
    const sortOrder = searchParams.get('sort') || 'default';

    const getJobs = async () => {
        setLoading(true);

        try {
            const { data: response } = await apiJobs.get('/job');
            setJobs(response.data);
        } catch (error) {
            console.error('Erro ao buscar vagas:', error);
            setError('Erro ao buscar vagas');
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
            const matchesSearchTerm = job.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesLocation = job.location
                .toLowerCase()
                .includes(location.toLowerCase());

            return matchesSearchTerm && matchesLocation;
        });
    };

    const sortedJobs = jobs.sort((a, b) => {
        const dateA = new Date(a.created_date).getTime();
        const dateB = new Date(b.created_date).getTime();

        return sortOrder === 'Mais Recentes' ? dateB - dateA : dateA - dateB;
    });

    const filteredJobs = filterJobs(sortedJobs, searchTerm, location);

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

    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        if (
            !selectedJob ||
            !currentJobs.some((job) => job.id === selectedJob.id)
        ) {
            setSelectedJob(currentJobs.length > 0 ? currentJobs[0] : null);
        }
    }, [currentJobs, selectedJob]);

    const handleSortChange = (value: string) => {
        setSearchParams((prevParams) => {
            const params = new URLSearchParams(prevParams);
            params.set('sort', value);
            return params;
        });
        setCurrentPage(0);
    };

    const handleClick = (id: string) => {
        const selected = jobs.find((item) => item.id === id);
        if (selected) {
            setSelectedJob(selected);
        }
    };

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
        isMobile,
        searchTerm,
        setSearchParams,
        handleSortChange,
        handleClick,
        handlePageChange,
    };
};

export default useJobs;
