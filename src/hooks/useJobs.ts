import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import apiJobs from '../services/apiJobs';
import usePagination from './usePagination';

import { JobsProps } from '../pages/FeedJobs/types';

const ITEMS_PER_PAGE = 10;

const useJobsFeed = () => {
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [selectedJob, setSelectedJob] = useState<JobsProps | null>(null);
    const [sortOrder, setSortOrder] = useState<string>('default');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const getJobs = async () => {
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

    useEffect(() => {
        getJobs();
    }, []);

    useEffect(() => {
        const sortParam = searchParams.get('sort');
        if (
            sortParam &&
            (sortParam === 'Mais Recentes' || sortParam === 'Mais Antigos')
        ) {
            setSortOrder(sortParam);
        }
    }, [searchParams]);

    const handleSortChange = (value: string) => {
        setSearchParams({ sort: value });
        setSortOrder(value);
        setCurrentPage(0);
    };

    const handleClick = (id: string) => {
        const selected = jobs.find((item) => item.id === id);
        if (selected) {
            setSelectedJob(selected);
        }
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

    const { paginatedItems: currentJobs, totalPages } =
        usePagination<JobsProps>(filteredJobs, ITEMS_PER_PAGE);

    const containerRef = useRef<HTMLDivElement>(null);

    const handlePageChange = (page: number) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setCurrentPage(page);
    };

    useEffect(() => {
        if (currentJobs.length > 0) {
            setSelectedJob(currentJobs[0]);
        }
    }, [currentJobs, sortOrder]);

    return {
        jobs,
        loading,
        error,
        sortOrder,
        setSearchParams,
        selectedJob,
        currentJobs,
        currentPage,
        totalPages,
        handleSortChange,
        handleClick,
        handlePageChange,
        containerRef,
    };
};

export default useJobsFeed;
