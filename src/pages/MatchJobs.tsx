import React, { useEffect, useState } from 'react';
import Header from '../components/Portal/Header';
import { Footer } from '../components/Footer';
import {
    Container,
    LeftContainer,
    ResumePreview,
    RightContainer,
    Wrapper,
    Cards,
    PaymentInfo,
    PageTitle,
    DownloadBtn,
} from './styles/MatchJobs';
import MatchCard from '../components/MatchCard';
import { FiDownloadCloud } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

function MatchJobs() {
    const api = useApi();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const jobId = queryParams.get('jobId');
    const curriculumId = queryParams.get('curriculumId');

    const [currentJob, setCurrentJob] = useState<any | null>(null);
    const [currentCurriculum, setCurrentCurriculum] = useState<any | null>(
        null,
    );

    const getCurrentJob = async () => {
        try {
            const response = await api.getJobById(jobId);
            return response;
        } catch (error) {
            console.error('Erro ao obter os detalhes do trabalho:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCurrentJob();

            // esse sistema foi feito temporariamente até ser desenvolvida uma rota para puxar o curriculo do usuário por uma rota do back através do seu ID
            data?.applications.map((candidate: any) => {
                if (candidate?.curriculum?.id == curriculumId) {
                    setCurrentCurriculum(candidate?.curriculum?.file);
                }
            });

            if (data) {
                setCurrentJob(data);
            }
        };

        fetchData();
    }, [jobId]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'curriculum.pdf'; 
        link.href = currentCurriculum;
        link.target = '_blank'; 

        document.body.appendChild(link);
        link.click();
    };

    return (
        <>
            <Header />
            <Container>
                <PageTitle>Match de Vagas</PageTitle>
                <Wrapper>
                    <LeftContainer>
                        <ResumePreview>
                                <iframe
                                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                                        currentCurriculum,
                                    )}&embedded=true`}
                                    width="100%"
                                    height="100%"
                                    title="curriculum"
                                    allowFullScreen
                                ></iframe>
                        </ResumePreview>
                        <DownloadBtn onClick={() => handleDownload()}>
                            <FiDownloadCloud size={20} />
                            <p>Fazer Download</p>
                        </DownloadBtn>
                    </LeftContainer>
                    <RightContainer>
                        <Cards>
                            <MatchCard
                                title="Descrição da Vaga"
                                description={currentJob?.description}
                            />
                            <MatchCard
                                title="Responsabilidades"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                            <MatchCard
                                title="Qualificações"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                            <MatchCard
                                title="Benefícios"
                                description={currentJob?.benefits}
                            />
                            <MatchCard
                                title="Informações Adicionais"
                                description="Lorem ipsum dolor sit amet. Ut sunt rerum a totam alias et aspernatur delectus. Aut incidunt inventore nam voluptas doloremque 33 unde dolor qui cupiditate dolore et enim totam sit fugit nesciunt. Eos dolores dolorum et maxime aperiam a atque optio ut sequi nostrum qui quasi laborum est quia quos."
                            />
                        </Cards>
                        <PaymentInfo>
                            <h1>
                                Faixa Salarial:{' '}
                                {currentJob?.salaryMin?.toLocaleString(
                                    'pt-BR',
                                    { style: 'currency', currency: 'BRL' },
                                )}{' '}
                                -{' '}
                                {currentJob?.salaryMax?.toLocaleString(
                                    'pt-BR',
                                    { style: 'currency', currency: 'BRL' },
                                )}
                            </h1>
                        </PaymentInfo>
                    </RightContainer>
                </Wrapper>

                <Footer />
            </Container>
        </>
    );
}

export default MatchJobs;
