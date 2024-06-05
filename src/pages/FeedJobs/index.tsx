import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cognito from '../../assets/imgs/cognito.svg';
import SelectedJobVacancy from './components/SelectedJobVacancy';
import { JobsProps } from './types';
import apiJobs from '../../services/apiJobs';
import * as S from './style';
import Pagination from '../../components/Ui/Pagination';
import formatTimeAgo from '../../utils/formatTimeAgo';

const ITEMS_PER_PAGE = 10;

const FeedJobs = () => {
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const sortOrder = searchParams.get('sort') || 'default';

    const getJob = async () => {
        setLoading(true);

        try {
            const { data: response } = await apiJobs.get('/job');
            setJobs(response.data);
            setSelectedJob(response.data[0]);
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
        setCurrentPage(0);
        setSearchParams({ sort: value });
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

    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredJobs.length);
    const currentJobs = filteredJobs.slice(startIndex, endIndex);

    useEffect(() => {
        getJob();
    }, []);

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
                <S.ContainerAllJobs>
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
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </S.ContainerAllJobs>

                {selectedJob && (
                    <SelectedJobVacancy selectedJob={selectedJob} />
                )}
            </S.SectionJob>
        </S.Container>
    );
};

export default FeedJobs;
