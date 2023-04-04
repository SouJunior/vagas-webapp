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

function JobDetails(id: any) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [jobDetails, setJobDetails] = useState<Job | null>(null);
    const api = useApi();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        async function getJobDetails() {
            try {
                const jobDetailsData = await api.getJobs(id.id);
                setJobDetails(jobDetailsData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        if (!jobDetails) {
            timeoutId = setTimeout(() => {
                getJobDetails();
            }, 500);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <Container>
            {isLoading ? (
                <JobDetailsSkeleton />
            ) : (
                <div>
                    {jobDetails?.title && <Title>{jobDetails.title}</Title>}
                    {jobDetails?.description && (
                        <Description>{jobDetails.description}</Description>
                    )}
                    {jobDetails?.headquarters && (
                        <Company>{jobDetails.headquarters}</Company>
                    )}
                    {jobDetails?.modality &&
                        jobDetails?.type &&
                        jobDetails?.typeContract && (
                            <Type>
                                {jobDetails.modality} - {jobDetails.type} -{' '}
                                {jobDetails.typeContract}
                            </Type>
                        )}
                    {jobDetails?.contractType && (
                        <Description>{jobDetails.contractType}</Description>
                    )}
                    {jobDetails?.benefits && (
                        <Benefits>{jobDetails.benefits}</Benefits>
                    )}
                </div>
            )}
        </Container>
    );
}

export default JobDetails;
