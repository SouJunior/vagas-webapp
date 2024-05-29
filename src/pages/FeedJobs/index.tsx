import { useEffect, useState } from 'react';

import Cognito from '../../assets/imgs/cognito.svg';

import SelectedJobVacancy from './components/SelectedJobVacancy';

import { JobsProps } from './types';
import apiJobs from '../../services/apiJobs';
import parseTime from '../../utils/parseTime';

import * as S from './style';

const FeedJobs = () => {
    const [jobs, setJobs] = useState<JobsProps[]>([]);
    const [selectedJob, setSelectedJob] = useState<JobsProps | null>(null);
    const [sortOrder, setSortOrder] = useState('Mais Recentes');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

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

    const filteredJobs = jobs.sort((a, b) => {
        const timeA = parseTime(a.time);
        const timeB = parseTime(b.time);

        if (sortOrder === 'Mais Recentes') {
            return timeA - timeB;
        } else if (sortOrder === 'Mais Antigos') {
            return timeB - timeA;
        }

        return 0;
    });

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
                        onChange={(e) => setSortOrder(e.target.value)}
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

                    {filteredJobs.map((item) => (
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

                                <S.ParagraphSm opacity="0.9">
                                    Remoto - Junior - CLT
                                </S.ParagraphSm>

                                <S.LabelSm opacity="0.9">{item.time}</S.LabelSm>
                            </S.JobInfo>
                        </S.BoxJob>
                    ))}
                </S.ContainerAllJobs>

                {selectedJob && (
                    <SelectedJobVacancy selectedJob={selectedJob} />
                )}
            </S.SectionJob>
        </S.Container>
    );
};

export default FeedJobs;
