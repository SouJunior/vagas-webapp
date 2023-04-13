import { useEffect, useState } from 'react';
import {
    Benefits,
    Company,
    Container,
    Description,
    Location,
    Prerequisites,
    Title,
    Type,
} from './styles';
import { useApi } from '../../../hooks/useApi';
import { Job } from '../../../@types/jobs';
import JobDetailsSkeleton from './jobDetailsSkeleton';

function JobDetails({ id, clickedJob }: { id: any; clickedJob: any }) {
    const [jobDetails, setJobDetails] = useState<Job | null>(null);
    const api = useApi();

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
                    {clickedJob[0]?.title && (
                        <Title>{clickedJob[0].title}</Title>
                    )}
                    {clickedJob[0]?.description && (
                        <Description>{clickedJob[0].description}</Description>
                    )}
                    {clickedJob[0]?.headquarters && (
                        <Company>{clickedJob[0].headquarters}</Company>
                    )}
                    {clickedJob[0]?.modality &&
                        clickedJob[0]?.type &&
                        clickedJob[0]?.typeContract && (
                            <Type>
                                {clickedJob[0].modality} - {clickedJob[0].type}{' '}
                                - {clickedJob[0].typeContract}
                            </Type>
                        )}
                    {clickedJob[0]?.contractType && (
                        <Description>{clickedJob[0].contractType}</Description>
                    )}
                </div>
        </Container>
    );
}

export default JobDetails;
