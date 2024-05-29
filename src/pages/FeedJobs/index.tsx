import { useEffect, useState } from 'react';
import axios from 'axios';

import Cognito from '../../assets/imgs/cognito.svg';

import * as S from './style';
import SelectedJobVacancy from './components/SelectedJobVacancy';

const apiJobs = axios.create({
    baseURL: 'http://localhost:3333',
});

const FeedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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
                    <select defaultValue={'default'}>
                        <option value="default" disabled>
                            Filtrar por:
                        </option>
                        <option value="mais recentes">Mais recentes</option>
                        <option value="mais antigos">Mais antigos</option>
                        <option value="a-z">Ordem alfabética: A-Z</option>
                        <option value="z-a">Ordem alfabética: Z-A</option>
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

                    {jobs.map((item) => (
                        <S.BoxJob
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            isActive={selectedJob.id === item.id}
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
                    <S.ContainerSelectedJob>
                        <S.HeaderSelectedJob>
                            <S.BoxHeaderSelectedJob>
                                <S.SubtitleSm transform="capitalize">
                                    {selectedJob.title}
                                </S.SubtitleSm>

                                <S.InlineContent gap="4px">
                                    {selectedJob.company && (
                                        <S.ParagraphSm
                                            color="#323232"
                                            weight="500"
                                        >
                                            {selectedJob.company}
                                        </S.ParagraphSm>
                                    )}

                                    {selectedJob.location && (
                                        <S.ParagraphSm
                                            color="#323232"
                                            opacity="0.9"
                                        >
                                            {selectedJob.location}
                                        </S.ParagraphSm>
                                    )}
                                </S.InlineContent>

                                <S.InlineContent gap="4px">
                                    <S.LabelSm>{selectedJob.time}</S.LabelSm>
                                    <S.LabelSm color="#323232">
                                        50 candidaturas
                                    </S.LabelSm>
                                </S.InlineContent>
                            </S.BoxHeaderSelectedJob>

                            <a
                                href={selectedJob.link}
                                aria-label={`Clique e se candidate para a vaga.`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <S.Button>Candidatar-se</S.Button>
                            </a>
                        </S.HeaderSelectedJob>

                        <S.SelectedJobContent>
                            <S.InlineContent gap="8px">
                                <S.IconWork src={Work} alt="work" />

                                <S.Badge>
                                    <S.ParagraphSm color="#001633">
                                        Tempo Integral
                                    </S.ParagraphSm>
                                </S.Badge>
                                <S.Badge>
                                    <S.ParagraphSm color="#001633">
                                        Remoto
                                    </S.ParagraphSm>
                                </S.Badge>
                                <S.Badge>
                                    <S.ParagraphSm color="#001633">
                                        Junior
                                    </S.ParagraphSm>
                                </S.Badge>
                                <S.Badge>
                                    <S.ParagraphSm color="#001633">
                                        CLT
                                    </S.ParagraphSm>
                                </S.Badge>
                            </S.InlineContent>

                            <S.ParagraphMd>Descrição da vaga</S.ParagraphMd>

                            <div>
                                <S.ParagraphSm color="#515050" description>
                                    {selectedJob.description}
                                </S.ParagraphSm>
                            </div>
                        </S.SelectedJobContent>
                    </S.ContainerSelectedJob>
                )}
            </S.SectionJob>
        </S.Container>
    );
};

export default FeedJobs;
