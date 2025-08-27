import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import { useApi } from '../hooks/useApi';

export interface Job {
  id: string;
  title: string;
  company: string;
  city: string;
  modality: string;
  typeContract: string;
  type: string;
  contractText?: string;
  description: string;
  indefinideContract: boolean;
  salaryMin?: number;
  salaryMax?: number;
  benefits?: string;
  prerequisites: string;
  federalUnit: string;
  createdAt: string;
  company_id: string;
}

export const useJobList = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>('');
  const [clickedJob, setClickedJob] = useState<Job[] | Job>([]);
  const [noJobSelected, setNoJobSelected] = useState(true);
  const [sortOrder, setSortOrder] = useState('');
  const [modalityFilter, setModalityFilter] = useState('');

  const api = useApi();
  const { search } = useLocation();

  const params = new URLSearchParams(search);
  const searchTerm: string = params.get('search') ?? '';
  const location: string = params.get('location') ?? '';

  const fetchJobs = async (
    page: number,
    sortOrder: string,
    modalityFilter: string,
  ) => {
    const order = sortOrder || 'ASC';
    const response = await api.getJobs(page, order, modalityFilter);
    return response.data;
  };

  const fetchFilteredJobs = async (searchTerm: string, page: number) => {
    const response = await api.searchJobs(searchTerm, page, {
      modality: modalityFilter,
      federalUnit: '',
      city: location,
    });
    refetch();
    return response.data;
  };

  const { data, refetch, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['jobs', searchTerm, sortOrder, modalityFilter],
      queryFn: ({ pageParam = 1 }) =>
        searchTerm || location
          ? fetchFilteredJobs(searchTerm, pageParam)
          : fetchJobs(pageParam, sortOrder, modalityFilter),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  const jobs = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [data]);

  async function selecionaVaga(id: string | null) {
    setSelectedJob(id);
    const item: Job = jobs.filter((item: Job) => item.id === id);
    setClickedJob(item);
    setNoJobSelected(false);
  }

  return {
    selectedJob,
    setSelectedJob,
    clickedJob,
    setClickedJob,
    noJobSelected,
    setNoJobSelected,
    sortOrder,
    setSortOrder,
    modalityFilter,
    setModalityFilter,
    fetchJobs,
    fetchFilteredJobs,
    searchTerm,
    location,
    data,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    jobs,
    selecionaVaga,
  };
};
export default useJobList;
