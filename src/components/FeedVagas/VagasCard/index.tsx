import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import {
    Card,
    Company,
    Content,
    Location,
    Logo,
    PublishedAt,
    Title,
    Type,
} from './styles';
import { ptBR } from 'date-fns/locale';

interface Props {
    id: string;
    title: string;
    company: string;
    headquarters: string;
    jobType: string;
    typeContract: string;
    modality: string;
    publishedAt: string;
    onClick?: () => void;
}

const JobCard: React.FC<Props> = ({
    id,
    title,
    company,
    headquarters,
    jobType,
    typeContract,
    modality,
    publishedAt,
    onClick,
}) => {
    const timeAgo = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <Card tabIndex={0} onClick={onClick}>
            <Logo src="{companyLogoUrl}" alt={company} />
            <Content>
                <Title>{title}</Title>
                <Company>Autofalante Mkt</Company>
                <Location>{headquarters}</Location>
                <Type>
                    {modality} - {jobType} - {typeContract}
                </Type>
            </Content>
            <PublishedAt>{timeAgo}</PublishedAt>
        </Card>
    );
};

export default JobCard;
