import React from 'react';
import { JobApplyDetailsContainer } from './styles';
import {
    CompanyInfo,
    CompanyLogoImg,
    CompanyName,
    Subtitle,
    Text,
    TextContainer,
    Title,
} from '../../FeedVagas/JobDetails/styles';
import { CompanyLogo } from '../../FeedVagas/JobDetails/CompanyLogo';

const JobApplyDetails = ({ Job, isLoading }: any) => {
    return (
        <JobApplyDetailsContainer>
            {isLoading ? (
                <Title>Carregando...</Title>
            ) : (
                <>
                    <Title>{Job?.title} </Title>

                    <Subtitle>
                        {Job?.modality} - {Job?.type} - {Job?.typeContract}
                    </Subtitle>

                    <Text>{Job?.contractType}</Text>

                    <CompanyInfo>
                        <CompanyLogoImg>
                            <CompanyLogo />
                        </CompanyLogoImg>
                        <CompanyName>Autofalante Mkt</CompanyName>
                    </CompanyInfo>

                    <TextContainer>
                        <Text>{Job?.description}</Text>
                        <Text>{Job?.prerequisites}</Text>
                        <Text>
                            R${Job?.salaryMin} - R$
                            {Job?.salaryMax}
                        </Text>
                        <Text>
                            {Job?.city}/{Job?.federalUnit}
                        </Text>
                        <Text>{Job?.affirmativeType}</Text>
                    </TextContainer>
                </>
            )}
        </JobApplyDetailsContainer>
    );
};

export default JobApplyDetails;
