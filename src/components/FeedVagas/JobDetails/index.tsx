import { useEffect, useState } from 'react';
import {
    Benefits,
    Company,
    Container,
    Description,
    DescriptionInfo,
    ExtraInfoContainer,
    ExtraInfoItem,
    Location,
    PaddingContainer,
    Prerequisites,
    Title,
    Type,
} from './styles';
import { useApi } from '../../../hooks/useApi';
import { Job } from '../../../@types/jobs';
import JobDetailsSkeleton from './jobDetailsSkeleton';
import { Link } from 'react-router-dom';
import { object } from 'yup';

function JobDetails({ id, clickedJob }: { id: any; clickedJob: any }) {
    const [jobDetails, setJobDetails] = useState<Job | null>(null);
    const api = useApi();

    if (Array.isArray(clickedJob)) {
        clickedJob = Object.assign({}, ...clickedJob);
    }

    // useEffect(() => {
    //     let timeoutId: NodeJS.Timeout;

    //     async function getJobDetails() {
    //         try {
    //             const jobDetailsData = await api.getJob(id);
    //             setJobDetails(jobDetailsData);
    //             setIsLoading(false);
    //             console.log(jobDetailsData);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //     if (!jobDetails) {
    //         timeoutId = setTimeout(() => {}, 200);
    //     }
    //     getJobDetails();
    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // }, [id]);

    // Tirei a requisição para testar uma possível melhoria na aquisição desses dados. Pois a requisição
    // estava redundante e sendo feita "sem necessidade".

    return (
        <Container>
            <div>
                <PaddingContainer>
                    {clickedJob?.title && <Title>{clickedJob.title}</Title>}
                    {clickedJob?.title && <Company>Empresa Verde</Company>}
                    {clickedJob?.title && (
                        <Location>
                            Bento Gonçalves, Rio Grande do Sul, Brasil{' '}
                        </Location>
                    )}

                    {clickedJob?.headquarters && (
                        <Company>{clickedJob.headquarters}</Company>
                    )}
                    {clickedJob?.modality &&
                        clickedJob?.type &&
                        clickedJob?.typeContract && (
                            <Type>
                                {clickedJob.modality} - {clickedJob.type} -{' '}
                                {clickedJob.typeContract}
                            </Type>
                        )}
                </PaddingContainer>
                {clickedJob?.contractType && (
                    <ExtraInfoContainer>
                        <ExtraInfoItem colorActive={false}>
                            {clickedJob.contractType}
                        </ExtraInfoItem>
                        <ExtraInfoItem colorActive={false}>
                            {'51-200 funcionários'}
                        </ExtraInfoItem>
                        <ExtraInfoItem colorActive={true}>
                            <Link to="">{'Recrutando agora'}</Link>
                        </ExtraInfoItem>
                    </ExtraInfoContainer>
                )}
                <PaddingContainer>
                    {
                        <DescriptionInfo>
                            {
                                'Procuramos um profissional para ocupar a posição de UX Designer em um cliente referência no setor de produção de imunobiológicos (vacinas) e análises laboratoriais veterinários.'
                            }
                        </DescriptionInfo>
                    }
                </PaddingContainer>
            </div>
        </Container>
    );
}

export default JobDetails;
